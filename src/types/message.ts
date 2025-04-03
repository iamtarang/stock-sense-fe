export interface Message {
  id: number;
  text: string;
  sender: 'user' | 'tutor';
  timestamp: string;
  isStreaming?: boolean;
  isStreamingChunk?: boolean;
  lastChunk?: string | null;
}