import { useState } from "react"
import {
  GetAllIngredient,
  GetAllKitchenware,
  GetMemberCategory,
  NewIngredient,
  NewKitchenware,
  NewMenu,
  PublishMenu,
  AddIngredient,
  AddKitchenware,
  GetMemberIngredientKitchenware,
  AddMenuComment,
} from "./controller"

const NewIngredients = () => {
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwidXNlcklEIjoiNjMxNGE2M2ViOTQ0MGE2NWQ1M2FmZGExIiwicm9sZSI6MywiaWF0IjoxNjYyMzYwOTU3fQ.wCPQsdnuNFiEBLgwiK4IukbhrLa44yxn0QeornuGo44"
  )

  const [ingredient, setIngredient] = useState({
    name: "Horseshoe Crab",
    unit: "ขีด",
    categoryID: "63148bc17afa87e2439351d4",
  })

  const [kitchenware, setKitchenware] = useState({
    name: "หม้อ",
  })

  const [menu, setMenu] = useState({
    name: "Test publish!",
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
    status: 1,
  })

  const [oldIngredient, setOldIngredient] = useState({
    ingredientID: "63148ecc1fd415225d9d18e4",
    amount: 500,
  })

  const [oldKitchenware, setOldKitchenware] = useState({
    kitchenwareID: "63148f8a1fd415225d9d18fe",
  })

  const [comment, setComment] = useState({
    description: "test comment",
  })

  const handleClicked = async (e) => {
    e.preventDefault()
    // const ingredientData = await GetAllIngredient(token);
    // const kitchenwareData = await GetAllKitchenware(token);
    // const categoryData = await GetMemberCategory(token);

    // const newIngredient = await NewIngredient(token, ingredient);
    // const newKitchenware = await NewKitchenware(token, kitchenware);
    // const newMenu = await NewMenu(token, menu);
    //! publishMenu Unusable
    const publishMenu = await PublishMenu(
      token,
      menu,
      "63149bae255e1b5eb3ae4fe0"
    )
    // const addIngredient = await AddIngredient(token, oldIngredient);
    // const getMemberIngredientKitchenware = await GetMemberIngredientKitchenware(token);
    // const addKitchenware = await AddKitchenware(token, oldKitchenware);
    // const addMenuComment = await AddMenuComment(token, comment, "6314b70ae9a619699460af9b");

    console.log(publishMenu)
  }

  return (
    <div>
      <button onClick={handleClicked}>TEST</button>
    </div>
  )
}

export default NewIngredients
