/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef } from "react";
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
              <div className="markdown-content">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    h1: ({ node, children, ...props }) => {
                      const shouldCaptureRef = isLastElement(children);
                      return (
                        <h1 
                          className="text-2xl font-bold mt-4 mb-3" 
                          {...props}
                          ref={shouldCaptureRef ? captureLastElement : undefined}
                        >
                          {children}
                        </h1>
                      );
                    },
                    h2: ({ node, children, ...props }) => {
                      const shouldCaptureRef = isLastElement(children);
                      return (
                        <h2 
                          className="text-xl font-semibold mt-4 mb-2" 
                          {...props}
                          ref={shouldCaptureRef ? captureLastElement : undefined}
                        >
                          {children}
                        </h2>
                      );
                    },
                    h3: ({ node, children, ...props }) => {
                      const shouldCaptureRef = isLastElement(children);
                      return (
                        <h3
                          className="text-lg font-semibold mt-3 mb-2"
                          {...props}
                          ref={shouldCaptureRef ? captureLastElement : undefined}
                        >
                          {children}
                        </h3>
                      );
                    },
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
                    strong: ({ node, children, ...props }) => {
                      const shouldCaptureRef = isLastElement(children);
                      return (
                        <strong 
                          className="font-bold text-gray-900" 
                          {...props}
                          ref={shouldCaptureRef ? captureLastElement : undefined}
                        >
                          {children}
                        </strong>
                      );
                    },
                    a: ({ node, children, href, ...props }) => {
                      const shouldCaptureRef = isLastElement(children);
                      return (
                        <a
                          className="text-blue-600 underline hover:text-blue-800"
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          {...props}
                          ref={shouldCaptureRef ? captureLastElement : undefined}
                        >
                          {children}
                        </a>
                      );
                    },
                    ul: ({ node, children, ...props }) => {
                      const shouldCaptureRef = isLastElement(children);
                      return (
                        <ul 
                          className="list-disc pl-5 mb-4" 
                          {...props}
                          ref={shouldCaptureRef ? captureLastElement : undefined}
                        >
                          {children}
                        </ul>
                      );
                    },
                    ol: ({ node, children, ...props }) => {
                      const shouldCaptureRef = isLastElement(children);
                      return (
                        <ol 
                          className="list-decimal pl-5 mb-4" 
                          {...props}
                          ref={shouldCaptureRef ? captureLastElement : undefined}
                        >
                          {children}
                        </ol>
                      );
                    },
                    li: ({ node, children, ...props }) => {
                      const shouldCaptureRef = isLastElement(children);
                      return (
                        <li 
                          className="mb-2" 
                          {...props}
                          ref={shouldCaptureRef ? captureLastElement : undefined}
                        >
                          {children}
                        </li>
                      );
                    },
                    blockquote: ({ node, children, ...props }) => {
                      const shouldCaptureRef = isLastElement(children);
                      return (
                        <blockquote
                          className="border-l-4 border-gray-400 pl-3 italic text-gray-600 mb-4"
                          {...props}
                          ref={shouldCaptureRef ? captureLastElement : undefined}
                        >
                          {children}
                        </blockquote>
                      );
                    },
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
                    pre: ({ node, children, ...props }) => {
                      const shouldCaptureRef = isLastElement(children);
                      return (
                        <pre 
                          className="bg-gray-100 rounded p-2 overflow-x-auto mb-4" 
                          {...props}
                          ref={shouldCaptureRef ? captureLastElement : undefined}
                        >
                          {children}
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