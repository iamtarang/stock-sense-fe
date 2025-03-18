import { useState, useCallback, useRef, useEffect } from 'react';
import { Message } from '../types/message';
import { useCookies } from 'react-cookie';

interface UseChatServiceReturn {
  isStreaming: boolean;
  loading: boolean;
  messages: Message[];
  sendMessage: (text: string) => Promise<void>;
  stopStreaming: () => void;
  currentSessionId: number | null;
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
  const [currentSessionId, setCurrentSessionId] = useState<number | null>(null);
  
  // Refs for streaming control
  const shouldStopStreamingRef = useRef(false);
  const abortControllerRef = useRef<AbortController | null>(null);
  const streamingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // New refs for animation and text buffer
  const fullResponseRef = useRef<string>('');
  const displayedTextRef = useRef<string>('');
  const animationFrameIdRef = useRef<number | null>(null);
  const lastAnimationTimeRef = useRef<number>(0);
  const currentMessageIdRef = useRef<number | null>(null);

  // Helper function to get the access token from cookies
  const getAccessToken = (): string | null => {
    return cookies.access_token || null;
  };

  // Improved cleanup function for streaming resources
  const cleanupStreamingResources = useCallback(() => {
    // Cancel any pending animation frame
    if (animationFrameIdRef.current !== null) {
      cancelAnimationFrame(animationFrameIdRef.current);
      animationFrameIdRef.current = null;
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
      
      // Update the message to remove streaming status
      if (currentMessageIdRef.current) {
        setMessages(prevMessages => {
          const messages = [...prevMessages];
          const lastMessage = messages.find(m => m.id === currentMessageIdRef.current);
          
          if (lastMessage && lastMessage.isStreaming) {
            const index = messages.indexOf(lastMessage);
            messages[index] = {
              ...lastMessage,
              isStreaming: false,
            };
          }
          
          return messages;
        });
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

  // Animation constants
  const TYPING_SPEED = 40; // Characters per second
  const COMMA_PAUSE = 150; // ms
  const PERIOD_PAUSE = 300; // ms

  // NEW: Completely redesigned animation system using requestAnimationFrame
  const animateTyping = useCallback((timestamp: number) => {
    // Skip if not streaming or no message to update
    if (!isStreaming || shouldStopStreamingRef.current || !currentMessageIdRef.current) {
      return;
    }
    
    const fullText = fullResponseRef.current;
    const currentText = displayedTextRef.current;
    
    // If we've displayed all text, stop animation
    if (currentText.length >= fullText.length) {
      return;
    }
    
    // Calculate time since last character was added
    const elapsed = timestamp - lastAnimationTimeRef.current;
    
    // Determine if we should add a character based on timing
    let shouldAddChar = false;
    let delay = 1000 / TYPING_SPEED; // Base delay between characters
    
    // Check if enough time has passed to add another character
    if (elapsed >= delay) {
      shouldAddChar = true;
      
      // Get the next character to add
      const nextChar = fullText[currentText.length];
      
      // Check if we need a pause after this character
      if (['.', '!', '?'].includes(nextChar)) {
        delay = PERIOD_PAUSE;
      } else if ([',', ';', ':'].includes(nextChar)) {
        delay = COMMA_PAUSE;
      }
      
      // Update the last animation time
      lastAnimationTimeRef.current = timestamp;
    }
    
    // Add a character if it's time
    if (shouldAddChar) {
      // Update our text reference
      displayedTextRef.current = fullText.substring(0, currentText.length + 1);
      
      // Update the message in state
      setMessages(prevMessages => {
        const index = prevMessages.findIndex(m => m.id === currentMessageIdRef.current);
        if (index === -1) return prevMessages;
        
        const updatedMessages = [...prevMessages];
        updatedMessages[index] = {
          ...updatedMessages[index],
          text: displayedTextRef.current
        };
        
        return updatedMessages;
      });
    }
    
    // Schedule the next frame
    animationFrameIdRef.current = requestAnimationFrame(animateTyping);
  }, [isStreaming]);

  // Start the animation system
  const startTypingAnimation = useCallback((messageId: number) => {
    // Set the current message ID
    currentMessageIdRef.current = messageId;
    
    // Initialize animation timing
    lastAnimationTimeRef.current = performance.now();
    
    // Start the animation loop
    animationFrameIdRef.current = requestAnimationFrame(animateTyping);
  }, [animateTyping]);

  const sendMessage = useCallback(async (text: string): Promise<void> => {
    if (!text.trim() || loading || isStreaming) return;
    
    // Check if we have a valid access token
    const accessToken = getAccessToken();
    if (!accessToken) {
      console.error('No access token found. User may need to log in.');
      return;
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
      
      // Start the typing animation
      startTypingAnimation(tempAgentMessageId);
      
      // Create a new AbortController for this request
      abortControllerRef.current = new AbortController();
      
      // Prepare the request payload
      const payload = {
        prompt: text,
        session_id: currentSessionId // Will be null for the first message
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
      
      while (true) {
        // If stopping was requested, break the loop
        if (shouldStopStreamingRef.current) {
          break;
        }
        
        try {
          const { done, value } = await reader.read();
          
          if (done) {
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
                  if (userMetaData?.session_id && !currentSessionId) {
                    setCurrentSessionId(userMetaData.session_id);
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
                  
                  if (chunkText === 'start' || chunkText === '') {
                    // Chat streaming has started (or empty chunk)
                    continue;
                  } else if (chunkText === 'end') {
                    // Chat streaming has ended
                    continue;
                  }
                  
                  // Add the chunk to our full response buffer
                  fullResponseRef.current += chunkText;
                  
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
      
      // All chunks received, make sure we finish the animation properly
      setTimeout(() => {
        // If streaming was stopped, don't update
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
  }, [loading, isStreaming, currentSessionId, cookies.access_token, cleanupStreamingResources, startTypingAnimation]);

  return {
    isStreaming,
    loading,
    messages,
    sendMessage,
    stopStreaming,
    currentSessionId
  };
};