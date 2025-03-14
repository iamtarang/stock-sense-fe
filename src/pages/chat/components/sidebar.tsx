import { useState, useEffect } from "react";
import NavItems from "./nav-items";
import {
    Menu,
    X,
    ChevronLeft,
    ChevronRight,
    Settings,
    LogOut
} from "lucide-react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

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


    const categories = [
        {
            name: 'Today',
            items: []
        },
        {
            name: 'Yesterday',
            items: []
        },
        {
            name: 'Past Week',
            items: []
        },
        {
            name: 'Previous',
            items: []
        }
    ];

    const toggleSidebar = () => setIsOpen(!isOpen);
    const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);


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
                <div className="p-4 border-blue-700 flex justify-between items-center">
                    {/* <h1 className={`text-xl font-bold transition-opacity duration-200 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 md:hidden'}`}>
                        Chat App
                    </h1> */}

                    {isMobile && isOpen && (
                        <button onClick={toggleSidebar} className="text-white" aria-label="Close menu">
                            <X size={24} />
                        </button>
                    )}
                </div>

                {/* Navigation */}
                <div className={`flex-1 overflow-y-auto py-4 transition-all duration-300 ease-in-out ${isOpen ? 'px-2' : 'px-0'}`}>
                    <div className={`transition-opacity duration-200 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 md:block'}`}>
                        {isOpen ? (
                            <nav>
                                {categories.map((category, index) => (
                                    <NavItems key={index} category={category} />
                                ))}
                            </nav>
                        ) : (
                            !isMobile && (
                                <nav className="flex flex-col items-center">
                                    {categories.map((category, index) => (
                                        <div key={index} className="p-2 hover:bg-blue-700 rounded cursor-pointer mb-2">
                                            <span className="sr-only">{category.name}</span>
                                        </div>
                                    ))}
                                </nav>
                            )
                        )}
                    </div>
                </div>

                {/* User section */}
                <div className={`p-4 border-white flex transition-all duration-300 ease-in-out ${isOpen ? 'justify-between' : 'justify-center'} items-center relative user-dropdown`}>
                    <div
                        className={`flex items-center transition-opacity duration-200 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 md:hidden'} cursor-pointer`}
                        onClick={isOpen ? toggleUserMenu : undefined}
                    >
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                            <span className="font-semibold">US</span>
                        </div>
                        <div className="ml-3 flex-1">
                            <p className="font-medium">User Name</p>
                            {/* <p className="text-sm text-blue-300">Online</p> */}
                        </div>
                    </div>

                    {/* Upward Dropdown Menu */}
                    {isOpen && isUserMenuOpen && (
                        <div className="absolute bottom-16 left-4 w-56 bg-white rounded-md shadow-lg py-1 text-gray-800 z-50">
                            <div className="px-4 py-2 border-b border-gray-200">
                                <p className="text-sm font-medium">Signed in as</p>
                                <p className="text-sm font-bold">username@example.com</p>
                            </div>
                            {/* <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center">
                                <Settings size={16} className="mr-2" />
                                <span>Settings</span>
                            </button> */}
                            <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center text-red-600">
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