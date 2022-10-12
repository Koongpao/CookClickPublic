import { useParams } from "react-router-dom"
import { GetMenuInfo, GetSystemIngredient, GetSystemKitchenware } from "../script/controller"
import { useEffect, useState } from "react"
import React from "react"

const Menu = () => {
  const { menuId } = useParams()
  const [loading, setLoading] = useState(true)
  const [menuData, setMenuData] = useState()
  const [ingredientData, setIngredientData] = useState()
  useEffect(() => {
    const getMenuData = async () => {
      try {
        const data = await GetMenuInfo(menuId)
        setMenuData(data.query[0])
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getMenuData()
  }, [])

  const GetIngredientsName = async ( ingredients ) => {
    const systemIngredients = await GetSystemIngredient()
    const ingredientsName = ingredients.map((ingredient) => {
      const ingredientData = systemIngredients.data.filter((systemIngredient) => (systemIngredient._id === ingredient.ingredientID))
      return ingredientData[0].name
    })
    console.log(ingredientsName)
  }


  return (
    <>
      {loading && <div>Loading...</div>}
      {menuData && 
        <div>
          <div>{menuData.name}</div>
          <div>{menuData.description}</div>
          {/* <div>{GetIngredientsName(menuData.ingredient).then(
            console.log(ingredientData)
          )}</div> */}
          <button onClick={() => console.log(menuData.ingredient)}>Get Ingredients Name</button>
        </div>
      }
    </>
    
  )
}

export default Menu