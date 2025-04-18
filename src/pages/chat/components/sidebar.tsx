import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  MessageSquare,
  MoreVertical,
  Plus,
  Trash2,
  Edit,
  X,
  Menu,
  ChevronLeft,
  ChevronRight,
  LogOut
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useChatService } from '../../../hooks/use-chatservice';
import api from '../../../utils/api';

interface ChatSession {
  id: number;
  user: number;
  started_at: string;
  ended_at: string | null;
  session_title: string;
}

// Category types
type CategoryName = 'Today' | 'Yesterday' | 'Past Week' | 'Previous';
type CategorizedSessions = {
  [key in CategoryName]: string[];
};

// Move modal components outside of other components
// Add a confirmation modal component for deleting chats
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

// Add a rename modal component
const RenameModal = ({
  isOpen,
  onClose,
  onConfirm,
  sessionTitle
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (newTitle: string) => void;
  sessionTitle: string;
}) => {
  const [newTitle, setNewTitle] = useState(sessionTitle);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTitle.trim()) {
      onConfirm(newTitle);
    }
  };
  
  useEffect(() => {
    setNewTitle(sessionTitle);
  }, [sessionTitle, isOpen]);
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-white">Rename Chat</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="chatTitle" className="block text-sm font-medium text-gray-300 mb-2">
              Chat Title
            </label>
            <input
              type="text"
              id="chatTitle"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
              maxLength={50}
            />
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md bg-gray-700 text-white hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
              disabled={!newTitle.trim()}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// NavItems component (now with modal state and handlers passed from parent)
const NavItems = ({ 
  category, 
  chatSessionId,
  handleNewChat,
  onDeleteSession,
  onRenameSession
}: { 
  category: {
    name: string;
    items: unknown[];
  };
  chatSessionId?: number | null;
  handleNewChat: () => void;
  onDeleteSession: (sessionId: number, title: string) => void;
  onRenameSession: (sessionId: number, title: string) => void;
}) => {
  const { sessions, setSessionId, loadSessions } = useChatService();
  const navigate = useNavigate();

  const [hoveredSession, setHoveredSession] = useState<number | null>(null);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Add interval to refresh sessions automatically
  useEffect(() => {
    // Initial load
    loadSessions();
    
    // Set up interval to refresh sessions (every 3 seconds)
    const intervalId = setInterval(() => {
      loadSessions();
    }, 3000);
    
    // Clean up interval
    return () => clearInterval(intervalId);
  }, [loadSessions]);

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

  // Modified to call parent handler
  const handleDeleteChat = (
    e: React.MouseEvent<HTMLButtonElement>,
    session: ChatSession
  ) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Call the parent handler
    onDeleteSession(session.id, session.session_title);
    
    // Close the dropdown menu
    setOpenMenu(null);
  };

  // Modified to call parent handler
  const handleRenameChat = (
    e: React.MouseEvent<HTMLButtonElement>,
    session: ChatSession
  ) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Call the parent handler
    onRenameSession(session.id, session.session_title || 'New Chat');
    
    // Close the dropdown menu
    setOpenMenu(null);
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
                    <button 
                      onClick={(e) => handleRenameChat(e, session)}
                      className="w-full flex items-center px-4 py-2 hover:bg-blue-200 cursor-pointer"
                    >
                      <Edit size={16} className="mr-2 text-blue-600" />
                      Rename Chat
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

