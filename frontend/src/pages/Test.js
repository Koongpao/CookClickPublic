import NewUser from "../script/NewUser"
import NewLogin from "../script/NewLogin";
import GetImg from "../components/GetImg";
import { useAuth } from "../script/useAuth"

const Test = () => {
  const { logout } = useAuth()
  return (
    <div>
      <h1>Test</h1>
      <NewUser />
      <NewLogin />
      {/* <GetImg /> */}
      <button onClick={logout}>Test Logout</button>
    </div>
  )
}

export default Test;