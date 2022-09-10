import GetImg from "../components/GetImg";
import { useAuth } from "../script/useAuth"
import NewIngredients from "../script/NewIngredients";

const Test = () => {
  const { logout } = useAuth()
  return (
    <div>
      <h1>Test</h1>
      {/* <GetImg /> */}
      <button onClick={logout}>Test Logout</button>
      <NewIngredients />
    </div>
  )
}

export default Test;