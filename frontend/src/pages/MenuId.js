import { useEffect, useState } from "react"
import "./MenuId.css"
import MenuIngItem from "../components/MenuIdPage/MenuIngItem.js"
import MenuStepsItem from "../components/MenuIdPage/MenuStepsItem.js"
import MenuCommentItem from "../components/MenuIdPage/MenuCommentItem"
import {
  GetMenuInfo,
  GetSystemIngredient,
  GetSystemKitchenware,
} from "../script/controller"
import { useParams } from "react-router-dom"

const MenuPage = () => {
  const [menuDetails, setMenuDetails] = useState({
    name: "",
    image: "",
    description: "",
    ingredient: [],
    kitchenware: [],
    cookingstep: [],
    comment: [],
  })

  const { mid } = useParams()
  useEffect(() => {
    const FetchData = async () => {
      const ingFullData = await GetSystemIngredient()
      const wareFullData = await GetSystemKitchenware()
      const menuInfo = await GetMenuInfo(mid)
      console.log(menuInfo)
      menuInfo.query[0].image = "https://cookclick.code.in.th/images/".concat(
        menuInfo.query[0].image
      )
      for (let i = 0; i < menuInfo.query[0].cookingstep.length; i++) {
        if (menuInfo.query[0].cookingstep[i].image) {
          menuInfo.query[0].cookingstep[i].image =
            "https://cookclick.code.in.th/images/".concat(
              menuInfo.query[0].cookingstep[i].image
            )
        }
      }

      setMenuDetails(menuInfo.query[0])
      const menuIngredients = menuInfo.query[0].ingredient.map((ing) => ({
        ...ingFullData.data.find((ingFull) => ingFull._id === ing.ingredientID),
        amount: ing.amount,
      }))
      const menuKitchenware = menuInfo.query[0].kitchenware.map((ware) => ({
        ...wareFullData.data.find(
          (wareFull) => wareFull._id === ware.kitchenwareID
        ),
      }))
      console.log(menuInfo.query[0])
      setMenuDetails((prev) => ({
        ...prev,
        ingredient: menuIngredients,
        kitchenware: menuKitchenware,
      }))
      ingFullData.data.forEach((element, i) => {
        element.id = i
        element.amount = 0
      })
      wareFullData.data.forEach((element, i) => {
        element.id = i
      })
    }
    FetchData()
  }, [])

  return (
    <div className="menupage">
      <div className="menu-img">
        <img src={menuDetails.image} alt="testburger"></img>
      </div>
      <div className="menu-desc">
        <h1 className="menu-header">{menuDetails.name}</h1>
        <div>By: {menuDetails.userDisplayName}</div>
        {menuDetails.description}
      </div>
      <div className="menu-ing-list">
        <h1>ส่วนผสม</h1>
        {menuDetails.ingredient.map((eachIng, index) => (
          <div key={index}>
            <MenuIngItem
              name={eachIng.name}
              amount={eachIng.amount}
              unit={eachIng.unit}
            />
          </div>
        ))}
        <h1 className="pt-4">อุปกรณ์</h1>
        {menuDetails.kitchenware.map((eachWare, index) => (
          <div key={index}>
            <MenuIngItem name={eachWare.name} />
          </div>
        ))}
      </div>
      <div className="menu-steps-list">
        <div className="menu-steps-head">
          <h1>ขั้นตอนการทำ</h1>
        </div>
        {menuDetails.cookingstep.map((eachSteps) => (
          <MenuStepsItem
            img={eachSteps.image}
            desc={eachSteps.description}
            index={eachSteps.index + 1}
            key={eachSteps.index}
          />
        ))}
      </div>
      <h1 className="mt-5">Comments</h1>
      {menuDetails.comment.map((eachComment, id) => (
        <div className="menu-comments-list">
          <h4 key={id}>{eachComment.userID}</h4>
          <p>{eachComment.description}</p>
        </div>
      ))}
    </div>
  )
}

export default MenuPage
