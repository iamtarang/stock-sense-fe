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
  const lastLoadedSessionId = useRef<number | null>(null);

  const {
    isStreaming,
    loading,
    messages,
    sendMessage,
    stopStreaming,
    sessionId: hookSessionId,
    loadSessionMessages,
    setSessionId,
    loadSessions
  } = useChatService();

  // Handle session ID from props (if provided)
  useEffect(() => {
    if (propSessionId && propSessionId !== hookSessionId) {
      console.log(`Setting session ID from props: ${propSessionId}`);
      setSessionId(propSessionId);
    }
  }, [propSessionId, hookSessionId, setSessionId]);

  // Handle session title updates and session list loading
  useEffect(() => {
    if (hookSessionId && hookSessionId !== lastLoadedSessionId.current) {
      console.log(`Loading data for session: ${hookSessionId}`);

      // Load the session messages (if needed)
      if (!isBatchLoading) {
        setIsBatchLoading(true);
        loadSessionMessages(hookSessionId)
          .finally(() => {
            setIsBatchLoading(false);
            lastLoadedSessionId.current = hookSessionId;
          });
      }

      // Load the session list (separate from message loading)
      loadSessions();
    }
  }, [hookSessionId, loadSessionMessages, loadSessions, isBatchLoading]);

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
      // When sending a message, don't worry about the session ID
      // It will be handled by the stream processing
      await sendMessage(text);

      // Store the message text for potential title update later
      if (hookSessionId) {
        // You can update the title here if needed using the first message
        // updateSessionTitle(hookSessionId, text);
      }
    }
  }, [loading, isStreaming, sendMessage, hookSessionId]);

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
          {messages.map((message) => (
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
          disabled={loading || isBatchLoading}
        />
      </div>
    </div>
  );
};

export default ChatPage;