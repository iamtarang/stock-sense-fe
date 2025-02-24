import Login from "./pages/login"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import SignUp from "./pages/sign-up"

function App() {

  return (
    <>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
    </>
  )
}

export default App
