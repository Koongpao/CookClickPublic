import Approvalbox from "../../components/Approvalbox"
import React, { useState } from "react"

const Approve = () => {
  const Exapproval = [
    {
      menuname: "Spaghetti",
      cookername: "Mr. YakkinPasta",
      menuid: "1",
    },
    {
      menuname: "Hamburger",
      cookername: "I Love Junk Food",
      menuid: "2",
    },
    {
      menuname: "Papaya Salad",
      cookername: "T",
      menuid: "3",
    },
    {
      menuname: "Spaghetti Bologna in Tomato Sauce",
      cookername: "ยืนกินปากกาที่ท่าพระ",
      menuid: "4",
    },
    {
      menuname: "Cake",
      cookername: "ถถถถถถถถถถถถถถถถถถถถ",
      menuid: "5",
    },
  ]
  const [checklist, setchecklist] = useState([])
  const handlerejcheck = () => {
    console.log(checklist)
  }
  const handleappcheck = () => {
    console.log(checklist)
  }

  return (
    <>
      <div className="approve-top">
        <h1 className="approve-title-txt">สูตรอาหารที่รอการอนุมัติ</h1>
        <button className="approve-rejsel-btn" onClick={handlerejcheck}>
          REJECT SELECTED
        </button>
        <button className="approve-appsel-btn" onClick={handleappcheck}>
          APPROVE SELECTED
        </button>
      </div>
      <div className="approve-list">
        {Exapproval.map((approval, index) => {
          return (
            <Approvalbox
              key={index}
              menuname={approval.menuname}
              cookername={approval.cookername}
              menuid={approval.menuid}
              checklist={checklist}
              setchecklist={setchecklist}
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
