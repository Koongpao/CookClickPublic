import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Collapse from "react-bootstrap/Collapse"
import MCard from "../components/MCard"

function Home() {
  const [foods] = useState([
    {
      "foodName": "Steak",
      "foodImgURL": "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      "foodName": "Chocolate Cake",
      "foodImgURL": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80"
    }
  ])
  const [open0, setOpen0] = useState(true)
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
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
        <div className="common-home flex justify-content-evenly">
          <Button
            className="featurebutton feature-active shadow-none"
            onClick={() => {
              setOpen0(true)
              setOpen1(false)
              setOpen2(false)
            }}
            aria-controls="today-collapse-text"
            aria-expanded={open0}
          >
            Today
          </Button>
          <Button
            className="featurebutton shadow-none"
            onClick={() => {
              setOpen0(false)
              setOpen1(true)
              setOpen2(false)
            }}
            aria-controls="week-collapse-text"
            aria-expanded={open1}
          >
            Week
          </Button>
          <Button
            className="featurebutton shadow-none"
            onClick={() => {
              setOpen0(false)
              setOpen1(false)
              setOpen2(true)
            }}
            aria-controls="month-collapse-text"
            aria-expanded={open2}
          >
            Month
          </Button>
        </div>
        <div className="common-home flex flex-col align-items-center">
          <Collapse in={open0}>
            <div className="flex flex-col align-items-center width-100" id="today-collapse-text">
              {
                foods.map((food, index) => {
                  return (
                    <MCard key={index} FoodName={food.foodName} FoodImg={food.foodImgURL} />
                  )
                })
              }
            </div>
          </Collapse>
          <Collapse in={open1}>
            <div id="week-collapse-text">
              Week Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </Collapse>
          <Collapse in={open2}>
            <div id="month-collapse-text">
              Month Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </Collapse>
        </div>
      </div>
    </>
  )
}
export default Home