// Main Sidebar component - now owns modal state
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  // Modal state - moved here from NavItems
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [sessionToDelete, setSessionToDelete] = useState<number | null>(null);
  const [sessionTitleToDelete, setSessionTitleToDelete] = useState('');
  
  const [showRenameModal, setShowRenameModal] = useState(false);
  const [sessionToRename, setSessionToRename] = useState<number | null>(null);
  const [sessionTitleToRename, setSessionTitleToRename] = useState('');

  const [, , removeCookie] = useCookies(['access_token']);
  const navigate = useNavigate();

  // Get username from localStorage
  const username = localStorage.getItem("username") || "User";
  const user_email = localStorage.getItem("user_email") || "user@stocksense.io";

  // Get chat service data
  const { sessions, sessionId: currentSessionId, clearMessages, loadSessions, setSessionId, renameSession } = useChatService();

  // Group sessions by time period
  const categorizedSessions: CategorizedSessions = {
    'Today': [],
    'Yesterday': [],
    'Past Week': [],
    'Previous': []
  };

  // Function to format dates for grouping
  const formatDate = (dateString: string): CategoryName => {
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

  // Group sessions by category
  sessions.forEach(session => {
    const category = formatDate(session.started_at);
    categorizedSessions[category].push(session.started_at);
  });

  // Check if screen size is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      // Auto-close sidebar on mobile
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    // Initial check
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isUserMenuOpen && !target.closest('.user-dropdown')) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isUserMenuOpen]);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  const logout = () => {
    // Clear credentials from localStorage
    localStorage.removeItem("username");
    localStorage.removeItem("rememberMe");
    localStorage.removeItem("user_id");
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_email");

    // Remove the access_token cookie
    removeCookie('access_token', { path: '/' });
    removeCookie('access_token', { path: '/chat' });

    // Redirect the user to the login page
    navigate("/login", { replace: true });
  }

  const handleNewChat = useCallback(() => {
    clearMessages();
    navigate('/chat');
  }, [clearMessages, navigate]);

  // Get user initials for avatar
  const getUserInitials = () => {
    if (!username || username === "User") return "U";
    return username.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };
  
  // New handlers for modals - moved from NavItems
  const handleDeleteSessionClick = (sessionId: number, title: string) => {
    setSessionToDelete(sessionId);
    setSessionTitleToDelete(title);
    setShowDeleteModal(true);
  };
  
  const handleRenameSessionClick = (sessionId: number, title: string) => {
    setSessionToRename(sessionId);
    setSessionTitleToRename(title);
    setShowRenameModal(true);
  };
  
  // Function to perform the actual deletion
  const confirmDeleteChat = async () => {
    if (!sessionToDelete) return;

    try {
      const response = await api.delete(`/api/users/chat-sessions/${sessionToDelete}/`);
      if (response.status === 200 || response.status === 204) {
        console.log("Chat deleted successfully");

        // If the deleted session was the active one, set sessionId to null
        // if (sessionToDelete === currentSessionId) {       
          setSessionId(null);
        // }
        navigate('/chat');
        // Refresh the sessions list
         loadSessions();
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

  // Function to perform the actual rename
  const confirmRenameChat = async (newTitle: string) => {
    if (!sessionToRename) return;

    try {
      const success = await renameSession(sessionToRename, newTitle);
      if (success) {
        console.log("Chat renamed successfully");
        // Refresh the sessions list
         loadSessions();
      } else {
        console.error("Failed to rename chat");
      }
    } catch (error) {
      console.error("Error renaming chat:", error);
    } finally {
      // Close the modal and reset state
      setShowRenameModal(false);
      setSessionToRename(null);
      setSessionTitleToRename('');
    }
  };

  return (
    <>
      {/* Mobile hamburger menu button */}
      {isMobile && !isOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-3 left-4 z-50 bg-blue-800 text-white p-2 rounded-md shadow-md"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      )}

      {/* Render modals at the root level - IMPORTANT: This is outside the sidebar container */}
      <DeleteConfirmationModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={confirmDeleteChat}
        sessionTitle={sessionTitleToDelete}
      />

      <RenameModal
        isOpen={showRenameModal}
        onClose={() => setShowRenameModal(false)}
        onConfirm={confirmRenameChat}
        sessionTitle={sessionTitleToRename}
      />

      {/* Sidebar */}
      <div
        className={`fixed md:relative z-40 transition-all duration-200 ease-in-out
            ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full md:translate-x-0 w-64 md:w-16'} 
            bg-blue-800 text-white h-full flex flex-col`}
      >
        {/* Header */}
        <div className="p-4 border-b border-blue-700 flex justify-between items-center">
          <h1 className={`text-xl font-bold transition-opacity duration-200 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 md:hidden'}`}>
            StockSense
          </h1>

          {isMobile && isOpen && (
            <button onClick={toggleSidebar} className="text-white" aria-label="Close menu">
              <X size={24} />
            </button>
          )}
        </div>

        {/* Navigation - scrollbar hidden but still scrollable */}
        <div className={`flex-1 py-4 transition-all duration-300 ease-in-out ${isOpen ? 'px-2' : 'px-0'} overflow-y-auto scrollbar-hide`}
          style={{
            msOverflowStyle: 'none',  /* IE and Edge */
            scrollbarWidth: 'none',   /* Firefox */
          }}>

          <div className={`transition-opacity duration-200 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
            {isOpen ? (
              <nav>
                {(Object.keys(categorizedSessions) as CategoryName[]).map((category) => (
                  <NavItems
                    key={category}
                    category={{
                      name: category,
                      items: categorizedSessions[category]
                    }}
                    chatSessionId={currentSessionId}
                    handleNewChat={handleNewChat}
                    onDeleteSession={handleDeleteSessionClick}
                    onRenameSession={handleRenameSessionClick}
                  />
                ))}
              </nav>
            ) : !isMobile && (
              <div className="flex flex-col items-center mt-4">
                <button
                  onClick={handleNewChat}
                  className="bg-blue-700 hover:bg-blue-600 p-2 rounded-full text-white shadow-md"
                  aria-label="Start new chat"
                  title="New Chat"
                >
                  <Plus size={20} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* User section */}
        <div className={`p-4 border-t border-blue-700 flex transition-all duration-300 ease-in-out ${isOpen ? 'justify-between' : 'justify-center'} items-center relative user-dropdown`}>
          <div
            className={`flex items-center transition-opacity duration-200 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 md:hidden'} cursor-pointer`}
            onClick={isOpen ? toggleUserMenu : undefined}
          >
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="font-semibold">{getUserInitials()}</span>
            </div>
            <div className="ml-3 flex-1">
              <p className="font-medium">{username}</p>
            </div>
          </div>

          {/* User Dropdown Menu */}
          {isOpen && isUserMenuOpen && (
            <div className="absolute bottom-16 left-4 w-56 bg-white rounded-md shadow-lg py-1 text-gray-800 z-50">
              <div className="px-4 py-2 border-b border-gray-200">
                <p className="text-sm font-medium">Signed in as</p>
                <p className="text-sm font-bold">{user_email}</p>
              </div>
              <button onClick={logout} className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center text-red-600">
                <LogOut size={16} className="mr-2" />
                <span>Logout</span>
              </button>
            </div>
          )}

          {/* Toggle button */}
          {!isMobile && (
            <button
              onClick={toggleSidebar}
              className={`${isOpen ? 'ml-2' : 'mx-auto'} bg-blue-700 hover:bg-blue-600 rounded-full p-1 transition-all duration-300 ease-in-out`}
              aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
            >
              {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile overlay */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 ease-in-out"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Sidebar;