import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, MoreVertical, Plus, Trash2, Share2 } from 'lucide-react';
import { useChatService } from '../../../hooks/use-chatservice';
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
  onChatClicked?: (id: number | null) => void;
}

const NavItems: React.FC<NavItemsProps> = ({ category, chatSessionId, onChatClicked }) => {
  const { sessions, createNewSession, setSessionId, loadSessions } = useChatService();

  const [hoveredSession, setHoveredSession] = useState<number | null>(null);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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
    return sessions.filter(session => formatDate(session.started_at) === categoryName);
  };

  const categorySessions = getSessionsByCategory(category.name);

  const handleSessionClick = (sessionID: number) => {
    setSessionId(sessionID);
    if (onChatClicked) {
      onChatClicked(sessionID);
    }
  };

  const handleNewChat = async () => {
    const newSessionId = await createNewSession();
    if (newSessionId && onChatClicked) {
      onChatClicked(newSessionId);
    }
  };

  const handleDeleteChat = async (
    e: React.MouseEvent<HTMLButtonElement>,
    sessionId: number
  ) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent the session click event from firing

    try {
      const response = await api.delete(`/api/users/chat-sessions/${sessionId}/`);
      if (response.status === 200 || response.status === 204) {
        console.log("Chat deleted successfully");
        // Close the menu
        setOpenMenu(null);

        // If the deleted session was the active one, set sessionId to null
        if (sessionId === chatSessionId) {
          setSessionId(null);
          if (onChatClicked) {
            onChatClicked(null); // Pass null to indicate no active chat
          }
        }

        // Refresh the sessions list
        await loadSessions();
      } else {
        console.error("Failed to delete chat:", response);
      }
    } catch (error) {
      console.error("Error deleting chat:", error);
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
                      onClick={(e) => handleDeleteChat(e, session.id)}
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

// import React, { useState, useRef, useEffect } from 'react';
// import { MessageSquare, MoreVertical, Plus, Trash2, Share2 } from 'lucide-react';
// import { useChatService } from '../../../hooks/use-chatservice';
// import api from '../../../utils/api';

// interface ChatSession {
//   id: number;
//   user: number;
//   started_at: string;
//   ended_at: string | null;
//   session_title: string;
// }

// interface NavItemsProps {
//   category: {
//     name: string;
//     items: unknown[];
//   };
//   chatSessionId?: number | null;
//   onChatClicked?: (id: number | null) => void;
// }

// const NavItems: React.FC<NavItemsProps> = ({ category, chatSessionId, onChatClicked }) => {
//   const { sessions, createNewSession, setSessionId, loadSessions } = useChatService();

//   const [hoveredSession, setHoveredSession] = useState<number | null>(null);
//   const [openMenu, setOpenMenu] = useState<number | null>(null);
//   const menuRef = useRef<HTMLDivElement>(null);
//   const buttonRef = useRef<HTMLButtonElement>(null);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       // Check if click is outside both the menu and the button
//       if (
//         openMenu !== null &&
//         (!menuRef.current?.contains(event.target as Node) &&
//           !buttonRef.current?.contains(event.target as Node))
//       ) {
//         setOpenMenu(null);
//       }
//     };

//     // Add event listener only when a menu is open
//     if (openMenu !== null) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [openMenu]);

//   const formatDate = (dateString: string): string => {
//     const date = new Date(dateString);
//     const today = new Date();
//     const yesterday = new Date(today);
//     yesterday.setDate(yesterday.getDate() - 1);

//     if (date.toDateString() === today.toDateString()) {
//       return 'Today';
//     } else if (date.toDateString() === yesterday.toDateString()) {
//       return 'Yesterday';
//     } else if (date >= new Date(today.setDate(today.getDate() - 7))) {
//       return 'Past Week';
//     } else {
//       return 'Previous';
//     }
//   };

//   const getSessionsByCategory = (categoryName: string): ChatSession[] => {
//     return sessions.filter(session => formatDate(session.started_at) === categoryName);
//   };

//   const categorySessions = getSessionsByCategory(category.name);

//   const handleSessionClick = (sessionID: number) => {
//     setSessionId(sessionID);
//     if (onChatClicked) {
//       onChatClicked(sessionID);
//     }
//   };

//   const handleNewChat = async () => {
//     const newSessionId = await createNewSession();
//     if (newSessionId && onChatClicked) {
//       onChatClicked(newSessionId);
//     }
//   };

//   // const handleDeleteChat = async (
//   //   e: React.MouseEvent<HTMLButtonElement>,
//   //   sessionId: number
//   // ) => {
//   //   console.log(sessionId);

//   //   e.preventDefault();
//   //   e.stopPropagation(); // Prevent event bubbling
//   //   setOpenMenu(null); // Close the menu
//   //   try {
//   //     const deletedSession = await api.delete(`/api/users/chat-sessions/${sessionId}/`);
//   //     if (deletedSession) {
//   //       console.log("Chat deleted successfully:", deletedSession);
//   //     } else {
//   //       console.error("Failed to delete chat:", deletedSession);
//   //     }
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   const handleDeleteChat = async (
//     e: React.MouseEvent<HTMLButtonElement>, // Updated from HTMLButtonElement to HTMLDivElement
//     sessionId: number
//   ) => {
//     e.preventDefault();
//     e.stopPropagation(); // Prevent the session click event from firing

//     try {
//       const response = await api.delete(`/api/users/chat-sessions/${sessionId}/`);
//       if (response.status === 200 || response.status === 204) {
//         console.log("Chat deleted successfully");
//         // Close the menu
//         setOpenMenu(null);

//         // If the deleted session was the active one, set sessionId to null
//         if (sessionId === chatSessionId) {
//           setSessionId(null);
//           if (onChatClicked) {
//             onChatClicked(null); // Pass null to indicate no active chat
//           }
//         }

//         // Refresh the sessions list
//         await loadSessions();
//       } else {
//         console.error("Failed to delete chat:", response);
//       }
//     } catch (error) {
//       console.error("Error deleting chat:", error);
//     }
//   };


//   // Toggle menu with separate function for each session
//   const handleDotClick = (e: React.MouseEvent, sessionID: number) => {
//     e.stopPropagation();
//     if (openMenu === sessionID) {
//       setOpenMenu(null); // Close if already open
//     } else {
//       setOpenMenu(sessionID); // Open if closed
//     }
//   };

//   if (categorySessions.length === 0 && category.name !== 'Today') {
//     return null;
//   }

//   return (
//     <div className="mb-4">
//       {category.name === 'Today' && (
//         <button
//           onClick={handleNewChat}
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mb-3 flex items-center justify-center"
//         >
//           <Plus size={16} className="mr-2" />
//           New Chat
//         </button>
//       )}
//       {categorySessions.length > 0 && (
//         <>
//           <h2 className="text-blue-300 text-xs uppercase font-semibold mb-2 px-2">
//             {category.name}
//           </h2>
//           <ul>
//             {categorySessions.map((session) => (
//               <li
//                 key={session.id}
//                 className="relative"
//                 onMouseEnter={() => setHoveredSession(session.id)}
//                 onMouseLeave={() => setHoveredSession(null)}
//               >
//                 <div className={`flex items-center w-full rounded-lg ${chatSessionId === session.id ? 'bg-blue-700 text-white' : 'hover:bg-blue-600/50 text-gray-100'
//                   }`}>
//                   {/* Main session area as a div with button-like styling */}
//                   <div
//                     onClick={() => handleSessionClick(session.id)}
//                     className="flex items-center flex-1 py-2 px-3 cursor-pointer"
//                   >
//                     <MessageSquare size={16} className="mr-2 flex-shrink-0 text-gray-300" />
//                     <span className="truncate flex-1">{session.session_title || 'New Chat'}</span>
//                   </div>

//                   {/* Separate more options button */}
//                   {hoveredSession === session.id && (
//                     <button
//                       ref={openMenu === session.id ? buttonRef : null}
//                       onClick={(e) => handleDotClick(e, session.id)}
//                       className="p-1 mx-2 rounded-full hover:bg-blue-400/50 cursor-pointer flex-shrink-0"
//                     >
//                       <MoreVertical size={16} className="text-gray-300" />
//                     </button>
//                   )}
//                 </div>

//                 {/* Menu dropdown */}
//                 {openMenu === session.id && (
//                   <div
//                     ref={menuRef}
//                     className="absolute right-2 top-full mt-1 w-36 bg-white text-gray-900 rounded shadow-lg z-10 border border-gray-300"
//                   >
//                     <button className="w-full flex items-center px-4 py-2 hover:bg-blue-200 cursor-pointer">
//                       <Share2 size={16} className="mr-2 text-gray-500" />
//                       Share Chat
//                     </button>
//                     <button
//                       onClick={(e) => handleDeleteChat(e, session.id)}
//                       className="w-full flex items-center px-4 py-2 hover:bg-red-100 hover:text-red-600 cursor-pointer"
//                     >
//                       <Trash2 size={16} className="mr-2 text-red-500" />
//                       Delete Chat
//                     </button>
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </>
//       )}
//     </div>

//   );
// };

// export default React.memo(NavItems);


// import React, { useState, useRef, useEffect } from 'react';
// import { MessageSquare, MoreVertical, Plus, Trash2, Share2 } from 'lucide-react';
// import { useChatService } from '../../../hooks/use-chatservice';
// import api from '../../../utils/api';

// interface ChatSession {
//   id: number;
//   user: number;
//   started_at: string;
//   ended_at: string | null;
//   session_title: string;
// }

// interface NavItemsProps {
//   category: {
//     name: string;
//     items: unknown[];
//   };
//   chatSessionId?: number | null;
//   onChatClicked?: (id: number) => void;
// }

// const NavItems: React.FC<NavItemsProps> = ({ category, chatSessionId, onChatClicked }) => {
//   const { sessions, createNewSession, setSessionId, loadSessions } = useChatService();

//   const [hoveredSession, setHoveredSession] = useState<number | null>(null);
//   const [openMenu, setOpenMenu] = useState<number | null>(null);
//   const menuRef = useRef<HTMLDivElement>(null);
//   const buttonRef = useRef<HTMLButtonElement>(null);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       // Check if click is outside both the menu and the button
//       if (
//         openMenu !== null &&
//         (!menuRef.current?.contains(event.target as Node) &&
//           !buttonRef.current?.contains(event.target as Node))
//       ) {
//         setOpenMenu(null);
//       }
//     };

//     // Add event listener only when a menu is open
//     if (openMenu !== null) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [openMenu]);

//   const formatDate = (dateString: string): string => {
//     const date = new Date(dateString);
//     const today = new Date();
//     const yesterday = new Date(today);
//     yesterday.setDate(yesterday.getDate() - 1);

//     if (date.toDateString() === today.toDateString()) {
//       return 'Today';
//     } else if (date.toDateString() === yesterday.toDateString()) {
//       return 'Yesterday';
//     } else if (date >= new Date(today.setDate(today.getDate() - 7))) {
//       return 'Past Week';
//     } else {
//       return 'Previous';
//     }
//   };

//   const getSessionsByCategory = (categoryName: string): ChatSession[] => {
//     // Filter sessions by category name
//     const filteredSessions = sessions.filter(session => formatDate(session.started_at) === categoryName);

//     // Sort sessions by started_at date (newest first)
//     return filteredSessions.sort((a, b) =>
//       new Date(b.started_at).getTime() - new Date(a.started_at).getTime()
//     );
//   };

//   const categorySessions = getSessionsByCategory(category.name);

//   const handleSessionClick = (sessionID: number) => {
//     setSessionId(sessionID);
//     if (onChatClicked) {
//       onChatClicked(sessionID);
//     }
//   };

//   const handleNewChat = async () => {
//     const newSessionId = await createNewSession();
//     if (newSessionId && onChatClicked) {
//       onChatClicked(newSessionId);
//     }
//   };

//   const handleDeleteChat = async (
//     e: React.MouseEvent<HTMLButtonElement>,
//     sessionId: number
//   ) => {
//     e.preventDefault();
//     try {
//       const response = await api.delete(`/api/users/chat-sessions/${sessionId}/`);
//       if (response.status === 200 || response.status === 204) {
//         console.log("Chat deleted successfully");
//         // Close the menu
//         setOpenMenu(null);
//         // Refresh the sessions list
//         await loadSessions();

//         // If the deleted session was the active one, create a new chat
//         // if (sessionId === chatSessionId) {
//         //   handleNewChat();
//         // }
//       } else {
//         console.error("Failed to delete chat:", response);
//       }
//     } catch (error) {
//       console.error("Error deleting chat:", error);
//     }
//   };

//   // Toggle menu with separate function for each session
//   const handleDotClick = (e: React.MouseEvent, sessionID: number) => {
//     e.stopPropagation();
//     if (openMenu === sessionID) {
//       setOpenMenu(null); // Close if already open
//     } else {
//       setOpenMenu(sessionID); // Open if closed
//     }
//   };

//   if (categorySessions.length === 0 && category.name !== 'Today') {
//     return null;
//   }

//   return (
//     <div className="mb-4">
//       {category.name === 'Today' && (
//         <button
//           onClick={handleNewChat}
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mb-3 flex items-center justify-center"
//         >
//           <Plus size={16} className="mr-2" />
//           New Chat
//         </button>
//       )}

//       {categorySessions.length > 0 && (
//         <>
//           <h2 className="text-blue-300 text-xs uppercase font-semibold mb-2 px-2">
//             {category.name}
//           </h2>
//           <ul>
//             {categorySessions.map((session) => (
//               <li
//                 key={session.id}
//                 className="relative"
//                 onMouseEnter={() => setHoveredSession(session.id)}
//                 onMouseLeave={() => setHoveredSession(null)}
//               >
//                 {/* Main session button */}
//                 <div className="flex items-center w-full">
//                   <button
//                     onClick={() => handleSessionClick(session.id)}
//                     className={`flex-grow text-left py-2 px-3 rounded-lg flex items-center ${chatSessionId === session.id ? 'bg-blue-700 text-white' : 'hover:bg-blue-600/50 text-gray-100'
//                       }`}
//                   >
//                     <div className="flex items-center flex-1 min-w-0">
//                       <MessageSquare size={16} className="mr-2 flex-shrink-0 text-gray-300" />
//                       <span className="truncate flex-1">{session.session_title || 'New Chat'}</span>
//                     </div>
//                   </button>

//                   {/* Separate more options button */}
//                   {hoveredSession === session.id && (
//                     <button
//                       ref={openMenu === session.id ? buttonRef : null}
//                       onClick={(e) => handleDotClick(e, session.id)}
//                       className="p-1 rounded-full hover:bg-blue-400/50 cursor-pointer flex-shrink-0 ml-2 mr-1"
//                     >
//                       <MoreVertical size={16} className="text-gray-300" />
//                     </button>
//                   )}
//                 </div>

//                 {/* Menu dropdown */}
//                 {openMenu === session.id && (
//                   <div
//                     ref={menuRef}
//                     className="absolute right-2 top-full mt-1 w-36 bg-white text-gray-900 rounded shadow-lg z-10 border border-gray-300"
//                   >
//                     <button className="w-full flex items-center px-4 py-2 hover:bg-blue-200 cursor-pointer">
//                       <Share2 size={16} className="mr-2 text-gray-500" />
//                       Share Chat
//                     </button>
//                     <button onClick={(e) => handleDeleteChat(e, session.id)} className="w-full flex items-center px-4 py-2 hover:bg-red-100 hover:text-red-600 cursor-pointer">
//                       <Trash2 size={16} className="mr-2 text-red-500" />
//                       Delete Chat
//                     </button>
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </>
//       )}
//     </div>
//   );
// };

// export default React.memo(NavItems);