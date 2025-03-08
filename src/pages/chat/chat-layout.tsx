import ChatInterface from "./chat-page";
import Sidebar from "./components/sidebar";

const ChatLayout: React.FC = () => {
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