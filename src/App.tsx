import Login from "./pages/login"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import SignUp from "./pages/sign-up"
import ChatLayout from "./pages/chat/chat-layout"

function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/chat" element={<ChatLayout />} />
      </Routes>
    </>
  )
}

export default App
