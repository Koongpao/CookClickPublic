import { Navigate } from "react-router-dom"
import { Auth } from "../script/Auth"

const ProtectedRoute = ({ children }) => {
  const isAuth = Auth()
  if (isAuth) {
    return children
  }
  else {
    return <Navigate to="/login" />
  }
}

export default ProtectedRoute