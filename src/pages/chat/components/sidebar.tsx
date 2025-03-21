import { useState, useEffect } from "react";
import NavItems from "./nav-items";
import {
    Menu,
    X,
    ChevronLeft,
    ChevronRight,
    LogOut,
    Settings,
    User,
    Plus
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useChatService } from "../../../hooks/use-chatservice";

// Define types for categorized sessions
type CategoryName = 'Today' | 'Yesterday' | 'Past Week' | 'Previous';
type CategorizedSessions = {
    [key in CategoryName]: string[];
};

interface SidebarProps {
    onSessionChange: (sessionId: number) => void;
}

const Sidebar = (props: SidebarProps) => {
    const [isOpen, setIsOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    const [, , removeCookie] = useCookies(['access_token']);
    const navigate = useNavigate();

    // Get username from localStorage
    const username = localStorage.getItem("username") || "User";

    // Get chat service data
    const { sessions, sessionId: currentSessionId, setSessionId } = useChatService();

    // Track the selected chat session ID
    const [chatSessionId, setChatSessionId] = useState<number | null>(currentSessionId);

    // Update chatSessionId when currentSessionId changes
    useEffect(() => {
        setChatSessionId(currentSessionId);
    }, [currentSessionId]);

    // Handler for when a chat is clicked
    const handleChatClicked = (id: number) => {
        console.log("Chat clicked in Sidebar - Session ID:", id);
        setChatSessionId(id);
        // Call the onSessionChange prop to notify parent component
        props.onSessionChange(id);
    };

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
        categorizedSessions[category].push(session);
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

        // Remove the access_token cookie
        removeCookie('access_token', { path: '/' });

        // Redirect the user to the login page
        navigate("/login", { replace: true });
    }

    // Get user initials for avatar
    const getUserInitials = () => {
        if (!username || username === "User") return "U";
        return username.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
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
                    {/* Hide scrollbar for Chrome, Safari and Opera */}
                    <style jsx>{`
                        .scrollbar-hide::-webkit-scrollbar {
                            display: none;
                        }
                    `}</style>

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
                                        chatSessionId={chatSessionId}
                                        onChatClicked={handleChatClicked}
                                    />
                                ))}
                            </nav>
                        ) : (
                            !isMobile && (
                                <nav className="flex flex-col items-center">
                                    {(Object.keys(categorizedSessions) as CategoryName[]).map((category, index) => (
                                        <div key={index} className="p-2 hover:bg-blue-700 rounded cursor-pointer mb-2">
                                            <span className="sr-only">{category}</span>
                                            {category === 'Today' && categorizedSessions[category].length === 0 && (
                                                <Plus size={16} />
                                            )}
                                        </div>
                                    ))}
                                </nav>
                            )
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
                                <p className="text-sm font-bold">{username}</p>
                            </div>
                            <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center">
                                <Settings size={16} className="mr-2" />
                                <span>Settings</span>
                            </button>
                            <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center">
                                <User size={16} className="mr-2" />
                                <span>Profile</span>
                            </button>
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