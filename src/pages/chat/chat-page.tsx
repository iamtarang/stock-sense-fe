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
  
  // Navigation management refs
  const isNewSession = useRef<boolean>(false);
  const navigationAttempts = useRef<number>(0);

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

  // Session ID change handler with robust navigation
  useEffect(() => {
    // Handle navigation for new sessions
    if (isNewSession.current && hookSessionId !== null) {
      const currentUrl = window.location.pathname;
      const targetUrl = `/chat/${hookSessionId}`;
      
      // Only navigate if we need to
      if (!currentUrl.includes(`/chat/${hookSessionId}`)) {
        console.log(`Navigating to new session: ${hookSessionId}`);
        
        // Use timeout to ensure state is settled
        setTimeout(() => {
          navigate(targetUrl, { replace: true });
          isNewSession.current = false;
          navigationAttempts.current = 0;
        }, 100);
      } else {
        isNewSession.current = false;
        navigationAttempts.current = 0;
      }
    }
  }, [hookSessionId, navigate]);
  
  // Additional effect to handle navigation retries if needed
  useEffect(() => {
    // If we're waiting for navigation but session ID is still null
    if (isNewSession.current && hookSessionId === null && navigationAttempts.current < 5) {
      // Try to check for sessions in case our state is out of sync
      const checkInterval = setInterval(() => {
        navigationAttempts.current += 1;
        console.log(`Checking for session ID (attempt ${navigationAttempts.current})`);
        
        loadSessions();
        
        // Give up after 5 attempts
        if (navigationAttempts.current >= 5) {
          console.log("Navigation attempts exceeded, giving up");
          clearInterval(checkInterval);
          isNewSession.current = false;
        }
      }, 1000);
      
      return () => clearInterval(checkInterval);
    }
  }, [hookSessionId, loadSessions]);

  // Handle session loading
  useEffect(() => {
    if (hookSessionId !== lastLoadedSessionId.current) {
      console.log(`Session changed to: ${hookSessionId}`);

      if (hookSessionId === null) {
        lastLoadedSessionId.current = null;
        clearMessages();
      } else {
        console.log(`Loading data for session: ${hookSessionId}`);

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
        // Flag for new session creation
        if (!hookSessionId) {
          console.log("Starting new session, will navigate when ID is received");
          isNewSession.current = true;
          navigationAttempts.current = 0;
        }
        
        // Send the message - session handling will be done by the stream processing
        await sendMessage(text);
        
        // Additional check to ensure navigation success
        if (isNewSession.current) {
          // Monitor sessions for changes in case the stream event doesn't trigger it
          setTimeout(() => {
            loadSessions();
          }, 1000);
        }
      }
    },
    [loading, isStreaming, sendMessage, hookSessionId, loadSessions]
  );

  // Dedicated function to watch for session changes in messages
  useEffect(() => {
    // If we're waiting for a new session and have messages
    if (isNewSession.current && hookSessionId === null && messages.length > 0) {
      // After a successful message send, check for sessions again
      loadSessions();
    }
  }, [messages, hookSessionId, loadSessions]);

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