// import { useState, useCallback, useRef, useEffect } from 'react';
// import { Message } from '../types/message';
// import { useCookies } from 'react-cookie';
// import { ChatMessage } from '../utils/types';

// // Define types for chat sessions
// interface ChatSession {
//   id: number;
//   user: number;
//   started_at: string;
//   ended_at: string | null;
//   session_title: string;
// }

// interface UseChatServiceReturn {
//   isStreaming: boolean;
//   loading: boolean;
//   messages: Message[];
//   sendMessage: (text: string) => Promise<void>;
//   stopStreaming: () => void;
//   setSessionId: (id: number | null) => void;
//   sessionId: number | null;
//   sessions: ChatSession[];
//   loadSessions: () => Promise<void>;
//   createNewSession: () => Promise<number>;
//   loadSessionMessages: (sessionId: number) => Promise<void>;
// }

// interface UserMetaData {
//   session_id: number;
//   user_message_id: number;
//   tutor_message_id: number;
// }

// export const useChatService = (): UseChatServiceReturn => {
//   const [cookies] = useCookies(['access_token']);
//   const [isStreaming, setIsStreaming] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [sessionId, setSessionId] = useState<number | null>(null);
//   const [sessions, setSessions] = useState<ChatSession[]>([]);

//   // Refs for streaming control
//   const shouldStopStreamingRef = useRef(false);
//   const abortControllerRef = useRef<AbortController | null>(null);
//   const streamingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

//   // Refs for animation and text buffer
//   const fullResponseRef = useRef<string>('');
//   const displayedTextRef = useRef<string>('');
//   const animationFrameIdRef = useRef<number | null>(null);
//   const lastAnimationTimeRef = useRef<number>(0);
//   const currentMessageIdRef = useRef<number | null>(null);

//   // Helper function to get the access token from cookies
//   const getAccessToken = useCallback((): string | null => {
//     return cookies.access_token || null;
//   }, [cookies.access_token]);

//   // Animation constants - adjust these for desired speed
//   const TYPING_SPEED = 30; // Characters per second (reduced for more visible typing effect)
//   const COMMA_PAUSE = 150; // ms
//   const PERIOD_PAUSE = 300; // ms

//   // Add this helper function near your other constants
//   const getRandomDelay = (baseDelay: number) => {
//     return baseDelay * (0.8 + Math.random() * 0.4); // Varies between 80% and 120% of base delay
//   };

//   // Replace the existing animateTyping function with this improved version
//   const animateTyping = useCallback((timestamp: number) => {
//     // Skip if not streaming or no message to update
//     if (!isStreaming || shouldStopStreamingRef.current || !currentMessageIdRef.current) {
//       return;
//     }

//     const fullText = fullResponseRef.current;
//     const currentText = displayedTextRef.current;

//     // If we've displayed all text, keep checking for new content
//     if (currentText.length >= fullText.length) {
//       animationFrameIdRef.current = requestAnimationFrame(animateTyping);
//       return;
//     }

//     // Calculate time since last character was added
//     const elapsed = timestamp - lastAnimationTimeRef.current;

//     // Get the next character to add
//     const nextChar = fullText[currentText.length];

//     // Determine delay based on character
//     let delay = getRandomDelay(1000 / TYPING_SPEED); // Base delay with random variation

//     // Adjust delay based on punctuation
//     if (['.', '!', '?'].includes(nextChar)) {
//       delay = PERIOD_PAUSE;
//     } else if ([',', ';', ':'].includes(nextChar)) {
//       delay = COMMA_PAUSE;
//     }

//     // Check if enough time has passed to add another character
//     if (elapsed >= delay) {
//       // Update the last animation time
//       lastAnimationTimeRef.current = timestamp;

//       // Add just one character
//       const newText = fullText.substring(0, currentText.length + 1);
//       displayedTextRef.current = newText;

//       // Update the message in state
//       setMessages(prevMessages => {
//         const index = prevMessages.findIndex(m => m.id === currentMessageIdRef.current);
//         if (index === -1) return prevMessages;

