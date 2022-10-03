import { useAuth } from "../script/useAuth"

const Test = () => {
  const { logout } = useAuth()
  return (
    <div className="flex justify-content-center">
      <div className="formbox p-3">
        <h1>Test</h1>
        {/* <GetImg /> */}
        <button onClick={logout}>Test Logout</button>
      </div>
    </div>
  )
}

export default Test;