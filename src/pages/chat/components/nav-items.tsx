import React from 'react';
import { MessageSquare, Plus } from 'lucide-react';
import { useChatService } from '../../../hooks/use-chatservice';

interface ChatSession {
  id: number;
  user: number;
  started_at: string;
  ended_at: string | null;
  session_title: string;
}

interface NavItemsProps {
  category: {
    name: string;
    items: any[];
  };
  chatSessionId?: number | null;
  onChatClicked?: (id: number) => void;
}

const NavItems: React.FC<NavItemsProps> = ({ category, chatSessionId, onChatClicked }) => {
  const {
    sessions,
    createNewSession,
    sessionId,
    setSessionId
  } = useChatService();

  // Function to format dates for grouping
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else if (date >= new Date(today.setDate(today.getDate() - 7))) {
      return 'Past Week';
    } else {
      return 'Previous';
    }
  };

  // Group sessions by date category
  const getSessionsByCategory = (categoryName: string): ChatSession[] => {
    return sessions.filter(session => formatDate(session.started_at) === categoryName);
  };

  // Get sessions for this specific category
  const categorySessions = getSessionsByCategory(category.name);

  // Handle session click
  const handleSessionClick = (sessionID: number) => {
    console.log("Clicked session ID:", sessionID);
    setSessionId(sessionID);

    // Call the parent callback to inform Sidebar
    if (onChatClicked) {
      onChatClicked(sessionID);
    }

    // Add this line for debugging
    console.log("After setActiveSessionId, current session ID should be:", sessionID);
  };

  // Handle creating a new chat
  const handleNewChat = async () => {
    const newSessionId = await createNewSession();

    // If a new session was created and we have the ID, notify parent
    if (newSessionId && onChatClicked) {
      onChatClicked(newSessionId);
    }
  };

  // Only render the category if it has sessions or is "Today" (for new chat button)
  if (categorySessions.length === 0 && category.name !== 'Today') {
    return null;
  }

  return (
    <div className="mb-4">
      {category.name === 'Today' && (
        <button
          onClick={handleNewChat}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mb-3 flex items-center justify-center"
        >
          <Plus size={16} className="mr-2" />
          New Chat
        </button>
      )}

      {categorySessions.length > 0 && (
        <>
          <h2 className="text-blue-300 text-xs uppercase font-semibold mb-2 px-2">
            {category.name}
          </h2>
          <ul>
            {categorySessions.map((session) => (
              <li key={session.id}>
                <button
                  onClick={() => handleSessionClick(session.id)}
                  className={`w-full text-left py-2 px-3 rounded-lg flex items-center ${chatSessionId === session.id
                      ? 'bg-blue-700 text-white'
                      : 'hover:bg-blue-700/50 text-gray-100'
                    }`}
                >
                  <MessageSquare size={16} className="mr-2 flex-shrink-0" />
                  <span className="truncate">{session.session_title || 'New Chat'}</span>
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default NavItems;