import { useState } from "react";
import ChatInterface from "./chat-page";
import Sidebar from "./components/sidebar";

const ChatLayout = () => {
    // State to track the current session ID
    const [currentSessionId, setCurrentSessionId] = useState<number>(null);

    // Handler to receive session ID from Sidebar
    const handleSessionChange = (sessionId: number) => {
        console.log("Session ID received in Layout:", sessionId);
        setCurrentSessionId(sessionId);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar onSessionChange={handleSessionChange} />
            <main className="flex-1 overflow-hidden">
                <ChatInterface sessionId={currentSessionId} />
            </main>
        </div>
    );
};

export default ChatLayout;