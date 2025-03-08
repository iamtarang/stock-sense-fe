import React, { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Message } from "../../../utils/types";

interface ChatBubbleProps {
  message: Message;
  isStreaming?: boolean;
}

// Add proper typing for the code component props
interface CodeProps {
  node?: any;
  inline?: boolean; 
  className?: string;
  children?: React.ReactNode;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, isStreaming }) => {
  const isUser = message.sender === "user";
  const showTypingIndicator = !isUser && isStreaming;
  const hasContent = message.text && message.text.trim().length > 0;
  const lastChildRef = useRef<HTMLElement | null>(null);

  // Effect to handle the cursor animation
  useEffect(() => {
    if (!isUser && showTypingIndicator && lastChildRef.current) {
      // Clear any existing cursor
      const existingCursor = document.getElementById('streaming-cursor');
      if (existingCursor) {
        existingCursor.remove();
      }

      // Create cursor element
      const cursor = document.createElement('span');
      cursor.id = 'streaming-cursor';
      cursor.className = 'inline-block w-0.5 h-4 bg-gray-800 align-middle';
      cursor.style.animation = 'blink 1s infinite';
      cursor.style.marginLeft = '1px';
      cursor.style.verticalAlign = 'middle';

      // Append cursor to the last child
      lastChildRef.current.appendChild(cursor);

      // Return cleanup function
      return () => {
        if (cursor && cursor.parentNode) {
          cursor.parentNode.removeChild(cursor);
        }
      };
    }
  }, [isUser, showTypingIndicator, message.text]);

  // Function to capture the last rendered element
  const captureLastElement = (element: HTMLElement | null) => {
    if (element) {
      lastChildRef.current = element;
    }
  };

  // Helper function to safely convert ReactNode to string
  const getChildrenAsString = (children: React.ReactNode): string => {
    if (children === undefined || children === null) return '';
    if (typeof children === 'string') return children;
    if (Array.isArray(children)) {
      return children.map(child => getChildrenAsString(child)).join('');
    }
    if (typeof children === 'object') {
      // Handle React elements or other objects that might be in children
      return '';
    }
    return String(children);
  };

  // Helper function to check if this element contains the end of the text
  const isLastElement = (elementContent: React.ReactNode): boolean => {
    const content = getChildrenAsString(elementContent).trim();
    const messageText = message.text.trim();
    
    // If content is empty, it can't be the last element
    if (!content) return false;
    
    // Check if message ends with this content
    return messageText.endsWith(content);
  };

  if (!isUser && !hasContent && !showTypingIndicator) {
    return null;
  }

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      } transition-opacity duration-300 ease-in-out`}
    >
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 mr-2"></div>
      )}

      <div
        className={`max-w-[85%] rounded-lg p-3 break-words overflow-hidden whitespace-pre-wrap ${
          isUser 
          ? 'bg-gray-200 text-gray-900 rounded-tr-none'
          : 'bg-white border border-gray-300 rounded-tl-none'
        }`}
      >
        {showTypingIndicator && !hasContent ? (
          <div className="flex space-x-1 py-1">
            <span className="dot w-1.5 h-1.5 bg-gray-500 rounded-full animate-fade-1"></span>
            <span className="dot w-1.5 h-1.5 bg-gray-500 rounded-full animate-fade-2"></span>
            <span className="dot w-1.5 h-1.5 bg-gray-500 rounded-full animate-fade-3"></span>
          </div>
        ) : (
          <div className="prose prose-sm prose-blue max-w-full">
            {isUser ? (
              <div className="text-gray-800 leading-relaxed">{message.text}</div>
            ) : (
              <>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    h1: ({ node, ...props }) => (
                      <h1 className="text-xl font-bold mt-2 mb-2" {...props} />
                    ),
                    h2: ({ node, ...props }) => (
                      <h2 className="text-lg font-semibold mt-2 mb-2" {...props} />
                    ),
                    h3: ({ node, ...props }) => (
                      <h3
                        className="text-base font-semibold mt-2 mb-2"
                        {...props}
                      />
                    ),
                    p: ({ node, children, ...props }) => {
                      const shouldCaptureRef = isLastElement(children);
                      return (
                        <p 
                          className="leading-relaxed text-gray-800 mb-4" 
                          {...props}
                          ref={shouldCaptureRef ? captureLastElement : undefined}
                        >
                          {children}
                        </p>
                      );
                    },
                    strong: ({ node, ...props }) => (
                      <strong className="font-bold text-gray-900" {...props} />
                    ),
                    a: ({ node, ...props }) => (
                      <a
                        className="text-blue-600 underline hover:text-blue-800"
                        target="_blank"
                        rel="noopener noreferrer"
                        {...props}
                      />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul className="list-disc pl-5 mb-4" {...props} />
                    ),
                    ol: ({ node, ...props }) => (
                      <ol className="list-decimal pl-5 mb-4" {...props} />
                    ),
                    li: ({ node, children, ...props }) => {
                      const shouldCaptureRef = isLastElement(children);
                      
                      return (
                        <li 
                          className="mb-1" 
                          {...props}
                          ref={shouldCaptureRef ? captureLastElement : undefined} 
                        />
                      );
                    },
                    blockquote: ({ node, ...props }) => (
                      <blockquote
                        className="border-l-4 border-gray-400 pl-3 italic text-gray-600 mb-4"
                        {...props}
                      />
                    ),
                    code: ({ node, inline, className, children, ...props }: CodeProps) => {
                      const match = /language-(\w+)/.exec(className || '');
                      const shouldCaptureRef = isLastElement(children);
                      
                      return inline ? (
                        <code
                          className="bg-gray-100 text-sm px-1 py-0.5 rounded"
                          {...props}
                          ref={shouldCaptureRef ? captureLastElement : undefined}
                        >
                          {children}
                        </code>
                      ) : (
                        <pre className="bg-gray-100 rounded p-2 overflow-x-auto mb-4">
                          <code
                            className={match ? `language-${match[1]}` : ''}
                            {...props}
                            ref={shouldCaptureRef ? captureLastElement : undefined}
                          >
                            {children}
                          </code>
                        </pre>
                      );
                    },
                    pre: ({ node, ...props }) => (
                      <pre className="bg-gray-100 rounded p-2 overflow-x-auto mb-4" {...props} />
                    ),
                  }}
                >
                  {message.text}
                </ReactMarkdown>
              </>
            )}
          </div>
        )}
      </div>

      {isUser && (
        <div className="w-8 h-8 rounded-full bg-blue-600 flex-shrink-0 ml-2"></div>
      )}
    </div>
  );
};

// Add animation styles
if (typeof document !== 'undefined') {
  if (!document.getElementById('blink-animation')) {
    const style = document.createElement('style');
    style.id = 'blink-animation';
    style.textContent = `
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
      
      @keyframes fade-1 {
        0%, 100% { opacity: 0.4; }
        50% { opacity: 1; }
      }
      
      @keyframes fade-2 {
        0%, 100% { opacity: 0.4; }
        50% { opacity: 1; }
        0% { animation-delay: 0.2s; }
      }
      
      @keyframes fade-3 {
        0%, 100% { opacity: 0.4; }
        50% { opacity: 1; }
        0% { animation-delay: 0.4s; }
      }
      
      .animate-fade-1 {
        animation: fade-1 1.2s infinite;
      }
      
      .animate-fade-2 {
        animation: fade-2 1.2s infinite;
        animation-delay: 0.2s;
      }
      
      .animate-fade-3 {
        animation: fade-3 1.2s infinite;
        animation-delay: 0.4s;
      }
    `;
    document.head.appendChild(style);
  }
}

export default React.memo(ChatBubble);