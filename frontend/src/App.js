import "./App.css"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Gnavbar from "./components/Gnavbar"
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
import { useState } from "react"
import { decodeToken } from "react-jwt"
import StaffLogin from "./pages/Staff/StaffLogin"
import Staffbar from "./components/Staffbar"

//* Non logged-in users cannot access ProtectedRoute pages

function App() {
  const [login, setlogin] = useState(0)
  const [ignore, setignore] = useState(false)
  const [udata, setudata] = useState()
  if (!ignore) {
    let token = JSON.parse(localStorage.getItem("token"))
    let UserData = decodeToken(token)
    setudata(UserData)
    let role = 0
    // console.log(UserData)
    if (token === null) {
      role = 0
    } else {
      role = UserData.role
    }
    setlogin(role)
    setignore(true)
  }

  return (
    <>
      <Router>
        <AuthProvider>
          {login === 0 && <Gnavbar />}
          {login === 1 && <Navbar user={udata} onchangelogout={setignore} />}
          {login === 3 && <Staffbar user={udata} onchangelogout={setignore} />}
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
