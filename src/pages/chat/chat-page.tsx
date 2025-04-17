import { useState, useEffect, useRef, useCallback, memo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ChatInput from "./components/chat-input";
import ChatBubble from "./components/chat-bubble";
import Sidebar from "./components/sidebar";
import { useChatService } from "../../hooks/use-chatservice";

// Memoize the ChatBubble component to prevent unnecessary re-renders
const MemoizedChatBubble = ChatBubble;

const ChatLayout = () => {
  // Get chat ID from URL parameter
  const { id: chatIdParam } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageListRef = useRef<HTMLDivElement>(null);
  const [isBatchLoading, setIsBatchLoading] = useState(false);
  const lastLoadedSessionId = useRef<number | null>(null);
  
  // Add a ref to track session navigation status
  const pendingNavigationRef = useRef<boolean>(false);

  const {
    isStreaming,
    loading,
    messages,
    sendMessage,
    stopStreaming,
    sessionId: hookSessionId,
    loadSessionMessages,
    setSessionId,
    loadSessions,
    sessions,
    clearMessages,
  } = useChatService();

  // Handle URL parameter changes
  useEffect(() => {
    const parsedId = chatIdParam ? parseInt(chatIdParam, 10) : null;

    if (parsedId !== hookSessionId) {
      console.log(`URL parameter changed to: ${parsedId}`);
      setSessionId(parsedId);
    }
  }, [chatIdParam, hookSessionId, setSessionId]);

  // Listen for session ID changes to handle navigation
  useEffect(() => {
    // Only navigate if we're waiting for a navigation and have a valid session ID
    if (pendingNavigationRef.current && hookSessionId !== null) {
      console.log(`Navigating to new session: ${hookSessionId}`);
      navigate(`/chat/${hookSessionId}`);
      pendingNavigationRef.current = false;
    }
  }, [hookSessionId, navigate]);
  
  // Handle session loading
  useEffect(() => {
    if (hookSessionId !== lastLoadedSessionId.current) {
      // console.log(`Session changed to: ${hookSessionId}`);

      if (hookSessionId === null) {
        lastLoadedSessionId.current = null;
        clearMessages()
      } else {
        // console.log(`Loading data for session: ${hookSessionId}`);

        // Load the session messages (if needed)
        if (!isBatchLoading) {
          setIsBatchLoading(true);
          loadSessionMessages(hookSessionId).finally(() => {
            setIsBatchLoading(false);
            lastLoadedSessionId.current = hookSessionId;
          });
        }
      }

      // Load the session list (separate from message loading)
      loadSessions();
    }
  }, [hookSessionId, loadSessionMessages, loadSessions, isBatchLoading]);

  // Optimized scroll to bottom
  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
      }
    });
  }, []);

  // Scroll to bottom when messages change or during streaming
  useEffect(() => {
    scrollToBottom();
  }, [messages, isStreaming, scrollToBottom]);

  // Handle sending message
  const handleSendMessage = useCallback(
    async (text: string) => {
      if (text.trim() && !loading && !isStreaming) {
        // For new sessions, mark that we're waiting for navigation
        if (!hookSessionId) {
          pendingNavigationRef.current = true;
        }
        
        // Send the message - session handling will be done by the stream processing
        await sendMessage(text);
      }
    },
    [loading, isStreaming, sendMessage, hookSessionId]
  );

  // Get current session title
  const currentSessionTitle =
    hookSessionId && sessions.length > 0
      ? sessions.find((session) => session.id === hookSessionId)
          ?.session_title || "Stock Sense"
      : "Stock Sense";

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 overflow-hidden">
        <div className="flex flex-col h-full bg-white rounded-lg shadow-md">
          {/* Header */}
          <div className="flex items-center p-4 border-b border-gray-400">
            <div className="flex-1 flex md:justify-start justify-center">
              <h1 className="text-xl font-bold">{currentSessionTitle}</h1>
            </div>
          </div>

          {/* Chat messages container */}
          <div
            className="flex-1 p-4 overflow-y-auto"
            ref={messageListRef}
            id="messages-container"
          >
            <div className="space-y-4">
              {messages.length === 0 && !isBatchLoading && !loading ? (
                <div className="text-center text-gray-500 mt-50">
                  <h2 className="text-2xl font-semibold mb-4">
                    What can I help you with today?
                  </h2>
                  <p className="text-gray-600">
                    Ask me anything about stocks, financial analysis, or market
                    trends.
                  </p>
                </div>
              ) : (
                messages.map((message) => (
                  <MemoizedChatBubble
                    key={message.id}
                    message={message}
                    isStreaming={message.isStreaming}
                    isBatchLoaded={isBatchLoading}
                  />
                ))
              )}
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
      </main>
    </div>
  );
};

export default ChatLayout;