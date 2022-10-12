import React, { useState, useEffect } from "react"
import MCard from "../components/MCard"
import { GetAllMeMenuStatus } from "../script/controller"

function Myfav() {
  const [ignore, setignore] = useState(false)
  const [favmenu, setfavmenu] = useState([])
  useEffect(() => {
    async function fetchdata(token) {
      const allmenu = await GetAllMeMenuStatus(token)
      setfavmenu(allmenu.data)
    }
    if (!ignore) {
      let token = JSON.parse(localStorage.getItem("token"))
      fetchdata(token)
    }
    return () => {
      setignore(true)
    }
  })

  return (
    <>
      <div className="flex flex-col align-items-center">
        <h1>สูตรอาหารที่ฉันชื่นชอบ</h1>
        <div className="common-home flex flex-col align-items-center">
          <div className="flex flex-col width-100">
            {favmenu.map((food, index) => {
              return (
                <MCard key={index} FoodName={food.name} FoodImg={food.image} />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
export default Myfav
