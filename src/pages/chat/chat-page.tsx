import { useEffect, useRef, useCallback, memo } from "react";
import ChatInput from "./components/chat-input";
import ChatBubble from "./components/chat-bubble";
import { useChatService } from "../../hooks/use-chatservice";
import { MessageSquarePlus } from "lucide-react";

// Memoize the ChatBubble component to prevent unnecessary re-renders
const MemoizedChatBubble = memo(ChatBubble);

const ChatPage = () => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageListRef = useRef<HTMLDivElement>(null);
  const { isStreaming, loading, messages, sendMessage, stopStreaming } = useChatService();

  // Improved scroll to bottom that works better with streaming content
  const scrollToBottom = useCallback(() => {
    // Use requestAnimationFrame to ensure DOM updates have completed
    requestAnimationFrame(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }, []);

  // Scroll to bottom when messages change or during streaming
  useEffect(() => {
    scrollToBottom();
    
    // If streaming is active, set up an interval to keep scrolling to bottom
    // This ensures smooth scrolling during character-by-character animation
    let scrollInterval: NodeJS.Timeout | null = null;
    
    if (isStreaming) {
      scrollInterval = setInterval(scrollToBottom, 100);
    }
    
    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
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
        <div>
          <button className="text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-2" aria-label="New Chat">
            <MessageSquarePlus size={24} />
            <span className="hidden sm:inline">New Chat</span>
          </button>
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