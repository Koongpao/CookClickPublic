import Dashboard from "./Dashboard"
import Approvalbox from "../../components/Approvalbox"
import React from "react"

const Approve = () => {
  const Exapproval = [
    {
      menuname: "Spaghetti",
      cookername: "Mr. YakkinPasta",
    },
    {
      menuname: "Hamburger",
      cookername: "I Love Junk Food",
    },
    {
      menuname: "Papaya Salad",
      cookername: "T",
    },
    {
      menuname: "Spaghetti Bologna in Tomato Sauce",
      cookername: "ยืนกินปากกาที่ท่าพระ",
    },
    {
      menuname: "Cake",
      cookername: "ถถถถถถถถถถถถถถถถถถถถ",
    },
  ]

  //<Dashboard />
  return (
    <>
      <div className="approve-top">
        <h1 className="approve-title-txt">สูตรอาหารที่รอการอนุมัติ</h1>
        <button className="approve-rejsel-btn">REJECT SELECTED</button>
        <button className="approve-appsel-btn">APPROVE SELECTED</button>
      </div>
      <div className="approve-list">
        {Exapproval.map((approval, index) => {
          return (
            <Approvalbox
              key={index}
              menuname={approval.menuname}
              cookername={approval.cookername}
            />
          )
        })}
        {/* <Approvalbox
          key={0}
          menuname={"Spaghetti Bologna in Tomato Sauce"}
          cookername={"Mr. Yakkinkao"}
        /> */}
      </div>
    </>
  )
}
export default Approve
