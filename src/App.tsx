import React, { useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import ChatLayout from "./pages/chat/chat-layout";
import "./App.css";

// Protected route component that checks authentication
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem("rememberMe") === "true";

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  return children;
};

function App() {
  const navigate = useNavigate();

  // Check authentication on initial load
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("rememberMe") === "true";
    const currentPath = window.location.pathname;

    // If user is not authenticated and not on login or signup pages, redirect to login
    if (!isAuthenticated && !["/login", "/sign-up"].includes(currentPath)) {
      navigate("/login");
    }
  }, [navigate]);

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
      </Routes>
    </>
  );
}

export default App;