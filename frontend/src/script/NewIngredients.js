import { useState } from "react"
import { GetAllIngredient, GetAllKitchenware } from "./controller"

const NewIngredients = () => {
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InlheWFAdGVzdGVyYS50eCIsInVzZXJJRCI6IjYzMTJmYzIzM2MwMWE0YjBjNzI1NDkyZCIsInJvbGUiOjMsImlhdCI6MTY2MjE4ODYwOX0.152tDb7Dh7SFfsGmfAOzumleQvqvp5CxIiASXgpdAjw"
  )

  const handleClicked = async (e) => {
    e.preventDefault()
    const ingredientsData = await GetAllIngredient(token)
    const kitchenwareData = await GetAllKitchenware(token)
    console.log(ingredientsData.data)
  }

  return (
    <div>
      <button onClick={handleClicked}>TEST</button>
    </div>
  )
}

export default NewIngredients
