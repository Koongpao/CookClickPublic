import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
  const isAuth = true
  if (isAuth) {
    return children
  }
  else {
    return <Navigate to="/login" />
  }
}

export default ProtectedRoute