//         const updatedMessages = [...prevMessages];
//         updatedMessages[index] = {
//           ...updatedMessages[index],
//           text: newText,
//           isStreaming: true
//         };

//         return updatedMessages;
//       });
//     }

//     // Schedule next frame
//     animationFrameIdRef.current = requestAnimationFrame(animateTyping);
//   }, [isStreaming]);

//   // Function to start typing animation
//   const startTypingAnimation = useCallback((messageId: number) => {
//     // Set the current message ID
//     currentMessageIdRef.current = messageId;

//     // Initialize animation timing
//     lastAnimationTimeRef.current = performance.now();

//     // Reset displayed text
//     displayedTextRef.current = '';

//     // Cancel any existing animation frame before starting new
//     if (animationFrameIdRef.current !== null) {
//       cancelAnimationFrame(animationFrameIdRef.current);
//     }

//     // Start the animation loop
//     animationFrameIdRef.current = requestAnimationFrame(animateTyping);
//   }, [animateTyping]);

//   // Improved cleanup function for streaming resources
//   const cleanupStreamingResources = useCallback(() => {
//     // Cancel any pending animation frame
//     if (animationFrameIdRef.current !== null) {
//       cancelAnimationFrame(animationFrameIdRef.current);
//       animationFrameIdRef.current = null;
//     }

//     // Update the message to remove streaming status
//     if (currentMessageIdRef.current) {
//       setMessages(prevMessages => {
//         const index = prevMessages.findIndex(m => m.id === currentMessageIdRef.current);
//         if (index === -1) return prevMessages;

//         const updatedMessages = [...prevMessages];
//         updatedMessages[index] = {
//           ...updatedMessages[index],
//           isStreaming: false,
//           // Ensure the final text is complete
//           text: fullResponseRef.current
//         };

//         return updatedMessages;
//       });
//     }

//     // Clear any timeouts
//     if (streamingTimeoutRef.current) {
//       clearTimeout(streamingTimeoutRef.current);
//       streamingTimeoutRef.current = null;
//     }

//     // Reset the abort controller
//     abortControllerRef.current = null;

//     // Reset streaming state and refs
//     setIsStreaming(false);
//     shouldStopStreamingRef.current = false;
//     fullResponseRef.current = '';
//     displayedTextRef.current = '';
//     currentMessageIdRef.current = null;
//   }, []);

//   // Enhanced function to stop streaming with proper cleanup
//   const stopStreaming = useCallback(() => {
//     if (isStreaming) {
//       // Set the flag to stop streaming
//       shouldStopStreamingRef.current = true;

//       // If we have an active AbortController, abort the fetch request
//       if (abortControllerRef.current) {
//         abortControllerRef.current.abort();
//       }

//       // Short delay before full cleanup
//       streamingTimeoutRef.current = setTimeout(() => {
//         cleanupStreamingResources();
//       }, 100);
//     }
//   }, [isStreaming, cleanupStreamingResources]);

//   // Effect to cleanup resources when component unmounts
//   useEffect(() => {
//     return () => {
//       if (abortControllerRef.current) {
//         abortControllerRef.current.abort();
//       }

//       if (streamingTimeoutRef.current) {
//         clearTimeout(streamingTimeoutRef.current);
//       }

//       if (animationFrameIdRef.current !== null) {
//         cancelAnimationFrame(animationFrameIdRef.current);
//       }
//     };
//   }, []);

//   // Load all sessions for the current user
//   const loadSessions = useCallback(async (): Promise<void> => {
//     const accessToken = getAccessToken();
//     if (!accessToken) {
//       console.error('No access token found. User may need to log in.');
//       return;
//     }

