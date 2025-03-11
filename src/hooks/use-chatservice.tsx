import { useState, useCallback, useRef } from 'react';
import { Message } from '../types/message';

interface UseChatServiceReturn {
  isStreaming: boolean;
  loading: boolean;
  messages: Message[];
  sendMessage: (text: string) => Promise<void>;
  stopStreaming: () => void;
}

export const useChatService = (): UseChatServiceReturn => {
  const [isStreaming, setIsStreaming] = useState(false);
  const [loading, setLoading] = useState(false);
  const [streamingMessageId, setStreamingMessageId] = useState<number | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Hello! How can I help you today?', sender: 'agent', timestamp: '10:00 AM' },
    { id: 2, text: 'I need help with my account settings.', sender: 'user', timestamp: '10:02 AM' },
    { id: 3, text: 'Sure, I can help you with that. What specific settings are you trying to modify?', sender: 'agent', timestamp: '10:03 AM' }
  ]);
  
  // Add a ref to track if streaming should be stopped
  const shouldStopStreamingRef = useRef(false);

  const loadResponseFromFile = async (): Promise<string> => {
    try {
      // Corrected path to fetch file from the public directory
      const responsePath = "/scraped_markdown/Fundamental_Analysis.md";
  
      // Fetch the Markdown file
      const response = await fetch(responsePath);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch response file: ${response.status}`);
      }
  
      // Read the full file content
      const fileContent = await response.text();
  
      // Ensure the file isn't empty
      if (fileContent.trim().length > 0) {
        return fileContent.trim(); // Return full content
      } else {
        console.warn("Response file is empty, using fallback response.");
        return "How can I help you with that?";
      }
    } catch (error) {
      console.error("Error reading response file:", error);
      return "How can I help you with that?"; // Fallback response
    }
  };
  
  // Add function to stop streaming
  const stopStreaming = useCallback(() => {
    if (isStreaming) {
      shouldStopStreamingRef.current = true;
    }
  }, [isStreaming]);

  // Simulates a realistic typing animation with character-by-character display
  const simulateTyping = async (
    agentMessageId: number,
    onComplete: () => void
  ): Promise<void> => {
    // Reset the stop flag at the beginning of streaming
    shouldStopStreamingRef.current = false;
    
    // Start with empty text and show typing indicator
    setMessages(prevMessages => {
      const index = prevMessages.findIndex(m => m.id === agentMessageId);
      if (index === -1) return prevMessages;
      
      const updatedMessages = [...prevMessages];
      updatedMessages[index] = {
        ...updatedMessages[index],
        text: ''
      };
      
      return updatedMessages;
    });
    
    // Show typing indicator dots for 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    // Check if streaming should be stopped after the initial delay
    if (shouldStopStreamingRef.current) {
      onComplete();
      return Promise.resolve();
    }
    
    try {
      // Load response from Markdown file
      const response = await loadResponseFromFile();
      
      // Display characters one by one with a delay
      for (let i = 0; i < response.length; i++) {
        // Check if streaming should be stopped
        if (shouldStopStreamingRef.current) {
          break;
        }
        
        // Calculate the partial response up to the current character
        const partialResponse = response.substring(0, i + 1);
        
        // Update the message with the partial response
        setMessages(prevMessages => {
          const index = prevMessages.findIndex(m => m.id === agentMessageId);
          if (index === -1) return prevMessages;
          
          const updatedMessages = [...prevMessages];
          updatedMessages[index] = {
            ...updatedMessages[index],
            text: partialResponse
          };
          
          return updatedMessages;
        });
        
        // Variable typing delay to make it feel more natural
        let typingDelay = 50; // Base delay of 50ms
        
        // Slow down at the end of sentences and paragraphs
        const currentChar = response[i];
        const nextChar = response[i + 1] || '';
        
        if (currentChar === '.' && nextChar === ' ') {
          typingDelay = 300; // Longer pause after periods
        } else if (currentChar === ',' && nextChar === ' ') {
          typingDelay = 150; // Medium pause after commas
        } else if (currentChar === '\n' && nextChar === '\n') {
          typingDelay = 500; // Longest pause at paragraph breaks
        } else if (Math.random() < 0.05) {
          // Occasionally add a slightly longer random delay (simulating human typing)
          typingDelay = Math.random() * 200 + 100;
        }
        
        await new Promise((resolve) => setTimeout(resolve, typingDelay));
        
        // Check again if streaming should be stopped after the delay
        if (shouldStopStreamingRef.current) {
          break;
        }
      }
    } catch (error) {
      console.error('Error during typing simulation:', error);
      
      // Update the message with an error response if something goes wrong
      setMessages(prevMessages => {
        const index = prevMessages.findIndex(m => m.id === agentMessageId);
        if (index === -1) return prevMessages;
        
        const updatedMessages = [...prevMessages];
        updatedMessages[index] = {
          ...updatedMessages[index],
          text: "I'm sorry, I couldn't process your request at the moment."
        };
        
        return updatedMessages;
      });
    }
    
    // Small delay before completing
    await new Promise((resolve) => setTimeout(resolve, 200));
    onComplete();
    
    return Promise.resolve();
  };

  const sendMessage = useCallback(async (text: string): Promise<void> => {
    if (!text.trim() || loading || isStreaming) return;
    
    setLoading(true);
    
    try {
      // Create user message
      const userMessage: Message = {
        id: Date.now(),
        text,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      // Add only the user message first
      setMessages(prevMessages => [...prevMessages, userMessage]);
      
      // Short delay before showing agent message
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Create agent message with streaming flag
      const agentMessageId = Date.now() + 1;
      const agentMessage: Message = {
        id: agentMessageId,
        text: "",
        sender: 'agent',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isStreaming: true
      };
      
      // Add the agent message and start streaming
      setMessages(prevMessages => [...prevMessages, agentMessage]);
      setStreamingMessageId(agentMessageId);
      setIsStreaming(true);
      
      // Simulate typing effect and show response character by character
      await simulateTyping(agentMessageId, () => {
        // Mark streaming as complete
        setMessages(prevMessages => {
          const messageIndex = prevMessages.findIndex(m => m.id === agentMessageId);
          if (messageIndex === -1) return prevMessages;
          
          const finalMessages = [...prevMessages];
          finalMessages[messageIndex] = {
            ...finalMessages[messageIndex],
            isStreaming: false
          };
          
          return finalMessages;
        });
        
        setStreamingMessageId(null);
        setIsStreaming(false);
      });
    } catch (error) {
      console.error('Error in streaming response:', error);
      setIsStreaming(false);
      setStreamingMessageId(null);
    } finally {
      setLoading(false);
    }
  }, [loading, isStreaming]);

  return {
    isStreaming,
    loading,
    messages,
    sendMessage,
    stopStreaming
  };
};