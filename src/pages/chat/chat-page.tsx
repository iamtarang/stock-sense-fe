import { useState } from "react";
import ChatInput from "./components/chat-input";
import ChatBubble from "./components/user-chat";

const ChatInterface = () => {

    const [messages, setMessages] = useState([
        { id: 1, text: 'Hello! How can I help you today?', sender: 'bot', timestamp: '10:00 AM' },
        { id: 2, text: 'I need help with my account settings.', sender: 'user', timestamp: '10:02 AM' },
        { id: 3, text: 'Sure, I can help you with that. What specific settings are you trying to modify?', sender: 'bot', timestamp: '10:03 AM' }
    ]);

    const handleSendMessage = (text: string) => {
        if (text.trim()) {
            const newMessage = {
                id: messages.length + 1,
                text,
                sender: 'user',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages([...messages, newMessage]);
        }
    };

    return (
        <div className="flex flex-col h-full min-w-full">
            <div className="bg-white border-b p-4">
                <h2 className="text-lg font-semibold">Support Chat</h2>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                    <ChatBubble key={message.id} message={message} />
                ))}
            </div>

            <ChatInput onSendMessage={handleSendMessage} />
        </div>
    );
};

export default ChatInterface;
