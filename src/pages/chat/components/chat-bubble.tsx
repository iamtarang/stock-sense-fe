import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Message } from "../../../types/message";

interface ChatBubbleProps {
  message: Message;
  isStreaming?: boolean;
  isBatchLoaded?: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  message,
  isStreaming = false,
  isBatchLoaded = false
}) => {
  const isUser = message.sender === "user";
  const hasContent = message.text && message.text.trim().length > 0;
  const [isVisible, setIsVisible] = useState(false);
  const bubbleRef = useRef<HTMLDivElement>(null);
  
  // Simple appearance animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, isBatchLoaded ? 10 : 0);
    
    return () => clearTimeout(timeout);
  }, [isBatchLoaded]);

  // Don't render empty non-user messages unless streaming
  if (!isUser && !hasContent && !isStreaming) {
    return null;
  }

  // Improved loading indicator with smooth animation
  const LoadingIndicator = () => (
    <div className="flex space-x-2 py-1">
      <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse-dot-1"></span>
      <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse-dot-2"></span>
      <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse-dot-3"></span>
    </div>
  );

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
        className={`max-w-[85%] rounded-lg p-4 break-words overflow-hidden whitespace-pre-wrap shadow-sm
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
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
              >
                {message.text}
              </ReactMarkdown>
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

// Add CSS styles once
if (typeof document !== 'undefined' && !document.getElementById('chat-bubble-styles')) {
  const style = document.createElement('style');
  style.id = 'chat-bubble-styles';
  style.textContent = `
    .markdown-content h1 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-top: 0.75rem;
      margin-bottom: 0.5rem;
      line-height: 1.2;
    }
    
    .markdown-content h2 {
      font-size: 0.75rem;
      font-weight: 600;
      margin-top: 1.5rem;
      margin-bottom: 0.5rem;
      line-height: 1.3;
    }
    
    .markdown-content h3 {
      font-size: 0.5rem;
      font-weight: 600;
      margin-top: 1.25rem;
      margin-bottom: 0.5rem;
      line-height: 1.4;
    }
    
    .markdown-content a {
      color: #2563eb;
      text-decoration: underline;
    }
    
    .markdown-content a:hover {
      color: #1e40af;
    }
    
    .markdown-content hr {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
      border-top-width: 1px;
      border-color: rgb(209, 213, 219);
    }
    
    .markdown-content ol {
      list-style-type: decimal;
      padding-left: 1.5rem;
      margin-bottom: 0.5rem;
    }
    
    .markdown-content ul {
      list-style-type: disc;
      padding-left: 1.5rem;
      margin-bottom: 0.5rem;
    }
    
    .markdown-content li {
      margin-bottom: 0.5rem;
    }
    
    .markdown-content p {
      margin-bottom: 0.5rem;
    }
    
    .markdown-content pre {
      background-color: #f3f4f6;
      padding: 0.75rem;
      border-radius: 0.375rem;
      overflow-x: auto;
      margin-bottom: 1rem;
    }
    
    .markdown-content code {
      font-family: monospace;
      font-size: 0.875rem;
      background-color: #f3f4f6;
      padding: 0.125rem 0.25rem;
      border-radius: 0.25rem;
    }
    
    .markdown-content pre code {
      padding: 0;
      background-color: transparent;
    }
    
    .markdown-content blockquote {
      border-left-width: 4px;
      border-left-color: #d1d5db;
      padding-left: 1rem;
      font-style: italic;
      color: #4b5563;
      margin-bottom: 1rem;
    }
   
     .markdown-content table {
      border-collapse: collapse;
      width: 100%;
      margin-top: 0.5rem;
      margin-bottom: 0.75rem;
      font-size: 0.875rem;
    }
    
    .markdown-content table th {
      background-color: #f3f4f6;
      font-weight: 600;
      padding: 0.5rem 0.75rem;
      text-align: left;
      border: 1px solid #e5e7eb;
    }
    
    .markdown-content table td {
      padding: 0.5rem 0.75rem;
      border: 1px solid #e5e7eb;
    }
    
    .markdown-content table tr:nth-child(even) {
      background-color: #f9fafb;
    }
    
    /* Custom animations for loading indicator */
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
