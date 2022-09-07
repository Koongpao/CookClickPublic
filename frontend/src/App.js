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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/searchref" element={<SearchRef />} />
          <Route path="/add" element={<Add />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/ref" element={<Ref />} />
          <Route path="/MenuId" element={<MenuId/>} />
          <Route path="/test"
            element={
              <ProtectedRoute>
                <Test />
              </ProtectedRoute>
            } />
        </Routes>
      </Router>
    </>
  )
}

export default App
