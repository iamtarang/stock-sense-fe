/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import ChatInterface from "./chat-page";
import Sidebar from "./components/sidebar";

const ChatLayout: React.FC = () => {
    // const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);



    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-1 overflow-hidden">
                <ChatInterface />
            </main>
        </div>

    );
};

export default ChatLayout;