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
    loadSessionMessages: (sessionId: number | null) => Promise<void>;
    updateSessionTitle: (sessionId: number, title: string) => Promise<void>;
    clearMessages: () => void; // Add this new function
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

    // Add a ref to track if we need to refresh messages
    const pendingSessionUpdate = useRef<number | null>(null);

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
    }, []);

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

            // Set the pending session update BEFORE updating the state
            // This prevents double loading
            pendingSessionUpdate.current = data.id;
            setSessionId(data.id);
            setMessages([]);
            return data.id;
        } catch (error) {
            console.error('Error creating new session:', error);
            return -1;
        }
    }, [getAccessToken]);

    const clearMessages = useCallback(() => {
        setMessages([]);
        setSessionId(null);
        pendingSessionUpdate.current = null;
    }, []);

    // Load messages for a specific session
    // const loadSessionMessages = useCallback(async (newSessionId: number | null): Promise<void> => {
    //     console.log("Loading messages for session:", newSessionId);
    //     const accessToken = getAccessToken();
    //     if (!accessToken) {
    //         console.error('No access token found. User may need to log in.');
    //         return;
    //     }

    //     try {
    //         setLoading(true);
    //         const response = await fetch(`https://stocksense-backend.onrender.com/api/users/chat-messages/?session=${newSessionId}`, {
    //             method: 'GET',
    //             headers: {
    //                 'Authorization': `Bearer ${accessToken}`,
    //                 'Content-Type': 'application/json'
    //             }
    //         });

    //         if (!response.ok) throw new Error(`Failed to load messages: ${response.status}`);

    //         const data = await response.json();
    //         const formattedMessages: Message[] = data.map((msg: ChatMessage) => ({
    //             id: msg.id,
    //             text: msg.message,
    //             sender: msg.sender === 'user' ? 'user' : 'agent',
    //             timestamp: new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    //         }));

    //         console.log(formattedMessages);
    //         setMessages([...formattedMessages]);

    //         // Don't update sessionId here - this was creating the loop
    //         console.log("Messages loaded for session:", newSessionId);
    //     } catch (error) {
    //         console.error('Error loading session messages:', error);
    //     } finally {
    //         setLoading(false);
    //     }
    // }, [getAccessToken]);

    // Load messages for a specific session     
    const loadSessionMessages = useCallback(async (newSessionId: number | null): Promise<void> => {
        console.log("Loading messages for session:", newSessionId);

        // If newSessionId is null, just reset messages and exit
        if (newSessionId === null) {
            setMessages([]);
            setLoading(false);
            return;
        }

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

            // Don't update sessionId here - this was creating the loop
            console.log("Messages loaded for session:", newSessionId);
        } catch (error) {
            console.error('Error loading session messages:', error);
        } finally {
            setLoading(false);
        }
    }, [getAccessToken]);

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
    }, [getAccessToken]);

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
            const objects: Record<string, unknown>[] = [];

            // Split on newlines and process each line separately
            const lines = chunk.split('\n').filter(line => line.trim() !== '');

            for (const line of lines) {
                try {
                    if (line.trim()) {
                        objects.push(JSON.parse(line));
                    }
                } catch (error) {
                    console.error('Error parsing JSON line:', error, line);
                }
            }

            // Process each parsed JSON object
            objects.forEach(eventData => {
                switch (eventData.event) {
                    case 'user_meta_data': {
                        const userMetaData = eventData.data as UserMetaData;

                        // Only set session ID if it's different and we're not currently processing one
                        if (userMetaData?.chat_session_id &&
                            (!sessionId || sessionId !== userMetaData.chat_session_id) &&
                            pendingSessionUpdate.current === null) {

                            console.log(`Received new session ID from backend: ${userMetaData.chat_session_id}`);

                            // Set the pending update before changing state
                            pendingSessionUpdate.current = userMetaData.chat_session_id;
                            setSessionId(userMetaData.chat_session_id);

                            // Schedule to update title outside the stream process
                            setTimeout(() => {
                                updateSessionTitle(userMetaData.chat_session_id, prompt);
                                loadSessions();
                            }, 500);
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
                    case 'chat_streaming': {
                        let chunkText = '';

                        if (typeof eventData.data === 'object' && eventData.data !== null) {
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

            // Continue processing recursively with a short delay
            await new Promise(resolve => setTimeout(resolve, 100));
            processStream(reader, agentMessageId, decoder, prompt);
        },
        [cleanupStreamingResources, sessionId, updateSessionTitle, loadSessions]
    );

    // Effect to handle session changes and load messages once
    useEffect(() => {
        if (sessionId && pendingSessionUpdate.current === sessionId) {
            // Clear the pending update since we're handling it now
            pendingSessionUpdate.current = null;

            // We might want to load messages here, if necessary
            // But currently it seems like messages are being loaded at appropriate times
        }
    }, [sessionId]);

    // Function to send a message and start streaming
    const sendMessage = useCallback(async (text: string): Promise<void> => {
        if (!text.trim() || loading || isStreaming) return;

        const accessToken = getAccessToken();
        if (!accessToken) {
            console.error('No access token found. User may need to log in.');
            return;
        }

        // Create a new session if needed
        let currentSessionId = sessionId;
        if (!currentSessionId) {
            const newSessionId = await createNewSession();
            if (newSessionId === -1) {
                console.error('Failed to create new session');
                return;
            }
            currentSessionId = newSessionId;
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
            const payload = { prompt: text, session_id: currentSessionId };

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
    }, [loading, isStreaming, getAccessToken, sessionId, createNewSession, processStream, cleanupStreamingResources]);

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
        loadSessionMessages,
        updateSessionTitle,
        clearMessages // Add this new function
    };
};