import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Collapse from "react-bootstrap/Collapse"

function Home() {
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
      <div className="text-center">
        <div>
          <h3>Featured Recipe</h3>
        </div>
        <div>
          <Button
            className="featurebutton feature-active"
            onClick={() => {
              setOpen0(!open0)
              setOpen1(false)
              setOpen2(false)
            }}
            aria-controls="today-collapse-text"
            aria-expanded={open0}
          >
            Today
          </Button>
          <Button
            className="featurebutton"
            onClick={() => {
              setOpen0(false)
              setOpen1(!open1)
              setOpen2(false)
            }}
            aria-controls="week-collapse-text"
            aria-expanded={open1}
          >
            Week
          </Button>
          <Button
            className="featurebutton"
            onClick={() => {
              setOpen0(false)
              setOpen1(false)
              setOpen2(!open2)
            }}
            aria-controls="month-collapse-text"
            aria-expanded={open2}
          >
            Month
          </Button>
        </div>
        <Collapse in={open0}>
          <div id="today-collapse-text">
            Today Anim pariatur cliche reprehenderit, enim eiusmod high life
            accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica,
            craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
        <Collapse in={open1}>
          <div id="week-collapse-text">
            Week Anim pariatur cliche reprehenderit, enim eiusmod high life
            accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica,
            craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
        <Collapse in={open2}>
          <div id="month-collapse-text">
            Month Anim pariatur cliche reprehenderit, enim eiusmod high life
            accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica,
            craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
      </div>
    </>
  )
}
export default Home
