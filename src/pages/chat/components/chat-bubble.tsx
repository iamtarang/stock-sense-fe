/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Message } from "../../../types/message";

interface ChatBubbleProps {
  message: Message;
  isStreaming?: boolean;
}

// Add proper typing for the code component props
interface CodeProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  node?: any;
  inline?: boolean; 
  className?: string;
  children?: React.ReactNode;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, isStreaming }) => {
  const isUser = message.sender === "user";
  const showTypingIndicator = !isUser && isStreaming;
  const hasContent = message.text && message.text.trim().length > 0;
  const [showCursor, setShowCursor] = useState(true);
  
  // Use React state for cursor blinking instead of DOM manipulation
  useEffect(() => {
    if (!isUser && showTypingIndicator) {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500); // Blink every 500ms
      
      return () => clearInterval(cursorInterval);
    }
    
    return () => {};
  }, [isUser, showTypingIndicator]);

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

  // Typing cursor component
  const TypingCursor = () => (
    <span 
      className={`inline-block w-0.5 h-4 bg-gray-800 align-middle ml-1 ${
        showCursor ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transition: 'opacity 0.2s ease-in-out', verticalAlign: 'middle' }}
    />
  );

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
              <div className="markdown-content">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    h1: ({ node, children, ...props }) => {
                      const shouldShowCursor = isLastElement(children) && showTypingIndicator;
                      return (
                        <h1 
                          className="text-2xl font-bold mt-4 mb-3" 
                          {...props}
                        >
                          {children}
                          {shouldShowCursor && <TypingCursor />}
                        </h1>
                      );
                    },
                    h2: ({ node, children, ...props }) => {
                      const shouldShowCursor = isLastElement(children) && showTypingIndicator;
                      return (
                        <h2 
                          className="text-xl font-semibold mt-4 mb-2" 
                          {...props}
                        >
                          {children}
                          {shouldShowCursor && <TypingCursor />}
                        </h2>
                      );
                    },
                    h3: ({ node, children, ...props }) => {
                      const shouldShowCursor = isLastElement(children) && showTypingIndicator;
                      return (
                        <h3
                          className="text-lg font-semibold mt-3 mb-2"
                          {...props}
                        >
                          {children}
                          {shouldShowCursor && <TypingCursor />}
                        </h3>
                      );
                    },
                    p: ({ node, children, ...props }) => {
                      const shouldShowCursor = isLastElement(children) && showTypingIndicator;
                      return (
                        <p 
                          className="leading-relaxed text-gray-800 mb-4" 
                          {...props}
                        >
                          {children}
                          {shouldShowCursor && <TypingCursor />}
                        </p>
                      );
                    },
                    strong: ({ node, children, ...props }) => {
                      const shouldShowCursor = isLastElement(children) && showTypingIndicator;
                      return (
                        <strong 
                          className="font-bold text-gray-900" 
                          {...props}
                        >
                          {children}
                          {shouldShowCursor && <TypingCursor />}
                        </strong>
                      );
                    },
                    a: ({ node, children, href, ...props }) => {
                      const shouldShowCursor = isLastElement(children) && showTypingIndicator;
                      return (
                        <a
                          className="text-blue-600 underline hover:text-blue-800"
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          {...props}
                        >
                          {children}
                          {shouldShowCursor && <TypingCursor />}
                        </a>
                      );
                    },
                    ul: ({ node, children, ...props }) => {
                      const shouldShowCursor = isLastElement(children) && showTypingIndicator;
                      return (
                        <ul 
                          className="list-disc pl-5 mb-4" 
                          {...props}
                        >
                          {children}
                          {shouldShowCursor && <TypingCursor />}
                        </ul>
                      );
                    },
                    ol: ({ node, children, ...props }) => {
                      const shouldShowCursor = isLastElement(children) && showTypingIndicator;
                      return (
                        <ol 
                          className="list-decimal pl-5 mb-4" 
                          {...props}
                        >
                          {children}
                          {shouldShowCursor && <TypingCursor />}
                        </ol>
                      );
                    },
                    li: ({ node, children, ...props }) => {
                      const shouldShowCursor = isLastElement(children) && showTypingIndicator;
                      return (
                        <li 
                          className="mb-2" 
                          {...props}
                        >
                          {children}
                          {shouldShowCursor && <TypingCursor />}
                        </li>
                      );
                    },
                    blockquote: ({ node, children, ...props }) => {
                      const shouldShowCursor = isLastElement(children) && showTypingIndicator;
                      return (
                        <blockquote
                          className="border-l-4 border-gray-400 pl-3 italic text-gray-600 mb-4"
                          {...props}
                        >
                          {children}
                          {shouldShowCursor && <TypingCursor />}
                        </blockquote>
                      );
                    },
                    code: ({ node, inline, className, children, ...props }: CodeProps) => {
                      const match = /language-(\w+)/.exec(className || '');
                      const shouldShowCursor = isLastElement(children) && showTypingIndicator;
                      
                      return inline ? (
                        <code
                          className="bg-gray-100 text-sm px-1 py-0.5 rounded"
                          {...props}
                        >
                          {children}
                          {shouldShowCursor && <TypingCursor />}
                        </code>
                      ) : (
                        <pre className="bg-gray-100 rounded p-2 overflow-x-auto mb-4">
                          <code
                            className={match ? `language-${match[1]}` : ''}
                            {...props}
                          >
                            {children}
                            {shouldShowCursor && <TypingCursor />}
                          </code>
                        </pre>
                      );
                    },
                    pre: ({ node, children, ...props }) => {
                      const shouldShowCursor = isLastElement(children) && showTypingIndicator;
                      return (
                        <pre 
                          className="bg-gray-100 rounded p-2 overflow-x-auto mb-4" 
                          {...props}
                        >
                          {children}
                          {shouldShowCursor && <TypingCursor />}
                        </pre>
                      );
                    },
                    hr: ({ node, ...props }) => (
                      <hr className="my-6 border-t border-gray-300" {...props} />
                    ),
                  }}
                >
                  {message.text}
                </ReactMarkdown>
              </div>
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

      .markdown-content h1 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-top: 1.5rem;
        margin-bottom: 1rem;
        line-height: 1.2;
      }
      
      .markdown-content h2 {
        font-size: 1.25rem;
        font-weight: 600;
        margin-top: 1.5rem;
        margin-bottom: 0.75rem;
        line-height: 1.3;
      }
      
      .markdown-content h3 {
        font-size: 1.125rem;
        font-weight: 600;
        margin-top: 1.25rem;
        margin-bottom: 0.75rem;
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
        margin-bottom: 1rem;
      }
      
      .markdown-content ul {
        list-style-type: disc;
        padding-left: 1.5rem;
        margin-bottom: 1rem;
      }
      
      .markdown-content li {
        margin-bottom: 0.5rem;
      }
    `;
    document.head.appendChild(style);
  }
}

export default React.memo(ChatBubble);