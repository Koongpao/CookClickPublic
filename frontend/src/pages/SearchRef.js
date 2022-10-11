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
      setMenulist(d.menu)
    }
    if (!ignore) {
      fetchdata(token)
    }
    return () => {
      setignore(true)
    }
  })

  return (
    <>
      <div className="flex flex-col align-items-center">
        <h1 className="text-center">ค้นหาสูตรอาหารจากวัตถุดิบในตู้เย็น</h1>
        <div className="common-home flex flex-col align-items-center">
          {Menulist.map((food, index) => {
            return (
              <MCard
                key={index}
                FoodName={food.name}
                FoodImg={food.image}
                Star={food.rating}
                Fav={food.favCount}
                Desc={food.description}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default SearchRef