//     try {
//       const userId = localStorage.getItem('user_id');
//       const response = await fetch(`https://stocksense-backend.onrender.com/api/users/chat-sessions/?user=${userId}`, {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${accessToken}`,
//           'Content-Type': 'application/json'
//         }
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to load sessions: ${response.status}`);
//       }

//       const data = await response.json();
//       setSessions(data);
//     } catch (error) {
//       console.error('Error loading sessions:', error);
//     }
//   }, [getAccessToken]);

//   // Create a new chat session
//   const createNewSession = useCallback(async (): Promise<number> => {
//     const accessToken = getAccessToken();
//     if (!accessToken) {
//       console.error('No access token found. User may need to log in.');
//       return -1;
//     }

//     try {
//       const userId = localStorage.getItem('user_id');
//       const response = await fetch('https://stocksense-backend.onrender.com/api/users/chat-sessions/', {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${accessToken}`,
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           user: parseInt(userId || '0', 10),
//           session_title: 'New Chat' // Default title, will be updated with first message
//         })
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to create session: ${response.status}`);
//       }

//       const data = await response.json();

//       // Add the new session to our sessions list
//       setSessions(prev => [data, ...prev]);

//       // Set this as the active session
//       setSessionId(data.id);

//       // Clear messages for new session
//       setMessages([]);

//       return data.id;
//     } catch (error) {
//       console.error('Error creating new session:', error);
//       return -1;
//     }
//   }, [getAccessToken]);

//   // Load messages for a specific session
//   const loadSessionMessages = useCallback(async (newSessionId: number): Promise<void> => {
//     console.log("Loading messages for session:", newSessionId);
//     const accessToken = getAccessToken();
//     if (!accessToken) {
//       console.error('No access token found. User may need to log in.');
//       return;
//     }

//     try {
//       setLoading(true);
//       const response = await fetch(`https://stocksense-backend.onrender.com/api/users/chat-messages/?session=${newSessionId}`, {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${accessToken}`,
//           'Content-Type': 'application/json'
//         }
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to load messages: ${response.status}`);
//       }

//       const data = await response.json();

//       // Convert API message format to our app's Message format
//       const formattedMessages: Message[] = data.map((msg: ChatMessage) => ({
//         id: msg.id,
//         text: msg.message,
//         sender: msg.sender === 'user' ? 'user' : 'agent',
//         timestamp: new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//       }));
//       console.log(formattedMessages)

//       setMessages([...formattedMessages]); 

//       // Update the session ID
//       setSessionId(newSessionId);

//       console.log("Messages loaded and session ID updated:", newSessionId);
//     } catch (error) {
//       console.error('Error loading session messages:', error);
//     } finally {
//       setLoading(false);
//     }
//   }, [getAccessToken]);

//   // Update session title based on first message
//   const updateSessionTitle = useCallback(async (sessionId: number, title: string): Promise<void> => {
//     const accessToken = getAccessToken();
//     if (!accessToken) return;

//     try {
//       // Limit title to first 5 words or fewer
//       const shortTitle = title.split(' ').slice(0, 5).join(' ');

//       const response = await fetch(`https://stocksense-backend.onrender.com/api/users/chat-sessions/${sessionId}/`, {
//         method: 'PUT',
//         headers: {
//           'Authorization': `Bearer ${accessToken}`,
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           session_title: shortTitle
//         })
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to update session title: ${response.status}`);
//       }

//       // Update session in local state
//       setSessions(prev => 
//         prev.map(session => 
//           session.id === sessionId ? { ...session, session_title: shortTitle } : session
//         )
//       );
//     } catch (error) {
//       console.error('Error updating session title:', error);
//     }
//   }, [getAccessToken]);

//   const sendMessage = useCallback(async (text: string): Promise<void> => {
//     if (!text.trim() || loading || isStreaming) return;

//     // Check if we have a valid access token
//     const accessToken = getAccessToken();
//     if (!accessToken) {
//       console.error('No access token found. User may need to log in.');
//       return;
//     }

//     // If there's no active session, create one
//     if (!sessionId) {
//       const newSessionId = await createNewSession();
//       if (newSessionId === -1) {
//         console.error('Failed to create new session');
//         return;
//       }
//     }

//     setLoading(true);

//     try {
//       // Create and add user message to the UI immediately
//       const userMessage: Message = {
//         id: Date.now(),
//         text,
//         sender: 'user',
//         timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//       };

//       setMessages(prevMessages => [...prevMessages, userMessage]);

//       // Create a temporary agent message with streaming flag
//       const tempAgentMessageId = Date.now() + 1;
//       const tempAgentMessage: Message = {
//         id: tempAgentMessageId,
//         text: "",
//         sender: 'agent',
//         timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//         isStreaming: true
//       };

//       // Add the temporary agent message
//       setMessages(prevMessages => [...prevMessages, tempAgentMessage]);
//       setIsStreaming(true);

//       // Reset text buffers and streaming control
//       fullResponseRef.current = '';
//       displayedTextRef.current = '';
//       shouldStopStreamingRef.current = false;

//       // Start the typing animation immediately
//       startTypingAnimation(tempAgentMessageId);

//       // Create a new AbortController for this request
//       abortControllerRef.current = new AbortController();

//       // Prepare the request payload
//       const payload = {
//         prompt: text,
//         session_id: sessionId // Will be null for the first message
//       };

//       // Make the API call
//       const response = await fetch('https://stocksense-backend.onrender.com/api/prompt/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${accessToken}`
//         },
//         body: JSON.stringify(payload),
//         signal: abortControllerRef.current.signal
//       });

