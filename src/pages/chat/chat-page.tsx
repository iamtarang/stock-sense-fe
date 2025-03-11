import { useEffect, useRef, useCallback, memo } from "react";
import ChatInput from "./components/chat-input";
import ChatBubble from "./components/chat-bubble";
import { useChatService } from "../../hooks/use-chatservice";

// Memoize the ChatBubble component to prevent unnecessary re-renders
const MemoizedChatBubble = memo(ChatBubble);

const ChatPage = () => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageListRef = useRef<HTMLDivElement>(null);
  const { isStreaming, loading, messages, sendMessage, stopStreaming } = useChatService();

  // Scroll to bottom when messages change or during streaming
  useEffect(() => {
    scrollToBottom();
  }, [messages, isStreaming]);

  // Optimized scroll to bottom
  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }, []);

  // Handle sending message
  const handleSendMessage = useCallback(async (text: string) => {
    if (text.trim() && !loading && !isStreaming) {
      await sendMessage(text);
    }
  }, [loading, isStreaming, sendMessage]);

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-400">
        <h1 className="text-xl font-bold">Stock Sense</h1>
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