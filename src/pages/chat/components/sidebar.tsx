import NavItems from "./nav-items";

const Sidebar = () => {
    const categories = [
        {
            name: 'General',
            icon: 'HomeIcon',
            items: ['Dashboard', 'Analytics', 'Overview']
        },
        {
            name: 'Messaging',
            icon: 'ChatIcon',
            items: ['Inbox', 'Drafts', 'Sent', 'Archived']
        },
        {
            name: 'Settings',
            icon: 'CogIcon',
            items: ['Profile', 'Preferences', 'Security', 'Notifications']
        },
        {
            name: 'Resources',
            icon: 'BookIcon',
            items: ['Documentation', 'Tutorials', 'FAQ', 'Support']
        }
    ];

    return (
        <div className="w-64 bg-blue-800 text-white flex flex-col h-full">
            <div className="p-4 border-b border-blue-700">
                <h1 className="text-xl font-bold">Chat App</h1>
            </div>

            <div className="flex-1 overflow-y-auto py-4">
                <nav className="px-2">
                    {categories.map((category, index) => (
                        <NavItems key={index} category={category} />
                    ))}
                </nav>
            </div>

            <div className="p-4 border-t border-blue-700">
                <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                        <span className="font-semibold">US</span>
                    </div>
                    <div className="ml-3">
                        <p className="font-medium">User Name</p>
                        <p className="text-sm text-blue-300">Online</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;