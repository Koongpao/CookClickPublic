import { useAuth } from "../script/useAuth"
import NewIngredients from "../script/NewIngredients";

const Test = () => {
  const { logout, userData } = useAuth()
  return (
    <div className="flex justify-content-center">
      <div className="formbox p-3">
        <h1>Test</h1>
        {/* <GetImg /> */}
        <button onClick={logout}>Test Logout</button>
        <button onClick={ () => console.log(userData) }>Data</button>
        <NewIngredients />
      </div>
    </div>
  )
}

export default Test;