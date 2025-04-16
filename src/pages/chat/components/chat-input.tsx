import React, { useState, KeyboardEvent } from "react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  onStopStreaming: () => void;
  isStreaming: boolean;
  disabled?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, onStopStreaming, isStreaming, disabled }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleStopClick = () => {
    onStopStreaming();
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask anything..."
        className="flex-1 border border-gray-500 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={disabled || isStreaming}
      />
      {isStreaming ? (
        <button
          onClick={handleStopClick}
          className="ml-2 p-2 bg-red-500 cursor-pointer text-white rounded-md hover:bg-red-600 transition-colors"
          aria-label="Stop generating"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z" clipRule="evenodd" />
          </svg>
        </button>
      ) : (
        <button
          onClick={handleSubmit}
          disabled={!message.trim() || disabled}
          className={`ml-2 p-2 ${message.trim() ? 'text-blue-500' : 'text-gray-400'} transition-colors`}
          aria-label="Send message"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ChatInput;