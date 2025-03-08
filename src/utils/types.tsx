export interface Message {
    id: number;
    text: string;
    sender: 'user' | 'agent';
    timestamp: string;
    isStreaming?: boolean;
  }