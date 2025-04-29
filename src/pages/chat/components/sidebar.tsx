import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
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
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useChatService } from "../../../hooks/use-chatservice"; // Adjust path as needed
import api from "../../../utils/api"; // Adjust path as needed

// --- Shared Types ---
// (Consider placing these in a separate types.ts file)
export interface ChatSession {
  id: number;
  user: number; // Assuming user ID is relevant
  started_at: string;
  ended_at: string | null;
  session_title: string;
}

export type CategoryName = "Today" | "Yesterday" | "Past Week" | "Previous";

export type CategorizedSessions = {
  [K in CategoryName]: ChatSession[];
};

// --- Helper Function ---
// (Consider placing in a utils/date.ts file)
const formatDateCategory = (dateString: string): CategoryName => {
  const date = new Date(dateString);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1); // Correctly set yesterday based on today

  // Reset time components for accurate date comparison
  today.setHours(0, 0, 0, 0);
  yesterday.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);

  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(today.getDate() - 7);

  if (date.getTime() === today.getTime()) {
    return "Today";
  } else if (date.getTime() === yesterday.getTime()) {
    return "Yesterday";
  } else if (date >= sevenDaysAgo) {
    return "Past Week";
  } else {
    return "Previous";
  }
};

// --- Modal Components ---
// (Consider placing these in separate component files)

const DeleteConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  sessionTitle,
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
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={20} />
          </button>
        </div>
        <p className="text-gray-300 mb-4">
          Are you sure you want to delete "{sessionTitle || "New Chat"}"? This
          action cannot be undone.
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

