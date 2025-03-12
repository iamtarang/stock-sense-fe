import { useState, useEffect } from "react";
import NavItems from "./nav-items";
import {
    Menu,
    X,
    ChevronLeft,
    ChevronRight,
    CalendarDays,
    CalendarClock,
    CalendarMinus,
    CalendarCheck
} from "lucide-react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

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

    const categories = [
        {
            name: 'Today',
            icon: CalendarCheck,
            items: []
        },
        {
            name: 'Yesterday',
            icon: CalendarMinus,
            items: []
        },
        {
            name: 'Past Week',
            icon: CalendarDays,
            items: []
        },
        {
            name: 'Previous',
            icon: CalendarClock,
            items: []
        }
    ];

    const toggleSidebar = () => setIsOpen(!isOpen);

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
                className={`${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                    fixed md:relative z-40 transition-transform duration-300 ease-in-out 
                    ${isOpen ? 'w-64' : 'w-0 md:w-16'} 
                    bg-blue-800 text-white h-full flex flex-col`}
            >
                {/* Header */}
                <div className="p-4 border-blue-700 flex justify-between items-center">
                    {(isOpen || !isMobile) && (
                        <h1 className={`text-xl font-bold ${isOpen ? 'opacity-100' : 'opacity-0 md:hidden'}`}>
                            Chat App
                        </h1>
                    )}

                    {isMobile && isOpen && (
                        <button onClick={toggleSidebar} className="text-white" aria-label="Close menu">
                            <X size={24} />
                        </button>
                    )}
                </div>

                {/* Navigation */}
                <div className={`flex-1 overflow-y-auto py-4 ${isOpen ? 'px-2' : 'px-0'}`}>
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
                                        <category.icon size={24} className="text-white" />
                                        <span className="sr-only">{category.name}</span>
                                    </div>
                                ))}
                            </nav>
                        )
                    )}
                </div>

                {/* User section */}
                <div className={`p-4 border-blue-700 flex ${isOpen ? 'justify-between' : 'justify-center'} items-center`}>
                    {isOpen && (
                        <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                                <span className="font-semibold">US</span>
                            </div>
                            <div className="ml-3">
                                <p className="font-medium">User Name</p>
                                <p className="text-sm text-blue-300">Online</p>
                            </div>
                        </div>
                    )}

                    {/* Toggle button */}
                    {!isMobile && (
                        <button
                            onClick={toggleSidebar}
                            className={`${isOpen ? 'ml-2' : 'mx-auto'} bg-blue-700 hover:bg-blue-600 rounded-full p-1`}
                            aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
                        >
                            {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                        </button>
                    )}

                    {/* Mini user icon when collapsed on desktop */}
                    {!isOpen && !isMobile && (
                        // <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                        //     <span className="font-semibold">US</span>
                        // </div>
                        <></>
                    )}
                </div>
            </div>

            {/* Mobile overlay */}
            {isMobile && isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30"
                    onClick={toggleSidebar}
                    aria-hidden="true"
                />
            )}
        </>
    );
};

export default Sidebar;