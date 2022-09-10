import { Navigate } from "react-router-dom"
import { useAuth } from "../script/useAuth"

const ProtectedRoute = ({ children }) => {
  const isAuth = useAuth()
  if (isAuth) {
    return children
  }
  else {
    return <Navigate to="/login" />
  }
}

export default ProtectedRoute