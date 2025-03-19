export interface Message {
    id: number | null;
    text: string;
    sender: 'user' | 'agent';
    timestamp: string;
    isStreaming?: boolean;
    isStreamingChunk?: boolean;
    lastChunk?: string | null; 
  }