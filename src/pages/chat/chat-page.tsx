import { useEffect, useRef, useCallback, memo, useState } from "react";
import ChatInput from "./components/chat-input";
import ChatBubble from "./components/chat-bubble";
import { useChatService } from "../../hooks/use-chatservice";

// Memoize the ChatBubble component to prevent unnecessary re-renders
const MemoizedChatBubble = memo(ChatBubble);

// Add proper typing for the props
interface ChatPageProps {
  sessionId?: number | null;
}

const ChatPage = ({ sessionId: propSessionId }: ChatPageProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageListRef = useRef<HTMLDivElement>(null);
  const [isBatchLoading, setIsBatchLoading] = useState(false);
  const {
    isStreaming,
    loading,
    messages,
    sendMessage,
    stopStreaming,
    sessionId: hookSessionId,
    loadSessionMessages,
    setSessionId
  } = useChatService();

  // Log both the prop sessionId and the hook sessionId
  useEffect(() => {
    // Only sync if propSessionId exists and differs from hookSessionId
    if (propSessionId && propSessionId !== hookSessionId) {
      setSessionId(propSessionId);
    }
  }, [propSessionId, hookSessionId, setSessionId]);

  // Modify this useEffect to prevent continuous loading
  const prevSessionIdRef = useRef<number | null>(hookSessionId);
  useEffect(() => {
    // Store the previous hookSessionId in a ref to compare
    // Only load messages if sessionId exists AND has changed
    if (hookSessionId && hookSessionId !== prevSessionIdRef.current) {
      setIsBatchLoading(true);
      loadSessionMessages(hookSessionId)
        .finally(() => {
          setIsBatchLoading(false);
        });
    }

    // Update the ref for next comparison
    prevSessionIdRef.current = hookSessionId;
  }, [hookSessionId, loadSessionMessages]);

  // Optimized scroll to bottom
  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }, []);

  // Scroll to bottom when messages change or during streaming
  useEffect(() => {
    scrollToBottom();
  }, [messages, isStreaming, scrollToBottom]);


  // Handle sending message
  const handleSendMessage = useCallback(async (text: string) => {
    if (text.trim() && !loading && !isStreaming) {
      await sendMessage(text);
    }
  }, [loading, isStreaming, sendMessage]);

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-gray-400">
        <div className="flex-1 flex md:justify-start justify-center">
          <h1 className="text-xl font-bold">Stock Sense</h1>
        </div>
      </div>

      {/* Chat messages container */}
      <div
        className="flex-1 p-4 overflow-y-auto"
        ref={messageListRef}
      >
        <div className="space-y-4">
          {
            messages.map((message) => (
              <MemoizedChatBubble
                key={message.id}
                message={message}
                isStreaming={message.isStreaming}
                isBatchLoaded={isBatchLoading}
              />
            ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input area */}
      <div className="p-4 border-t border-gray-400">
        <ChatInput
          onSendMessage={handleSendMessage}
          onStopStreaming={stopStreaming}
          isStreaming={isStreaming}
          disabled={loading}
        />
      </div>
    </div>
  );
};

export default ChatPage;