import "./App.css"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import SignUp from "./pages/SignUp"
import Search from "./pages/Search"
import SearchRef from "./pages/SearchRef"
import Add from "./pages/Add"
import Ref from "./pages/Ref"
import Test from "./pages/Test"
import MenuId from "./pages/MenuId"
import Dashboard from "./pages/Staff/Dashboard"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"
import { AuthProvider } from "./script/useAuth"
import { useState, useEffect } from "react"

import StaffLogin from "./pages/Staff/StaffLogin"

//* Non logged-in users cannot access ProtectedRoute pages

function App() {
  const [login, setlogin] = useState(false)
  const [ignore, setignore] = useState(false)
  if (!ignore) {
    let token = JSON.parse(localStorage.getItem("token"))
    if (token === null) {
      setlogin(false)
    } else {
      setlogin(true)
    }
    setignore(true)
  }

  return (
    <>
      <Router>
        <AuthProvider>
          {login && <Navbar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/searchref" element={<SearchRef />} />
            <Route path="/add" element={<Add />} />
            <Route
              path="/login"
              element={<Login onchangelogin={setignore} />}
            />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/ref" element={<Ref />} />
            <Route path="/MenuId" element={<MenuId />} />
            <Route
              path="/test"
              element={
                <ProtectedRoute>
                  <Test />
                </ProtectedRoute>
              }
            />
            <Route path="/staff/dashboard" element={<Dashboard />} />
            <Route path="/staff/login" element={<StaffLogin />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App
