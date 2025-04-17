import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MessageSquare, MoreVertical, Plus, Trash2, Share2, X } from 'lucide-react';
import { useChatService } from '../../../hooks/use-chatservice';
import { useNavigate } from 'react-router-dom';
import api from '../../../utils/api';

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
    items: unknown[];
  };
  chatSessionId?: number | null;
}

// Add a confirmation modal component
const DeleteConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  sessionTitle
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  sessionTitle: string;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-white">Delete Chat</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>
        <p className="text-gray-300 mb-4">
          Are you sure you want to delete "{sessionTitle || 'New Chat'}"? This action cannot be undone.
        </p>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-gray-700 text-white hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const NavItems: React.FC<NavItemsProps> = ({ category, chatSessionId }) => {
  const { sessions, setSessionId, loadSessions, clearMessages } = useChatService();
  const navigate = useNavigate();

  const [hoveredSession, setHoveredSession] = useState<number | null>(null);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isRedirected,setIsRedirected] = useState(false);
  // Add state for delete confirmation modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [sessionToDelete, setSessionToDelete] = useState<number | null>(null);
  const [sessionTitleToDelete, setSessionTitleToDelete] = useState('');

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is outside both the menu and the button
      if (
        openMenu !== null &&
        (!menuRef.current?.contains(event.target as Node) &&
          !buttonRef.current?.contains(event.target as Node))
      ) {
        setOpenMenu(null);
      }
    };

    // Add event listener only when a menu is open
    if (openMenu !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]);

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

  const getSessionsByCategory = (categoryName: string): ChatSession[] => {
    // Filter sessions by category name
    const filteredSessions = sessions.filter(session => formatDate(session.started_at) === categoryName);

    // Sort sessions by started_at date (newest first)
    return filteredSessions.sort((a, b) =>
      new Date(b.started_at).getTime() - new Date(a.started_at).getTime()
    );
  };

  const categorySessions = getSessionsByCategory(category.name);

  const handleSessionClick = (sessionID: number) => {
    setSessionId(sessionID);
    navigate(`/chat/${sessionID}`);
  };

  const handleNewChat = useCallback(() => {
    clearMessages();
    navigate('/chat');
  }, [clearMessages, navigate]);

  // Modified to show confirmation modal
  const handleDeleteChat = (
    e: React.MouseEvent<HTMLButtonElement>,
    session: ChatSession
  ) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent the session click event from firing

    // Set the session to delete and show the modal
    setSessionToDelete(session.id);
    setSessionTitleToDelete(session.session_title);
    setShowDeleteModal(true);
    // Close the dropdown menu
    setOpenMenu(null);
  };

  // New function to perform the actual deletion
  const confirmDeleteChat = async () => {
    if (!sessionToDelete) return;

    try {
      const response = await api.delete(`/api/users/chat-sessions/${sessionToDelete}/`);
      if (response.status === 200 || response.status === 204) {
        console.log("Chat deleted successfully");

        // If the deleted session was the active one, set sessionId to null
        if (sessionToDelete === chatSessionId) {
          setSessionId(null);
          navigate('/chat');
        }

        // Refresh the sessions list
        await loadSessions();
      } else {
        console.error("Failed to delete chat:", response);
      }
    } catch (error) {
      console.error("Error deleting chat:", error);
    } finally {
      // Close the modal and reset state
      setShowDeleteModal(false);
      setSessionToDelete(null);
      setSessionTitleToDelete('');
    }
  };

  // Toggle menu with separate function for each session
  const handleDotClick = (e: React.MouseEvent, sessionID: number) => {
    e.stopPropagation();
    if (openMenu === sessionID) {
      setOpenMenu(null); // Close if already open
    } else {
      setOpenMenu(sessionID); // Open if closed
    }
  };

  if (categorySessions.length === 0 && category.name !== 'Today') {
    return null;
  }

  return (
    <div className="mb-4">
      {/* Delete confirmation modal */}
      <DeleteConfirmationModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={confirmDeleteChat}
        sessionTitle={sessionTitleToDelete}
      />

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
          <ul className="w-full">
            {categorySessions.map((session) => (
              <li
                key={session.id}
                className="relative w-full"
                onMouseEnter={() => setHoveredSession(session.id)}
                onMouseLeave={() => setHoveredSession(null)}
              >
                <div className={`flex items-center w-full rounded-lg ${chatSessionId === session.id ? 'bg-blue-700 text-white' : 'hover:bg-blue-600/50 text-gray-100'
                  }`}>
                  {/* Main session area with fixed layout */}
                  <div
                    onClick={() => handleSessionClick(session.id)}
                    className="flex items-center flex-1 py-2 px-3 cursor-pointer min-w-0 overflow-hidden"
                  >
                    <MessageSquare size={16} className="mr-2 flex-shrink-0 text-gray-300" />
                    <span className="truncate">{session.session_title || 'New Chat'}</span>
                  </div>

                  {/* Options button with fixed width to prevent shifting */}
                  <div className="flex-shrink-0 w-8">
                    {hoveredSession === session.id && (
                      <button
                        ref={openMenu === session.id ? buttonRef : null}
                        onClick={(e) => handleDotClick(e, session.id)}
                        className="p-1 mx-auto rounded-full hover:bg-blue-400/50 cursor-pointer"
                      >
                        <MoreVertical size={16} className="text-gray-300" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Menu dropdown */}
                {openMenu === session.id && (
                  <div
                    ref={menuRef}
                    className="absolute right-2 top-full mt-1 w-36 bg-white text-gray-900 rounded shadow-lg z-10 border border-gray-300"
                  >
                    <button className="w-full flex items-center px-4 py-2 hover:bg-blue-200 cursor-pointer">
                      <Share2 size={16} className="mr-2 text-gray-500" />
                      Share Chat
                    </button>
                    <button
                      onClick={(e) => handleDeleteChat(e, session)}
                      className="w-full flex items-center px-4 py-2 hover:bg-red-100 hover:text-red-600 cursor-pointer"
                    >
                      <Trash2 size={16} className="mr-2 text-red-500" />
                      Delete Chat
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default React.memo(NavItems);