//       if (!response.ok) {
//         throw new Error(`API request failed with status ${response.status}`);
//       }

//       if (!response.body) {
//         throw new Error('ReadableStream not supported');
//       }

//       // Process the streaming response
//       const reader = response.body.getReader();
//       const decoder = new TextDecoder();
//       let partialChunk = '';
//       let userMetaData: UserMetaData | null = null;
//       let agentMessageId: number | null = tempAgentMessageId; // Default to temp ID if no metadata received
//       const isFirstMessageInSession = !sessionId;

//       while (true) {
//         // If stopping was requested, break the loop
//         if (shouldStopStreamingRef.current) {
//           break;
//         }

//         try {
//           const { done, value } = await reader.read();

//           if (done) {
//             // Stream is complete, but don't wait for "end" message
//             break;
//           }

//           // Decode the chunk and combine with any partial chunk from previous iteration
//           const chunk = partialChunk + decoder.decode(value, { stream: true });
//           const lines = chunk.split('\n');

//           // The last line might be incomplete, save it for the next iteration
//           partialChunk = lines.pop() || '';

//           for (const line of lines) {
//             if (!line.trim()) continue;

//             try {
//               const eventData = JSON.parse(line);

//               // Handle different event types
//               switch (eventData.event) {
//                 case 'User Meta data':
//                   userMetaData = eventData.data;

//                   // Store the session ID if this is the first message
//                   if (userMetaData?.session_id) {
//                     if (isFirstMessageInSession) {
//                       // Update session ID
//                       setSessionId(userMetaData.session_id);

//                       // Update session title if this is the first message in a new session
//                       updateSessionTitle(userMetaData.session_id, text);

//                       // Refresh the sessions list to show the new session
//                       loadSessions();
//                     }
//                   }

//                   // Update the temporary agent message with the actual message ID
//                   if (userMetaData?.tutor_message_id) {
//                     agentMessageId = userMetaData.tutor_message_id;

//                     // Update the message ID in state
//                     setMessages(prevMessages => {
//                       const index = prevMessages.findIndex(m => m.id === tempAgentMessageId);
//                       if (index === -1) return prevMessages;

//                       const updatedMessages = [...prevMessages];
//                       updatedMessages[index] = {
//                         ...updatedMessages[index],
//                         id: agentMessageId !== null ? agentMessageId : tempAgentMessageId
//                       };

//                       return updatedMessages;
//                     });

//                     // Update the current message ID for animation
//                     currentMessageIdRef.current = agentMessageId;
//                   }
//                   break;

//                 case 'chat_streaming':
//                   // Skip processing if stop was requested
//                   { if (shouldStopStreamingRef.current) {
//                     continue;
//                   }