const RenameModal = ({
  isOpen,
  onClose,
  onConfirm,
  sessionTitle,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (newTitle: string) => void;
  sessionTitle: string;
}) => {
  const [newTitle, setNewTitle] = useState(sessionTitle);

  // Reset title when modal opens or the initial title changes
  useEffect(() => {
    setNewTitle(sessionTitle);
  }, [sessionTitle, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTitle.trim()) {
      onConfirm(newTitle.trim());
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-white">Rename Chat</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="chatTitle"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
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

// --- NavItems Component (Child) ---
// (Consider placing in src/components/Sidebar/NavItems.tsx)
interface NavItemsProps {
  category: {
    name: CategoryName;
    items: ChatSession[]; // Receive full ChatSession objects
  };
  activeChatId?: number | null;
  onSessionSelect: (sessionId: number) => void;
  handleNewChat: () => void;
  onDeleteSession: (sessionId: number, title: string) => void;
  onRenameSession: (sessionId: number, title: string) => void;
}

const NavItems: React.FC<NavItemsProps> = ({
  category,
  activeChatId,
  onSessionSelect,
  handleNewChat,
  onDeleteSession,
  onRenameSession,
}) => {
  const [hoveredSession, setHoveredSession] = useState<number | null>(null);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  // Use a map to store refs for each button if needed, or assign conditionally
  const buttonRefs = useRef<Map<number, HTMLButtonElement | null>>(new Map());

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openMenu === null || !menuRef.current) return;

      const clickedButton = buttonRefs.current.get(openMenu);

      if (
        !menuRef.current.contains(event.target as Node) &&
        (!clickedButton || !clickedButton.contains(event.target as Node))
      ) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]); // Dependency: only when a menu is open

  // Sort the received sessions (create a copy first)
  const sortedSessions = category.items
    .slice()
    .sort(
      (a, b) =>
        new Date(b.started_at).getTime() - new Date(a.started_at).getTime()
    );

  // Don't render empty categories other than 'Today'
  if (sortedSessions.length === 0 && category.name !== "Today") {
    return null;
  }

  const handleDotClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    sessionID: number
  ) => {
    e.stopPropagation(); // Prevent session selection
    setOpenMenu(openMenu === sessionID ? null : sessionID);
  };

  const handleDeleteClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    session: ChatSession
  ) => {
    e.stopPropagation();
    onDeleteSession(session.id, session.session_title || "New Chat");
    setOpenMenu(null); // Close menu after action
  };

  const handleRenameClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    session: ChatSession
  ) => {
    e.stopPropagation();
    onRenameSession(session.id, session.session_title || "New Chat");
    setOpenMenu(null); // Close menu after action
  };

  return (
    <div className="mb-4">
      {/* Render "New Chat" button only for the 'Today' category */}
      {category.name === "Today" && (
        <button
          onClick={handleNewChat}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mb-3 flex items-center justify-center"
        >
          <Plus size={16} className="mr-2" />
          New Chat
        </button>
      )}

      {/* Render category header and list if there are sessions */}
      {sortedSessions.length > 0 && (
        <>
          <h2 className="text-blue-300 text-xs uppercase font-semibold mb-2 px-2">
            {category.name}
          </h2>
          <ul className="w-full">
            {sortedSessions.map((session) => (
              <li
                key={session.id}
                className="relative w-full"
                onMouseEnter={() => setHoveredSession(session.id)}
                onMouseLeave={() => setHoveredSession(null)}
              >
                <div
                  className={`flex items-center w-full rounded-lg ${
                    activeChatId === session.id
                      ? "bg-blue-700 text-white"
                      : "hover:bg-blue-600/50 text-gray-100"
                  }`}
                >
                  {/* Main session area */}
                  <div
                    onClick={() => onSessionSelect(session.id)}
                    className="flex items-center flex-1 py-2 px-3 cursor-pointer min-w-0 overflow-hidden"
                    role="button" // Indicate it's clickable
                    tabIndex={0} // Make it focusable
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onSessionSelect(session.id); }} // Keyboard activation
                  >
                    <div className="flex items-center flex-shrink-0 mr-2">
                      {activeChatId === session.id ? (
                        <div className="relative">
                          <MessageSquare size={16} className="text-white" />
                          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border border-blue-700"></div>
                        </div>
                      ) : (
                        <MessageSquare size={16} className="text-gray-300" />
                      )}
                    </div>
                    <span className="truncate">
                      {session.session_title || "New Chat"}
                    </span>
                  </div>

                  {/* Options button */}
                  <div className="flex-shrink-0 w-8">
                    {(hoveredSession === session.id || openMenu === session.id) && (
                      <button
                        ref={(el) => buttonRefs.current.set(session.id, el)} // Assign ref using map
                        onClick={(e) => handleDotClick(e, session.id)}
                        className="p-1 mx-auto rounded-full hover:bg-blue-400/50 cursor-pointer"
                        aria-haspopup="true"
                        aria-expanded={openMenu === session.id}
                        aria-controls={`menu-${session.id}`}
                        aria-label={`Options for ${session.session_title || "New Chat"}`}
                      >
                        <MoreVertical size={16} className="text-gray-300" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Menu dropdown */}
                {openMenu === session.id && (
                  <div
                    ref={menuRef} // Ref for the dropdown itself
                    id={`menu-${session.id}`}
                    className="absolute right-2 top-full mt-1 w-36 bg-white text-gray-900 rounded shadow-lg z-20 border border-gray-300" // Increased z-index
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby={`button-${session.id}`} // Assuming button has id=`button-${session.id}` if needed
                  >
                    <button
                      onClick={(e) => handleRenameClick(e, session)}
                      className="w-full flex items-center px-4 py-2 text-sm hover:bg-blue-100 cursor-pointer"
                      role="menuitem"
                    >
                      <Edit size={14} className="mr-2 text-blue-600" />
                      Rename
                    </button>
                    <button
                      onClick={(e) => handleDeleteClick(e, session)}
                      className="w-full flex items-center px-4 py-2 text-sm hover:bg-red-100 text-red-600 cursor-pointer"
                      role="menuitem"
                    >
                      <Trash2 size={14} className="mr-2" />
                      Delete
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


// --- Sidebar Component (Parent) ---
// (This would typically be src/components/Sidebar/Sidebar.tsx)
interface SidebarProps {
  activeChatId?: number | null;
}

const Sidebar = ({ activeChatId }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuTriggerRef = useRef<HTMLDivElement>(null); // Ref for the user menu trigger
  const userMenuDropdownRef = useRef<HTMLDivElement>(null); // Ref for the user menu dropdown

  // Modal state
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [sessionToDelete, setSessionToDelete] = useState<number | null>(null);
  const [sessionTitleToDelete, setSessionTitleToDelete] = useState("");

  const [showRenameModal, setShowRenameModal] = useState(false);
  const [sessionToRename, setSessionToRename] = useState<number | null>(null);
  const [sessionTitleToRename, setSessionTitleToRename] = useState("");

  const [, , removeCookie] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const username = localStorage.getItem("username") || "User";
  const user_email = localStorage.getItem("user_email") || "user@example.com";

  // Use chat service hook AT THE PARENT LEVEL
  const {
    sessions,
    loadSessions,
    clearMessages,
    setSessionId,
    renameSession,
  } = useChatService();

  // --- Data Fetching Effect (Point 1) ---
  useEffect(() => {
    loadSessions(); // Initial load
    const intervalId = setInterval(loadSessions, 3000); // Refresh every 3 seconds
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [loadSessions]); // Dependency: the loadSessions function itself

  // --- Categorize Sessions (Point 2) ---
  const categorizedSessions = useMemo<CategorizedSessions>(() => {
    const categorized: CategorizedSessions = {
      Today: [], Yesterday: [], "Past Week": [], Previous: [],
    };
    sessions.forEach((session) => {
      const category = formatDateCategory(session.started_at);
      if (categorized[category]) {
        categorized[category].push(session); // Push the WHOLE session object
      }
    });
    return categorized;
  }, [sessions]); // Recalculate only when sessions array changes

  // --- Mobile/Resize Effect ---
  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Set initial state based on screen size (open on desktop, closed on mobile)
      // Only set this on initial load or if resizing crosses the breakpoint
      if (mobile !== isMobile) { // Avoid unnecessary state updates
          setIsOpen(!mobile);
      }
    };
    checkIfMobile(); // Initial check
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only once on mount

  // --- Outside Click Effect for User Menu ---
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isUserMenuOpen &&
        userMenuTriggerRef.current &&
        !userMenuTriggerRef.current.contains(event.target as Node) &&
        userMenuDropdownRef.current &&
        !userMenuDropdownRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isUserMenuOpen]); // Dependency: only when the menu is open

  const toggleSidebar = useCallback(() => setIsOpen(prev => !prev), []);
  const toggleUserMenu = useCallback(() => setIsUserMenuOpen(prev => !prev), []);

  const logout = useCallback(() => {
    localStorage.removeItem("username");
    localStorage.removeItem("rememberMe");
    localStorage.removeItem("user_id");
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_email");
    removeCookie("access_token", { path: "/" });
    removeCookie("access_token", { path: "/chat" });
    setSessionId(null);
    clearMessages();
    navigate("/login", { replace: true });
  }, [removeCookie, navigate, setSessionId, clearMessages]);

  const handleNewChat = useCallback(() => {
    clearMessages();
    setSessionId(null);
    navigate("/chat");
    if (isMobile && isOpen) { // Close sidebar on mobile after clicking New Chat
        setIsOpen(false);
    }
  }, [clearMessages, navigate, setSessionId, isMobile, isOpen]);

  // --- Session Selection Handler ---
  const handleSessionSelect = useCallback((sessionId: number) => {
      console.log(`Selecting session: ${sessionId}`);
      setSessionId(sessionId);
      navigate(`/chat/${sessionId}`);
      if (isMobile && isOpen) { // Close sidebar on mobile after selecting a chat
          setIsOpen(false);
      }
  }, [navigate, setSessionId, isMobile, isOpen]);

  const getUserInitials = () => {
    if (!username || username === "User") return "U";
    return username.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase();
  };

  // --- Modal Trigger Handlers ---
  const handleDeleteSessionClick = useCallback((sessionId: number, title: string) => {
    setSessionToDelete(sessionId);
    setSessionTitleToDelete(title);
    setShowDeleteModal(true);
  }, []);

  const handleRenameSessionClick = useCallback((sessionId: number, title: string) => {
    setSessionToRename(sessionId);
    setSessionTitleToRename(title);
    setShowRenameModal(true);
  }, []);

  // --- Modal Confirmation Handlers ---
  const confirmDeleteChat = useCallback(async () => {
    if (!sessionToDelete) return;
    try {
      await api.delete(`/api/users/chat-sessions/${sessionToDelete}/`);
      console.log("Chat deleted successfully");
      // If the deleted session was the active one, navigate to new chat
      if (sessionToDelete === activeChatId) {
        handleNewChat(); // This already handles navigation and state clearing
      } else {
        loadSessions(); // Refresh list if a non-active chat was deleted
      }
    } catch (error) {
      console.error("Error deleting chat:", error);
      // TODO: Add user feedback (e.g., toast notification)
    } finally {
      setShowDeleteModal(false);
      setSessionToDelete(null);
      setSessionTitleToDelete("");
    }
  }, [sessionToDelete, activeChatId, loadSessions, handleNewChat]); // Added handleNewChat dependency

  const confirmRenameChat = useCallback(async (newTitle: string) => {
    if (!sessionToRename) return;
    try {
      const success = await renameSession(sessionToRename, newTitle);
      if (success) {
        console.log("Chat renamed successfully");
        loadSessions(); // Refresh list to show new title
      } else {
        console.error("Failed to rename chat (hook returned false)");
        // TODO: Add user feedback
      }
    } catch (error) {
      console.error("Error renaming chat:", error);
      // TODO: Add user feedback
    } finally {
      setShowRenameModal(false);
      setSessionToRename(null);
      setSessionTitleToRename("");
    }
  }, [sessionToRename, renameSession, loadSessions]);

  // Define the order of categories
  const categoryOrder: CategoryName[] = ["Today", "Yesterday", "Past Week", "Previous"];

  return (
    <>
      {/* Mobile hamburger menu button */}
      {isMobile && !isOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-3 left-4 z-50 bg-blue-800 text-white p-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      )}

      {/* Render Modals */}
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

      {/* Sidebar Container */}
      <div
        className={`fixed md:relative z-40 transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0 w-64" : "-translate-x-full md:translate-x-0 md:w-16"}
            bg-blue-800 text-white h-full flex flex-col shadow-lg md:shadow-none`} // Added shadow for mobile open state
      >
        {/* Header */}
        <div className="p-4 border-b border-blue-700 flex justify-between items-center flex-shrink-0 h-16"> {/* Fixed height */}
           <h1
            className={`text-xl font-bold transition-opacity duration-200 ease-in-out whitespace-nowrap ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none md:hidden"
            }`}
          >
            StockSense
          </h1>

          {/* Close button for mobile */}
          {isMobile && isOpen && (
            <button onClick={toggleSidebar} className="text-white p-1 rounded hover:bg-blue-700" aria-label="Close menu">
              <X size={24} />
            </button>
          )}
          {/* Placeholder for alignment when title is hidden and sidebar is collapsed on desktop */}
           {!isOpen && !isMobile && <div className="w-0 h-6"></div>}
        </div>

        {/* Navigation Area */}
        <div
          className={`flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide transition-all duration-300 ease-in-out ${
            isOpen ? "px-2 py-4" : "px-0 py-4"
          }`}
          style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
        >
          {isOpen ? (
            <nav aria-label="Chat history">
              {categoryOrder.map((categoryName) => (
                <NavItems
                  key={categoryName}
                  category={{
                    name: categoryName,
                    items: categorizedSessions[categoryName] || [],
                  }}
                  activeChatId={activeChatId}
                  onSessionSelect={handleSessionSelect}
                  handleNewChat={handleNewChat}
                  onDeleteSession={handleDeleteSessionClick}
                  onRenameSession={handleRenameSessionClick}
                />
              ))}
            </nav>
          ) : (
            // Collapsed View (Desktop only)
            !isMobile && (
              <div className="flex flex-col items-center mt-4 space-y-4">
                <button
                  onClick={handleNewChat}
                  className="bg-blue-700 hover:bg-blue-600 p-2 rounded-full text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-800"
                  aria-label="Start new chat"
                  title="New Chat"
                >
                  <Plus size={20} />
                </button>
                {/* Add other collapsed icons here if needed */}
              </div>
            )
          )}
        </div>

        {/* User Section */}
        <div
          className={`p-4 border-t border-blue-700 flex items-center flex-shrink-0 transition-all duration-300 ease-in-out h-16 ${ // Fixed height
            isOpen ? "justify-between" : "justify-center"
          } relative`} // Added relative for dropdown positioning
        >
          {/* User Info (visible only when open) */}
          {isOpen && (
            <div
              ref={userMenuTriggerRef} // Add ref to the trigger element
              className="flex items-center cursor-pointer p-1 rounded hover:bg-blue-700 min-w-0" // Added padding/hover
              onClick={toggleUserMenu}
              role="button"
              aria-haspopup="true"
              aria-expanded={isUserMenuOpen}
              tabIndex={0} // Make focusable
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleUserMenu(); }} // Keyboard activation
            >
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                <span className="font-semibold text-sm">{getUserInitials()}</span>
              </div>
              <div className="ml-2 flex-1 min-w-0"> {/* Adjusted margin */}
                <p className="font-medium text-sm truncate">{username}</p>
              </div>
            </div>
          )}

          {/* User Dropdown Menu (visible only when open and menu toggled) */}
          {isOpen && isUserMenuOpen && (
            <div
              ref={userMenuDropdownRef} // Add ref to the dropdown
              className="absolute bottom-full mb-2 left-2 right-2 md:left-4 md:right-auto md:w-56 bg-white rounded-md shadow-lg py-1 text-gray-800 z-30" // Adjusted positioning and z-index
              role="menu"
              aria-orientation="vertical"
            >
              <div className="px-4 py-2 border-b border-gray-200">
                <p className="text-xs font-medium text-gray-500">Signed in as</p>
                <p className="text-sm font-semibold truncate">{user_email}</p>
              </div>
              <button
                onClick={logout}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center text-red-600"
                role="menuitem"
              >
                <LogOut size={16} className="mr-2" />
                <span className="text-sm">Logout</span>
              </button>
            </div>
          )}

          {/* Toggle button (visible on desktop) */}
          {!isMobile && (
            <button
              onClick={toggleSidebar}
              className={`bg-blue-700 hover:bg-blue-600 rounded-full p-1 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-800 ${isOpen ? "ml-2" : ""}`}
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
          className="fixed inset-0 bg-black/50 z-30 md:hidden" // Ensure it's only for mobile
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Sidebar;