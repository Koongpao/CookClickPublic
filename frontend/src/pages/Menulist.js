import React, { useState, useEffect } from "react"
import Button from "react-bootstrap/Button"
import Collapse from "react-bootstrap/Collapse"
import MCard from "../components/MCard"
import { GetAllMeMenuStatus } from "../script/controller"

function Menulist() {
  const [foods, setfoods] = useState([])
  const [ignore, setignore] = useState(false)
  useEffect(() => {
    async function fetchdata(token) {
      const allmenu = await GetAllMeMenuStatus(token)
      console.log(allmenu)
      setfoods(allmenu.data)
    }
    if (!ignore) {
      let token = JSON.parse(localStorage.getItem("token"))
      fetchdata(token)
    }
    return () => {
      setignore(true)
    }
  })
  const [open0, setOpen0] = useState(true)
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const callToActionBtns = document.querySelectorAll(".featurebutton")

  callToActionBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      callToActionBtns.forEach((f) => f.classList.remove("feature-active"))
      e.target.classList.toggle("feature-active")
    })
  })

  return (
    <>
      <div className="flex flex-col align-items-center">
        <h1>สูตรอาหารของคุณ</h1>
        <div className="common-home flex justify-content-evenly">
          <Button
            className="featurebutton feature-active shadow-none"
            onClick={() => {
              setOpen0(true)
              setOpen1(false)
              setOpen2(false)
              setOpen3(false)
            }}
            aria-controls="today-collapse-text"
            aria-expanded={open0}
          >
            เผยแพร่แล้ว
          </Button>
          <Button
            className="featurebutton shadow-none"
            onClick={() => {
              setOpen0(false)
              setOpen1(true)
              setOpen2(false)
              setOpen3(false)
            }}
            aria-controls="week-collapse-text"
            aria-expanded={open1}
          >
            รออนุมัติ
          </Button>
          <Button
            className="featurebutton shadow-none"
            onClick={() => {
              setOpen0(false)
              setOpen1(false)
              setOpen2(true)
              setOpen3(false)
            }}
            aria-controls="month-collapse-text"
            aria-expanded={open2}
          >
            แบบร่าง
          </Button>
          <Button
            className="featurebutton shadow-none"
            onClick={() => {
              setOpen0(false)
              setOpen1(false)
              setOpen2(false)
              setOpen3(true)
            }}
            aria-controls="month-collapse-text"
            aria-expanded={open3}
          >
            ถูกปฏิเสธ
          </Button>
        </div>
        <div className="common-home flex flex-col align-items-center">
          <Collapse in={open0}>
            <div className="flex flex-col width-100" id="today-collapse-text">
              {foods.map((food, index) => {
                return (
                  <MCard
                    key={index}
                    FoodName={food.name}
                    FoodImg={food.image}
                    Star={food.rating}
                    Fav={food.favCount}
                  />
                )
              })}
            </div>
          </Collapse>
          <Collapse in={open1}>
            <div className="flex flex-col width-100" id="week-collapse-text">
              {foods.map((food, index) => {
                return (
                  <MCard
                    key={index}
                    FoodName={food.name}
                    FoodImg={food.image}
                  />
                )
              })}
            </div>
          </Collapse>
          <Collapse in={open2}>
            <div className="flex flex-col width-100" id="month-collapse-text">
              {foods.map((food, index) => {
                return (
                  <MCard
                    key={index}
                    FoodName={food.name}
                    FoodImg={food.image}
                  />
                )
              })}
            </div>
          </Collapse>
          <Collapse in={open3}>
            <div className="flex flex-col width-100" id="month-collapse-text">
              {foods.map((food, index) => {
                return (
                  <MCard
                    key={index}
                    FoodName={food.name}
                    FoodImg={food.image}
                  />
                )
              })}
            </div>
          </Collapse>
        </div>
      </div>
    </>
  )
}
export default Menulist
