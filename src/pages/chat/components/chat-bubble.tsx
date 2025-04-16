import React, { useEffect, useRef, useState } from "react";
import { Message } from "../../../types/message";
import { MarkdownRenderer } from "./markdown/MarkdownRenderer";

interface ChatBubbleProps {
  message: Message;
  isStreaming?: boolean;
  isBatchLoaded?: boolean;
}

// Loading indicator component
const LoadingIndicator: React.FC = () => (
  <div className="flex space-x-2 py-1">
    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse-dot-1"></span>
    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse-dot-2"></span>
    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse-dot-3"></span>
  </div>
);

const ChatBubble: React.FC<ChatBubbleProps> = ({
  message,
  isStreaming = false,
  isBatchLoaded = false
}) => {
  const isUser = message.sender === "user";
  const hasContent = message.text && message.text.trim().length > 0;
  const [isVisible, setIsVisible] = useState(false);
  const bubbleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, isBatchLoaded ? 10 : 0);
    
    return () => clearTimeout(timeout);
  }, [isBatchLoaded]);

  if (!isUser && !hasContent && !isStreaming) {
    return null;
  }

  return (
    <div
      ref={bubbleRef}
      className={`flex ${isUser ? "justify-end" : "justify-start"} 
        transition-opacity duration-300 ease-in-out mb-4 
        ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      data-message-id={message.id}
    >
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 mr-2 flex items-center justify-center">
          <span className="text-xs text-gray-500">AI</span>
        </div>
      )}

      <div
        className={`max-w-[85%] rounded-lg p-4 break-words shadow-sm
          ${isUser 
            ? 'bg-blue-50 text-gray-900 rounded-tr-none border border-blue-100'
            : 'bg-white border border-gray-100 rounded-tl-none'
          }`}
      >
        {isStreaming && !hasContent ? (
          <LoadingIndicator />
        ) : (
          <div className="prose prose-sm max-w-full">
            {isUser ? (
              <div className="text-gray-800 leading-relaxed">{message.text}</div>
            ) : (
              <MarkdownRenderer content={message.text} />
            )}
          </div>
        )}
      </div>

      {isUser && (
        <div className="w-8 h-8 rounded-full bg-blue-500 flex-shrink-0 ml-2 flex items-center justify-center">
          <span className="text-xs text-white">You</span>
        </div>
      )}
    </div>
  );
};

// Add required CSS animations
if (typeof document !== 'undefined' && !document.getElementById('chat-bubble-animations')) {
  const style = document.createElement('style');
  style.id = 'chat-bubble-animations';
  style.textContent = `
    @keyframes pulse-dot {
      0%, 100% { transform: scale(0.7); opacity: 0.5; }
      50% { transform: scale(1); opacity: 1; }
    }
    
    .animate-pulse-dot-1 {
      animation: pulse-dot 1.4s ease-in-out 0s infinite;
    }
    
    .animate-pulse-dot-2 {
      animation: pulse-dot 1.4s ease-in-out 0.2s infinite;
    }
    
    .animate-pulse-dot-3 {
      animation: pulse-dot 1.4s ease-in-out 0.4s infinite;
    }
  `;
  document.head.appendChild(style);
}

export default React.memo(ChatBubble);
 
