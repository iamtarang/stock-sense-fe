import { useState, useCallback, useRef, useEffect } from 'react';
import { Message } from '../types/message';
import { useCookies } from 'react-cookie';

// Define types for chat sessions
interface ChatSession {
  id: number;
  user: number;
  started_at: string;
  ended_at: string | null;
  session_title: string;
}

interface UseChatServiceReturn {
  isStreaming: boolean;
  loading: boolean;
  messages: Message[];
  sendMessage: (text: string) => Promise<void>;
  stopStreaming: () => void;
  setSessionId: (id: number | null) => void;
  sessionId: number | null;
  sessions: ChatSession[];
  loadSessions: () => Promise<void>;
  createNewSession: () => Promise<number>;
  loadSessionMessages: (sessionId: number) => Promise<void>;
}

interface UserMetaData {
  session_id: number;
  user_message_id: number;
  tutor_message_id: number;
}

export const useChatService = (): UseChatServiceReturn => {
  const [cookies] = useCookies(['access_token']);
  const [isStreaming, setIsStreaming] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [sessionId, setSessionId] = useState<number | null>(null);
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  
  // Refs for streaming control
  const shouldStopStreamingRef = useRef(false);
  const abortControllerRef = useRef<AbortController | null>(null);
  const streamingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Refs for animation and text buffer
  const fullResponseRef = useRef<string>('');
  const displayedTextRef = useRef<string>('');
  const animationFrameIdRef = useRef<number | null>(null);
  const lastAnimationTimeRef = useRef<number>(0);
  const currentMessageIdRef = useRef<number | null>(null);

  // Helper function to get the access token from cookies
  const getAccessToken = (): string | null => {
    return cookies.access_token || null;
  };
  
  // Animation constants - adjust these for speed
  const TYPING_SPEED = 60; // Characters per second - higher is faster
  const COMMA_PAUSE = 100; // ms
  const PERIOD_PAUSE = 200; // ms

  // Function to animate typing using requestAnimationFrame
  const animateTyping = useCallback((timestamp: number) => {
    // Skip if not streaming or no message to update
    if (!isStreaming || shouldStopStreamingRef.current || !currentMessageIdRef.current) {
      return;
    }
    
    const fullText = fullResponseRef.current;
    const currentText = displayedTextRef.current;
    
    // Always schedule the next frame first to ensure continuous checking
    // for new content even if we don't add a character this frame
    animationFrameIdRef.current = requestAnimationFrame(animateTyping);
    
    // If we've displayed all text, just return and wait for more
    if (currentText.length >= fullText.length) {
      return;
    }
    
    // Calculate time since last character was added
    const elapsed = timestamp - lastAnimationTimeRef.current;
    
    // Get the next character to add
    const nextChar = fullText[currentText.length];
    
    // Determine delay based on character
    let delay = 1000 / TYPING_SPEED; // Base delay between characters
    
    // Adjust delay based on punctuation
    if (['.', '!', '?'].includes(nextChar)) {
      delay = PERIOD_PAUSE;
    } else if ([',', ';', ':'].includes(nextChar)) {
      delay = COMMA_PAUSE;
    }
    
    // Check if enough time has passed to add another character
    if (elapsed >= delay) {
      // Update the last animation time
      lastAnimationTimeRef.current = timestamp;
      
      // Add just one character to our text reference
      displayedTextRef.current = fullText.substring(0, currentText.length + 1);
      
      // Update the message in state so the UI re-renders
      setMessages(prevMessages => {
        const index = prevMessages.findIndex(m => m.id === currentMessageIdRef.current);
        if (index === -1) return prevMessages;
        
        const updatedMessages = [...prevMessages];
        updatedMessages[index] = {
          ...updatedMessages[index],
          text: displayedTextRef.current,
          isStreaming: true // Keep streaming flag true while animating
        };
        
        return updatedMessages;
      });
    }
  }, [isStreaming]);

  // Function to start typing animation
  const startTypingAnimation = useCallback((messageId: number) => {
    // Set the current message ID
    currentMessageIdRef.current = messageId;
    
    // Initialize animation timing
    lastAnimationTimeRef.current = performance.now();
    
    // Reset displayed text
    displayedTextRef.current = '';
    
    // Cancel any existing animation frame before starting new
    if (animationFrameIdRef.current !== null) {
      cancelAnimationFrame(animationFrameIdRef.current);
    }
    
    // Start the animation loop
    animationFrameIdRef.current = requestAnimationFrame(animateTyping);
  }, [animateTyping]);

  // Improved cleanup function for streaming resources
  const cleanupStreamingResources = useCallback(() => {
    // Cancel any pending animation frame
    if (animationFrameIdRef.current !== null) {
      cancelAnimationFrame(animationFrameIdRef.current);
      animationFrameIdRef.current = null;
    }
    
    // Update the message to remove streaming status
    if (currentMessageIdRef.current) {
      setMessages(prevMessages => {
        const messages = [...prevMessages];
        const lastMessage = messages.find(m => m.id === currentMessageIdRef.current);
        
        if (lastMessage) {
          const index = messages.indexOf(lastMessage);
          messages[index] = {
            ...lastMessage,
            isStreaming: false,
            // Ensure the final text is complete
            text: fullResponseRef.current
          };
        }
        
        return messages;
      });
    }
    
    // Clear any timeouts
    if (streamingTimeoutRef.current) {
      clearTimeout(streamingTimeoutRef.current);
      streamingTimeoutRef.current = null;
    }
    
    // Reset the abort controller
    abortControllerRef.current = null;
    
    // Reset streaming state and refs
    setIsStreaming(false);
    shouldStopStreamingRef.current = false;
    fullResponseRef.current = '';
    displayedTextRef.current = '';
    currentMessageIdRef.current = null;
  }, []);

  // Enhanced function to stop streaming with proper cleanup
  const stopStreaming = useCallback(() => {
    if (isStreaming) {
      // Set the flag to stop streaming
      shouldStopStreamingRef.current = true;
      
      // If we have an active AbortController, abort the fetch request
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      
      // Short delay before full cleanup
      streamingTimeoutRef.current = setTimeout(() => {
        cleanupStreamingResources();
      }, 100);
    }
  }, [isStreaming, cleanupStreamingResources]);

  // Effect to cleanup resources when component unmounts
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      
      if (streamingTimeoutRef.current) {
        clearTimeout(streamingTimeoutRef.current);
      }
      
      if (animationFrameIdRef.current !== null) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  // Load all sessions for the current user
  const loadSessions = useCallback(async (): Promise<void> => {
    const accessToken = getAccessToken();
    if (!accessToken) {
      console.error('No access token found. User may need to log in.');
      return;
    }

    try {
      const userId = localStorage.getItem('user_id');
      const response = await fetch(`https://stocksense-backend.onrender.com/api/users/chat-sessions/?user=${userId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to load sessions: ${response.status}`);
      }

      const data = await response.json();
      setSessions(data);
    } catch (error) {
      console.error('Error loading sessions:', error);
    }
  }, [cookies.access_token]);

  // Create a new chat session
  const createNewSession = useCallback(async (): Promise<number> => {
    const accessToken = getAccessToken();
    if (!accessToken) {
      console.error('No access token found. User may need to log in.');
      return -1;
    }

    try {
      const userId = localStorage.getItem('user_id');
      const response = await fetch('https://stocksense-backend.onrender.com/api/users/chat-sessions/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: parseInt(userId || '0', 10),
          session_title: 'New Chat' // Default title, will be updated with first message
        })
      });

      if (!response.ok) {
        throw new Error(`Failed to create session: ${response.status}`);
      }

      const data = await response.json();
      
      // Add the new session to our sessions list
      setSessions(prev => [data, ...prev]);
      
      // Set this as the active session
      setSessionId(data.id);
      
      // Clear messages for new session
      setMessages([]);
      
      return data.id;
    } catch (error) {
      console.error('Error creating new session:', error);
      return -1;
    }
  }, [cookies.access_token]);

  // Load messages for a specific session
  const loadSessionMessages = useCallback(async (newSessionId: number): Promise<void> => {
    console.log("Loading messages for session:", newSessionId);
    const accessToken = getAccessToken();
    if (!accessToken) {
      console.error('No access token found. User may need to log in.');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`https://stocksense-backend.onrender.com/api/users/chat-messages/?session=${newSessionId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to load messages: ${response.status}`);
      }

      const data = await response.json();
      
      // Convert API message format to our app's Message format
      const formattedMessages: Message[] = data.map((msg: any) => ({
        id: msg.id,
        text: msg.message,
        sender: msg.sender === 'user' ? 'user' : 'agent',
        timestamp: new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }));
      console.log(formattedMessages)
      
      setMessages([...formattedMessages]); 
      
      // Update the session ID
      setSessionId(newSessionId);
      
      console.log("Messages loaded and session ID updated:", newSessionId);
    } catch (error) {
      console.error('Error loading session messages:', error);
    } finally {
      setLoading(false);
    }
  }, [cookies.access_token]);

  // Update session title based on first message
  const updateSessionTitle = useCallback(async (sessionId: number, title: string): Promise<void> => {
    const accessToken = getAccessToken();
    if (!accessToken) return;

    try {
      // Limit title to first 5 words or fewer
      const shortTitle = title.split(' ').slice(0, 5).join(' ');
      
      const response = await fetch(`https://stocksense-backend.onrender.com/api/users/chat-sessions/${sessionId}/`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          session_title: shortTitle
        })
      });

      if (!response.ok) {
        throw new Error(`Failed to update session title: ${response.status}`);
      }

      // Update session in local state
      setSessions(prev => 
        prev.map(session => 
          session.id === sessionId ? { ...session, session_title: shortTitle } : session
        )
      );
    } catch (error) {
      console.error('Error updating session title:', error);
    }
  }, [cookies.access_token]);

  const sendMessage = useCallback(async (text: string): Promise<void> => {
    if (!text.trim() || loading || isStreaming) return;
    
    // Check if we have a valid access token
    const accessToken = getAccessToken();
    if (!accessToken) {
      console.error('No access token found. User may need to log in.');
      return;
    }

    // If there's no active session, create one
    if (!sessionId) {
      const newSessionId = await createNewSession();
      if (newSessionId === -1) {
        console.error('Failed to create new session');
        return;
      }
    }
    
    setLoading(true);
    
    try {
      // Create and add user message to the UI immediately
      const userMessage: Message = {
        id: Date.now(),
        text,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prevMessages => [...prevMessages, userMessage]);
      
      // Create a temporary agent message with streaming flag
      const tempAgentMessageId = Date.now() + 1;
      const tempAgentMessage: Message = {
        id: tempAgentMessageId,
        text: "",
        sender: 'agent',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isStreaming: true
      };
      
      // Add the temporary agent message
      setMessages(prevMessages => [...prevMessages, tempAgentMessage]);
      setIsStreaming(true);
      
      // Reset text buffers and streaming control
      fullResponseRef.current = '';
      displayedTextRef.current = '';
      shouldStopStreamingRef.current = false;
      
      // Start the typing animation immediately
      startTypingAnimation(tempAgentMessageId);
      
      // Create a new AbortController for this request
      abortControllerRef.current = new AbortController();
      
      // Prepare the request payload
      const payload = {
        prompt: text,
        session_id: sessionId // Will be null for the first message
      };
      
      // Make the API call
      const response = await fetch('https://stocksense-backend.onrender.com/api/prompt/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(payload),
        signal: abortControllerRef.current.signal
      });
      
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      
      if (!response.body) {
        throw new Error('ReadableStream not supported');
      }
      
      // Process the streaming response
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let partialChunk = '';
      let userMetaData: UserMetaData | null = null;
      let agentMessageId: number | null = tempAgentMessageId; // Default to temp ID if no metadata received
      let isFirstMessageInSession = !sessionId;
      
      while (true) {
        // If stopping was requested, break the loop
        if (shouldStopStreamingRef.current) {
          break;
        }
        
        try {
          const { done, value } = await reader.read();
          
          if (done) {
            // Stream is complete, but don't wait for "end" message
            break;
          }
          
          // Decode the chunk and combine with any partial chunk from previous iteration
          const chunk = partialChunk + decoder.decode(value, { stream: true });
          const lines = chunk.split('\n');
          
          // The last line might be incomplete, save it for the next iteration
          partialChunk = lines.pop() || '';
          
          for (const line of lines) {
            if (!line.trim()) continue;
            
            try {
              const eventData = JSON.parse(line);
              
              // Handle different event types
              switch (eventData.event) {
                case 'User Meta data':
                  userMetaData = eventData.data;
                  
                  // Store the session ID if this is the first message
                  if (userMetaData?.session_id) {
                    if (isFirstMessageInSession) {
                      // Update session ID
                      setSessionId(userMetaData.session_id);
                      
                      // Update session title if this is the first message in a new session
                      updateSessionTitle(userMetaData.session_id, text);
                      
                      // Refresh the sessions list to show the new session
                      loadSessions();
                    }
                  }
                  
                  // Update the temporary agent message with the actual message ID
                  if (userMetaData?.tutor_message_id) {
                    agentMessageId = userMetaData.tutor_message_id;
                    
                    // Update the message ID in state
                    setMessages(prevMessages => {
                      const index = prevMessages.findIndex(m => m.id === tempAgentMessageId);
                      if (index === -1) return prevMessages;
                      
                      const updatedMessages = [...prevMessages];
                      updatedMessages[index] = {
                        ...updatedMessages[index],
                        id: agentMessageId
                      };
                      
                      return updatedMessages;
                    });
                    
                    // Update the current message ID for animation
                    currentMessageIdRef.current = agentMessageId;
                  }
                  break;
                  
                case 'chat_streaming':
                  // Skip processing if stop was requested
                  if (shouldStopStreamingRef.current) {
                    continue;
                  }
                  
                  // Handle the chunk data
                  const chunkText = eventData.data.chunk !== undefined 
                    ? eventData.data.chunk 
                    : (typeof eventData.data === 'string' ? eventData.data : '');
                  
                  if (chunkText === 'start') {
                    // Chat streaming has started
                    continue;
                  } else if (chunkText === '') {
                    // Empty chunk, skip
                    continue;
                  } else if (chunkText === 'end') {
                    // Chat streaming explicitly ended by server
                    // We just continue processing the next chunks if any
                    continue;
                  }
                  
                  // Add the chunk to our full response buffer immediately
                  fullResponseRef.current += chunkText;
                  
                  // No need to manually update the message here
                  // The animation loop will handle displaying characters gradually
                  
                  break;
                  
                default:
                  // Handle other event types if needed
                  break;
              }
            } catch (error) {
              console.error('Error parsing event data:', error, line);
            }
          }
        } catch (error) {
          if (error.name === 'AbortError') {
            console.log('Fetch aborted');
            break;
          } else {
            throw error;
          }
        }
      }
      
      // Let the animation finish naturally with a short delay
      streamingTimeoutRef.current = setTimeout(() => {
        // If streaming was manually stopped, don't do anything
        if (shouldStopStreamingRef.current) {
          return;
        }
        
        // Force complete the text if animation hasn't caught up
        if (agentMessageId && displayedTextRef.current !== fullResponseRef.current) {
          setMessages(prevMessages => {
            const index = prevMessages.findIndex(m => m.id === agentMessageId);
            if (index === -1) return prevMessages;
            
            const updatedMessages = [...prevMessages];
            updatedMessages[index] = {
              ...updatedMessages[index],
              text: fullResponseRef.current,
              isStreaming: false
            };
            
            return updatedMessages;
          });
        }
        
        // Final cleanup
        cleanupStreamingResources();
      }, 500);
      
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Fetch aborted');
      } else {
        console.error('Error in streaming response:', error);
        
        // Show error message to the user
        setMessages(prevMessages => {
          const lastMessage = prevMessages[prevMessages.length - 1];
          if (lastMessage.sender === 'agent' && lastMessage.isStreaming) {
            const updatedMessages = [...prevMessages];
            updatedMessages[updatedMessages.length - 1] = {
              ...lastMessage,
              text: "I'm sorry, I couldn't process your request at the moment. Please try again.",
              isStreaming: false
            };
            return updatedMessages;
          }
          return prevMessages;
        });
      }
      
      // Ensure cleanup happens on error
      cleanupStreamingResources();
    } finally {
      setLoading(false);
    }
  }, [loading, isStreaming, sessionId, cookies.access_token, cleanupStreamingResources, startTypingAnimation, createNewSession, loadSessions, updateSessionTitle]);

  // Load sessions on initial mount
  useEffect(() => {
    loadSessions();
  }, [loadSessions]);

  return {
    isStreaming,
    loading,
    messages,
    sendMessage,
    stopStreaming,
    setSessionId,
    sessionId,
    sessions,
    loadSessions,
    createNewSession,
    loadSessionMessages
  };
};