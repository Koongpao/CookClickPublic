import React, { useState, useEffect } from "react"
import { SearchAdvance } from "../script/controller"
import MCard from "../components/MCard"

const SearchRef = () => {
  const token = JSON.parse(localStorage.getItem("token"))
  const [Menulist, setMenulist] = useState([])
  const [ignore, setignore] = useState(false)
  useEffect(() => {
    async function fetchdata(token) {
      const d = await SearchAdvance(token)
      console.log(d.menu)
      setMenulist(d.menu)
    }
    if (!ignore) {
      fetchdata(token)
    }
    return () => {
      setignore(true)
    }
  })

  function shortenDesc(desc) {
  if(desc.length > 165){
    return desc.substring(0,165) + "......";
  }else{
    return desc;
  }
}
  return (
    <>
      <div className="flex flex-col align-items-center">
        <h1 className="text-center">ค้นหาสูตรอาหารจากวัตถุดิบในตู้เย็น</h1>
        <div className="common-home flex flex-col width-100 collapse show">
          {Menulist.map((food, index) => {
            return (
              <MCard
                key={index}
                FoodName={food.name}
                FoodImg={food.image}
                Star={food.rating}
                Fav={food.favCount}
                Desc={shortenDesc(food.description)}
                MenuID={food.menuID}
                UserID={food.userID}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default SearchRef
