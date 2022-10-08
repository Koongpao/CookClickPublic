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
import Protectedlogin from "./components/Protectedlogin"
import ProtectedStaffRoute from "./components/ProtectedStaffRoute"
import { AuthProvider } from "./script/useAuth"
import Approve from "./pages/Staff/Approve"
import User from "./pages/Staff/User"
import { useState } from "react"
import { decodeToken } from "react-jwt"
import Staffbar from "./components/Staffbar"
import Menulist from "./pages/Menulist"
import Myfav from "./pages/Myfav"
import Report from "./pages/Staff/Report"
import StaffLogin from "./pages/Staff/StaffLogin"

//test modal
import ReportUserModal from "./components/Report/Modal/ReportUser"
import ReportCommentModal from "./components/Report/Modal/ReportComment"
import ReportMenuModal from "./components/Report/Modal/ReportMenu"
import DeleteUserModal from "./components/Report/Modal/DeleteUser"
import DeleteCommentModal from "./components/Report/Modal/DeleteComment"
import DeleteMenuModal from "./components/Report/Modal/DeleteMenu"

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
          {login >= 2 && <Staffbar user={udata} onchangelogout={setignore} />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route
              path="/searchref"
              element={
                <ProtectedRoute>
                  <SearchRef />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add"
              element={
                <ProtectedRoute>
                  <Add />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <Protectedlogin>
                  <Login onchangelogin={setignore} />
                </Protectedlogin>
              }
            />
            <Route
              path="/sign-up"
              element={
                <Protectedlogin>
                  <SignUp />
                </Protectedlogin>
              }
            />
            <Route
              path="/ref"
              element={
                <ProtectedRoute>
                  <Ref />
                </ProtectedRoute>
              }
            />
            <Route path="/MenuId" element={<MenuId />} />
            <Route
              path="/test"
              element={
                <ProtectedRoute>
                  <Test />
                </ProtectedRoute>
              }
            />

            <Route
              path="/Mymenu"
              element={
                <ProtectedRoute>
                  <Menulist />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Myfav"
              element={
                <ProtectedRoute>
                  <Myfav />
                </ProtectedRoute>
              }
            />
            <Route path="/staff/login" element={<StaffLogin />} />
            <Route
              path="/staff/dashboard"
              element={
                <ProtectedStaffRoute>
                  <Dashboard />
                </ProtectedStaffRoute>
              }
            />
            {/* <Route path="/staff/dashboard" element={<Dashboard />} /> */}
            <Route
              path="/staff/approve"
              element={
                <ProtectedStaffRoute>
                  <Approve />
                </ProtectedStaffRoute>
              }
            />
            <Route
              path="/staff/User"
              element={
                <ProtectedStaffRoute>
                  <User />
                </ProtectedStaffRoute>
              }
            />
            <Route
              path="/staff/Report"
              element={
                <ProtectedStaffRoute>
                  <Report />
                </ProtectedStaffRoute>
              }
            />
            <Route
              path="/staff/testmodal"
              element={
                <>
                  <ReportUserModal />
                  <ReportCommentModal />
                  <ReportMenuModal />
                </>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App