//                   // Handle the chunk data
//                   const chunkText = eventData.data.chunk !== undefined 
//                     ? eventData.data.chunk 
//                     : (typeof eventData.data === 'string' ? eventData.data : '');

//                   if (chunkText === 'start') {
//                     // Chat streaming has started
//                     continue;
//                   } else if (chunkText === '') {
//                     // Empty chunk, skip
//                     continue;
//                   } else if (chunkText === 'end') {
//                     // Chat streaming explicitly ended by server
//                     // We just continue processing the next chunks if any
//                     continue;
//                   }

//                   // Add the chunk to our full response buffer immediately
//                   fullResponseRef.current += chunkText;

//                   // No need to manually update the message here
//                   // The animation loop will handle displaying characters gradually

//                   break; }

//                 default:
//                   // Handle other event types if needed
//                   break;
//               }
//             } catch (error) {
//               console.error('Error parsing event data:', error, line);
//             }
//           }
//         } catch (error) {
//           if (error instanceof Error && error.name === 'AbortError') {
//             console.log('Fetch aborted');
//             break;
//           } else {
//             throw error;
//           }
//         }
//       }

//       // Let the animation finish naturally with a short delay
//       streamingTimeoutRef.current = setTimeout(() => {
//         // If streaming was manually stopped, don't do anything
//         if (shouldStopStreamingRef.current) {
//           return;
//         }

//         // Force complete the text if animation hasn't caught up
//         if (agentMessageId && displayedTextRef.current !== fullResponseRef.current) {
//           setMessages(prevMessages => {
//             const index = prevMessages.findIndex(m => m.id === agentMessageId);
//             if (index === -1) return prevMessages;

//             const updatedMessages = [...prevMessages];
//             updatedMessages[index] = {
//               ...updatedMessages[index],
//               text: fullResponseRef.current,
//               isStreaming: false
//             };

//             return updatedMessages;
//           });
//         }

//         // Final cleanup
//         cleanupStreamingResources();
//       }, 500);

//     } catch (error) {
//       if (error instanceof Error && error.name === 'AbortError') {
//         console.log('Fetch aborted');
//       } else {
//         console.error('Error in streaming response:', error);

//         // Show error message to the user
//         setMessages(prevMessages => {
//           const lastMessage = prevMessages[prevMessages.length - 1];
//           if (lastMessage.sender === 'agent' && lastMessage.isStreaming) {
//             const updatedMessages = [...prevMessages];
//             updatedMessages[updatedMessages.length - 1] = {
//               ...lastMessage,
//               text: "I'm sorry, I couldn't process your request at the moment. Please try again.",
//               isStreaming: false
//             };
//             return updatedMessages;
//           }
//           return prevMessages;
//         });
//       }

//       // Ensure cleanup happens on error
//       cleanupStreamingResources();
//     } finally {
//       setLoading(false);
//     }
//   }, [loading, isStreaming, getAccessToken, sessionId, createNewSession, startTypingAnimation, updateSessionTitle, loadSessions, cleanupStreamingResources]);

//   // Load sessions on initial mount
//   useEffect(() => {
//     loadSessions();
//   }, [loadSessions]);

//   return {
//     isStreaming,
//     loading,
//     messages,
//     sendMessage,
//     stopStreaming,
//     setSessionId,
//     sessionId,
//     sessions,
//     loadSessions,
//     createNewSession,
//     loadSessionMessages
//   };
// };

