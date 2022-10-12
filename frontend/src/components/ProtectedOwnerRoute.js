import { Navigate, useParams } from "react-router-dom"
import { decodeToken } from "react-jwt"

const ProtectedOwnerRoute = ({ children }) => {
  const { uid } = useParams()
  const token = JSON.parse(localStorage.getItem("token"))
  if (token === null) {
    return <Navigate to="/login" />
  }
  const UserData = decodeToken(token)
  console.log(UserData.userID)
  if (uid === UserData.userID) {
    return children
  } else {
    return <Navigate to="/add" />
  }
}

export default ProtectedOwnerRoute
