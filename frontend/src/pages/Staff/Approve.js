import Approvalbox from "../../components/Approvalbox"
import React, { useState } from "react"

const Approve = () => {
  const [Exapproval, setExapproval] = useState([
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
  ])
  const [checklist, setchecklist] = useState([])
  function removefromcheck() {
    let left = []
    for (let i = 0; i < Exapproval.length; i++) {
      if (!checklist.includes(Exapproval[i].menuid)) {
        left.push(Exapproval[i])
      }
    }
    setExapproval(left)
  }
  const handlerejcheck = () => {
    console.log(checklist)
    removefromcheck()
    setchecklist([])
  }
  const handleappcheck = () => {
    console.log(checklist)
    removefromcheck()
    setchecklist([])
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
              setExapproval={setExapproval}
              Exapproval={Exapproval}
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