import { useState, useCallback, useRef, useEffect } from 'react';
import { Message } from '../types/message';
import { useCookies } from 'react-cookie';
import { ChatMessage } from '../utils/types';

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
  chat_session_id: number;
  chat_session_started_at: string;
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

  // Helper function to get the access token from cookies
  const getAccessToken = (): string | null =>
    cookies.access_token || null;

  // Cleanup function for streaming resources
  const cleanupStreamingResources = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current = null;
    }
    if (streamingTimeoutRef.current) {
      clearTimeout(streamingTimeoutRef.current);
      streamingTimeoutRef.current = null;
    }
    setIsStreaming(false);
    shouldStopStreamingRef.current = false;
  }, []);

  // Function to stop streaming
  const stopStreaming = useCallback(() => {
    if (isStreaming) {
      shouldStopStreamingRef.current = true;
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      streamingTimeoutRef.current = setTimeout(() => {
        cleanupStreamingResources();
      }, 100);
    }
  }, [isStreaming, cleanupStreamingResources]);

  useEffect(() => {
    return () => {
      if (abortControllerRef.current) abortControllerRef.current.abort();
      if (streamingTimeoutRef.current) clearTimeout(streamingTimeoutRef.current);
    };
  }, []);

  // Auto-scroll to bottom when messages change.
  useEffect(() => {
    const container = document.getElementById('messages-container');
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

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
      if (!response.ok) throw new Error(`Failed to load sessions: ${response.status}`);
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
          session_title: 'New Chat'
        })
      });
      if (!response.ok) throw new Error(`Failed to create session: ${response.status}`);
      const data = await response.json();
      setSessions(prev => [data, ...prev]);
      setSessionId(data.id);
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
      if (!response.ok) throw new Error(`Failed to load messages: ${response.status}`);
      const data = await response.json();
      const formattedMessages: Message[] = data.map((msg: ChatMessage) => ({
        id: msg.id,
        text: msg.message,
        sender: msg.sender === 'user' ? 'user' : 'agent',
        timestamp: new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }));
      console.log(formattedMessages);
      setMessages([...formattedMessages]);
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
      if (!response.ok) throw new Error(`Failed to update session title: ${response.status}`);
      setSessions(prev =>
        prev.map(session =>
          session.id === sessionId ? { ...session, session_title: shortTitle } : session
        )
      );
    } catch (error) {
      console.error('Error updating session title:', error);
    }
  }, [cookies.access_token]);

  // Recursive function to process the streamed response with a 1-second delay.
  // First, we try to parse the entire chunk.
  // If that fails, we split the chunk by newline and parse each part separately.
  const processStream = useCallback(
    async (
      reader: ReadableStreamDefaultReader<Uint8Array>,
      agentMessageId: number,
      decoder: TextDecoder,
      prompt: string
    ) => {
      if (shouldStopStreamingRef.current) return;
      const { done, value } = await reader.read();

      if (done) {
        // End of stream: mark the message as complete
        setMessages(prevMessages =>
          prevMessages.map(m =>
            m.id === agentMessageId ? { ...m, isStreaming: false } : m
          )
        );
        cleanupStreamingResources();
        return;
      }

      // Decode the chunk without splitting
      const chunk = decoder.decode(value);
      // let objects: any[] = [];
      let objects: Record<string, unknown>[] = [];

      try {
        // Try to parse the entire chunk as a JSON object
        objects.push(JSON.parse(chunk));
      } catch (error) {
        // If parsing fails, split on newline and parse each line
        console.log(error)
        try {
          objects = chunk
            .split('\n')
            .filter(line => line.trim() !== '')
            .map(line => JSON.parse(line));
        } catch (splitError) {
          console.error('Error parsing event data after splitting:', splitError, chunk);
        }
      }

      // Process each parsed JSON object
      objects.forEach(eventData => {
        switch (eventData.event) {
          case 'user_meta_data': {
            // const userMetaData: UserMetaData = eventData.data;
            const userMetaData = eventData.data as UserMetaData;
            if (userMetaData?.chat_session_id && !sessionId) {
              setSessionId(userMetaData.chat_session_id);
              updateSessionTitle(userMetaData.chat_session_id, prompt);
              loadSessions();
            }
            if (userMetaData?.tutor_message_id) {
              // Update temporary message ID with actual tutor message ID
              setMessages(prevMessages =>
                prevMessages.map(m =>
                  m.id === agentMessageId ? { ...m, id: userMetaData.tutor_message_id } : m
                )
              );
            }
            break;
          }
          // case 'chat_streaming': {
          //   const chunkText =
          //     eventData.data.chunk !== undefined
          //       ? eventData.data.chunk
          //       : (typeof eventData.data === 'string' ? eventData.data : '');
          //   if (chunkText) {
          //     setMessages(prevMessages =>
          //       prevMessages.map(m =>
          //         m.id === agentMessageId ? { ...m, text: m.text + chunkText } : m
          //       )
          //     );
          //   }
          //   break;
          // }
          case 'chat_streaming': {
            let chunkText = '';

            if (typeof eventData.data === 'object' && eventData.data !== null) {
              // Now TypeScript knows it's an object
              const dataObj = eventData.data as { chunk?: string };

              if (dataObj.chunk !== undefined) {
                chunkText = dataObj.chunk;
              }
            } else if (typeof eventData.data === 'string') {
              chunkText = eventData.data;
            }

            if (chunkText) {
              setMessages(prevMessages =>
                prevMessages.map(m =>
                  m.id === agentMessageId ? { ...m, text: m.text + chunkText } : m
                )
              );
            }
            break;
          }
          case 'chat_usage': {
            console.log('Usage data:', eventData.data);
            break;
          }
          case 'status': {
            console.log('Status event:', eventData.data);
            break;
          }
          default:
            break;
        }
      });

      // Add a 1-second delay before processing the next chunk.
      await new Promise(resolve => setTimeout(resolve, 100));

      // Continue processing recursively.
      processStream(reader, agentMessageId, decoder, prompt);
    },
    [cleanupStreamingResources, loadSessions, sessionId, updateSessionTitle]
  );

  // Function to send a message and start streaming
  const sendMessage = useCallback(async (text: string): Promise<void> => {
    if (!text.trim() || loading || isStreaming) return;

    const accessToken = getAccessToken();
    if (!accessToken) {
      console.error('No access token found. User may need to log in.');
      return;
    }

    // Create a new session if needed
    if (!sessionId) {
      const newSessionId = await createNewSession();
      if (newSessionId === -1) {
        console.error('Failed to create new session');
        return;
      }
    }

    setLoading(true);

    try {
      // Add user message immediately
      const userMessage: Message = {
        id: Date.now(),
        text,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, userMessage]);

      // Add a temporary agent message
      const tempAgentMessageId = Date.now() + 1;
      const tempAgentMessage: Message = {
        id: tempAgentMessageId,
        text: "",
        sender: 'tutor',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isStreaming: true
      };
      setMessages(prev => [...prev, tempAgentMessage]);
      setIsStreaming(true);

      shouldStopStreamingRef.current = false;

      // Start API call
      abortControllerRef.current = new AbortController();
      const payload = { prompt: text, session_id: sessionId };

      const response = await fetch('https://stocksense-backend.onrender.com/api/prompt/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(payload),
        signal: abortControllerRef.current.signal
      });

      if (!response.ok) throw new Error(`API request failed with status ${response.status}`);
      if (!response.body) throw new Error('ReadableStream not supported');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      // Begin recursive stream processing.
      processStream(reader, tempAgentMessageId, decoder, text);
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        console.log('Fetch aborted');
      } else {
        console.error('Error in streaming response:', error);
        setMessages(prevMessages => {
          const lastMessage = prevMessages[prevMessages.length - 1];
          if (lastMessage.sender === 'tutor' && lastMessage.isStreaming) {
            return [
              ...prevMessages.slice(0, prevMessages.length - 1),
              {
                ...lastMessage,
                text: "I'm sorry, I couldn't process your request at the moment. Please try again.",
                isStreaming: false
              }
            ];
          }
          return prevMessages;
        });
      }
      cleanupStreamingResources();
    } finally {
      setLoading(false);
    }
  }, [
    loading,
    isStreaming,
    sessionId,
    cookies.access_token,
    createNewSession,
    loadSessions,
    processStream,
    updateSessionTitle,
    cleanupStreamingResources
  ]);

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
