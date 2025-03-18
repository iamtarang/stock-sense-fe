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

  const handleVoiceMode = () => {
    // Implement voice mode functionality here
    console.log("Voice mode activated");
    // You would typically trigger the voice recognition here
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
      ) : message.trim() ? (
        <button
          onClick={handleSubmit}
          disabled={disabled}
          className="ml-2 p-2 text-blue-500 disabled:text-gray-400 transition-colors"
          aria-label="Send message"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
          </svg>
        </button>
      ) : (
        <div className="relative ml-2">
        <button
          onClick={handleVoiceMode}
          disabled={disabled}
          className="p-2 text-blue-500 disabled:text-gray-400 transition-colors group cursor-pointer"
          aria-label="Use voice mode"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
            <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
          </svg>
          <span className="absolute bottom-full left-[30%] transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Use voice mode
          </span>
        </button>
      </div>
      )}
    </div>
  );
};

export default ChatInput;
