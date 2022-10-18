import { useEffect, useState } from "react"
import "./MenuId.css"
import MenuIngItem from "../components/MenuIdPage/MenuIngItem.js"
import MenuStepsItem from "../components/MenuIdPage/MenuStepsItem.js"
import {
  GetMenuInfo,
  GetSystemIngredient,
  GetSystemKitchenware,
  MenuEdit,
} from "../script/controller"
import { useParams } from "react-router-dom"
import { BiFlag } from "react-icons/bi"
import Form from 'react-bootstrap/Form';

const MenuPage = ({ status }) => {
  const [menuDetails, setMenuDetails] = useState({
    _id: "",
    name: "",
    image: "",
    description: "",
    ingredient: [],
    kitchenware: [],
    cookingstep: [],
    comment: [],
  })

  const [comment, setComment] = useState("")

  const token = JSON.parse(localStorage.getItem("token"))
  const { mid } = useParams()
  useEffect(() => {
    const FetchData = async () => {
      const ingFullData = await GetSystemIngredient()
      const wareFullData = await GetSystemKitchenware()
      let menuInfo
      if (!status) {
        menuInfo = await GetMenuInfo(mid)
      } else {
        menuInfo = await MenuEdit(token, mid)
      }

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

  const sendReport = async () => {
    const token = JSON.parse(localStorage.getItem("token"))
  }


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
        <h4>ส่วนผสม</h4>
        {menuDetails.ingredient.map((eachIng, index) => (
          <div key={index}>
            <MenuIngItem
              name={eachIng.name}
              amount={eachIng.amount}
              unit={eachIng.unit}
            />
          </div>
        ))}
        <h4 className="pt-4">อุปกรณ์</h4>
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
        <div className="menu-comments-list" key={id}>
          <div className="flex justify-content-between text-md">
            {eachComment.userID}
            <BiFlag className="hover-pointer" onClick={() => {
              sendReport(menuDetails[id]._id, eachComment.commentID)
            }}/>
          </div>
          <p>{eachComment.description}</p>
        </div>
      ))}
      <Form.Group className="mb-3" controlId="AddDesc">
        <Form.Control
          type="text"
          placeholder="ใส่คำอธิบายของสูตรอาหาร"
          as="textarea"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
      </Form.Group>
    </div>
    )
}

export default MenuPage
