import React from "react"
import "./MenuId.css"
import MenuIngItem from "../components/MenuIdPage/MenuIngItem.js"
import MenuStepsItem from "../components/MenuIdPage/MenuStepsItem.js"
import MenuCommentItem from "../components/MenuIdPage/MenuCommentItem"
import Burger from "../img/testburger.jpg"
import { GetSystemIngredient, GetSystemKitchenware } from "../script/controller"

const MenuPage = () => {
  // const [menuDetails, setMenuDetails] = React.useState({
  //   name: "",
  //   image: "",
  //   description: "",
  //   ingredient: [],
  //   kitchenware: [],
  //   cookingstep: [],
  // })
  const [menuDetails, setMenuDetails] = React.useState({
    name: "กะเพราโบราณ เผ็ดนรกแตก!",
    image:
      "https://img.wongnai.com/p/1968x0/2017/10/03/31f75dab7dbc494c967b10284ba3dd6b.jpg",
    description:
      "เมนูผัดกะเพราตำรับโบราณ รสชาติเผ็ดจัดจ้านเข้มข้น หอมเครื่องเทศ หอมสมุนไพร ทำง่าย ต้องลอง",
    ingredient: [
      { ingredientID: "63148ecc1fd415225d9d18e4", amount: 3 },
      { ingredientID: "63148ee61fd415225d9d18e7", amount: 4 },
      { ingredientID: "63148ef01fd415225d9d18ea", amount: 2 },
      { ingredientID: "63148f011fd415225d9d18ed", amount: 4 },
      { ingredientID: "63148f101fd415225d9d18f0", amount: 1 },
      { ingredientID: "63148f341fd415225d9d18f3", amount: 1 },
      { ingredientID: "63148f401fd415225d9d18f6", amount: 1 },
      { ingredientID: "63148f4a1fd415225d9d18f9", amount: 1 },
    ],
    kitchenware: [{ kitchenwareID: "63148f8a1fd415225d9d18fe" }],
    cookingstep: [
      {
        index: 0,
        description: "ตำพริกแห้งกับตะไคร้ซอยด้วยกัน ตำจนละเอียดแล้วพักไว้",
        image:
          "https://img.wongnai.com/p/400x0/2017/10/03/23c831f515364df08c809cabff9b0093.jpg",
      },
      {
        index: 1,
        description: "สับกระเทียมหยาบ ๆ ตั้งน้ำมัน",
        image:
          "https://img.wongnai.com/p/400x0/2017/10/03/8ca6dc0e881149a3852ee0b67c81f1ab.jpg",
      },
      {
        index: 2,
        description:
          "ใส่หมูสับ ผัดให้เข้ากัน ใส่เครื่องปรุง น้ำตาล ซีอิ๊วขาว ผัดจนเข้าที่ แล้วใส่ พริกแห้งกับตะไคร้ที่ตำไว้ ผัดจนหอม",
        image:
          "https://img.wongnai.com/p/400x0/2017/10/03/dd0ecfa7e29c41d38dbda5c01ea25764.jpg",
      },
      {
        index: 3,
        description:
          "ใส่ใบกะเพรา ตามด้วยซีอิ๊วดำเล็กน้อย ผัดจนเข้ากัน พร้อมเสิร์ฟ",
      },
    ],
  })
  const [ingIdList, setIngIdList] = React.useState([])
  const mytoken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFhYUBhYWEuYWFhIiwidXNlcklEIjoiNjMxYzI3ODFhNDM4NjM0ZWUwZWMwYmZjIiwicm9sZSI6MSwiaWF0IjoxNjYyODEwOTY3fQ.fYd8O3wm-kXTczREl9Cr2J55uvxdtCTlC258l0jLj5c"

  const [menuDetails2, setMenuDetails2] = React.useState([])
  function mapIdtoName(data) {
    let l = menuDetails.ingredient.length
    let ingdetail = []
    for (let j = 0; j < l; j++) {
      for (let i = 0; i < data.length; i++) {
        if (menuDetails.ingredient[j].ingredientID === data[i]._id) {
          const newmenudetail = {
            name: data[i].name,
            amount: menuDetails.ingredient[j].amount,
            id: data[i].id,
          }
          ingdetail.push(newmenudetail)
        }
      }
    }
    setMenuDetails2(ingdetail)
  }

  const ingAlreadyDisplayed = React.useRef(false)
  React.useEffect(() => {
    if (ingAlreadyDisplayed.current) return
    ingAlreadyDisplayed.current = true
    async function fetchdata() {
      const ingfulldata = await GetSystemIngredient(mytoken)
      const warefulldata = await GetSystemKitchenware(mytoken)
      let i = 0
      ingfulldata.data.forEach((element) => {
        element.id = i
        i += 1
        element.amount = 0
      })
      i = 0
      warefulldata.data.forEach((element) => {
        element.id = i
        i += 1
      })
      mapIdtoName(ingfulldata.data)
    }
    fetchdata()
  }, [])

  return (
    <div className="menupage">
      <div className="menu-img">
        <img src={menuDetails.image} alt="testburger"></img>
      </div>
      <div className="menu-desc">
        <h1 className="menu-header">{menuDetails.name}</h1>
        {menuDetails.description}
      </div>
      <div className="menu-ing-list">
        <h1>ส่วนผสม</h1>
        {menuDetails2.map((eachIng) => (
          <div key={eachIng.id}>
            <MenuIngItem
              name={eachIng.name}
              amount={eachIng.amount}
              id={eachIng.id}
            />
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
        <MenuStepsItem img={Burger} index={"TEST"}></MenuStepsItem>
      </div>
      <div className="menu-comments-list">
        <MenuCommentItem comment="Comment Test" />
        <MenuCommentItem comment="Comment Test" />
        <MenuCommentItem comment="Comment Test" />
        <MenuCommentItem comment="Comment Test" />
      </div>
    </div>
  )
}

export default MenuPage
