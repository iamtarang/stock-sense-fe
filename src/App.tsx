<<<<<<< HEAD
import React, { useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import ChatLayout from "./pages/chat/chat-layout";
import "./App.css";
import { useCookies } from "react-cookie";

// Protected route component that checks authentication
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {

  const [cookies] = useCookies(['access_token']);
  const savedToken = cookies?.access_token;

  if (!savedToken) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  return children;
};
=======
import Login from "./pages/login"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import SignUp from "./pages/sign-up"
import ChatLayout from "./pages/chat/chat-layout"
import Speech from "./pages/Speech"
>>>>>>> origin/feature/chat-enhancement

function App() {
  const navigate = useNavigate();
  const [cookies] = useCookies(['access_token']);

  // Check authentication on initial load
  useEffect(() => {
    const isAuthenticated = !!cookies.access_token;
    const currentPath = window.location.pathname;

    // If user is not authenticated and not on login or signup pages, redirect to login
    if (!isAuthenticated && !["/login", "/sign-up"].includes(currentPath)) {
      navigate("/login");
    }
  }, [navigate, cookies.access_token]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            localStorage.getItem("rememberMe") === "true" ?
              <Navigate to="/chat" replace /> :
              <Login />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
<<<<<<< HEAD
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <ChatLayout />
            </ProtectedRoute>
          }
        />
        {/* Add any other protected routes here */}
        <Route
          path="*"
          element={
            <ProtectedRoute>
              <Navigate to="/chat" replace />
            </ProtectedRoute>
          }
        />
=======
        <Route path="/chat" element={<ChatLayout />} />
        <Route path="/speech" element={<Speech/>} />
>>>>>>> origin/feature/chat-enhancement
      </Routes>
    </>
  );
}

export default App;