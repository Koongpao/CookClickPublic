import { Navigate } from "react-router-dom"
import { useAuth } from "../script/useAuth"

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth()
  if (token !== null) {
    return children
  }
  else {
    return <Navigate to="/login" />
  }
}

export default ProtectedRoute