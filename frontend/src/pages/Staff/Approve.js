import Approvalbox from "../../components/Approvalbox"
import React, { useState } from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

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
  const [text, settext] = useState("")
  const [left, setleft] = useState([...Exapproval])
  const [show, setshow] = useState(false)
  const handlerejcheck = () => {
    settext("ไม่")
    setshow(true)
  }
  const handleappcheck = () => {
    settext("")
    setshow(true)
  }
  const onconfirm = () => {
    setshow(false)
    setchecklist([])
    setExapproval(left)
    if (text) {
      console.log("reject")
    } else {
      console.log("approve")
    }
  }
  const handleClick = (approval) => {
    if (!checklist.includes(approval)) {
      setchecklist([...checklist, approval])
      const i = left.indexOf(approval)
      setleft(left.slice(0, i).concat(left.slice(i + 1)))
    } else {
      let newleft = []
      for (let j = 0; j < Exapproval.length; j++) {
        if (!checklist.includes(Exapproval[j]) || Exapproval[j] === approval) {
          newleft.push(Exapproval[j])
        }
      }
      setleft(newleft)
      const i = checklist.indexOf(approval)
      setchecklist(checklist.slice(0, i).concat(checklist.slice(i + 1)))
    }
  }
  const [oneshow, setoneshow] = useState(false)
  const [target, settarget] = useState()
  const [action, setaction] = useState(0)
  const ononeconfirm = () => {
    setoneshow(false)
    if (checklist.includes(target)) {
      const i = checklist.indexOf(target)
      setchecklist(checklist.slice(0, i).concat(checklist.slice(i + 1)))
    } else {
      const i = left.indexOf(target)
      setleft(left.slice(0, i).concat(left.slice(i + 1)))
    }
    const i = Exapproval.indexOf(target)
    setExapproval(Exapproval.slice(0, i).concat(Exapproval.slice(i + 1)))
    if (action) {
    } else {
    }
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
            <div className="approvebox-box" key={index}>
              <div className="approvebox-checkbox">
                <input
                  type="checkbox"
                  onChange={() => {
                    handleClick(approval)
                  }}
                  checked={checklist.includes(approval)}
                ></input>
              </div>
              <Approvalbox
                menu={approval}
                setmodal={setoneshow}
                settarget={settarget}
                setaction={setaction}
                Status={1}
              />
            </div>
          )
        })}
        {/* <Approvalbox
          key={0}
          menuname={"Spaghetti Bologna in Tomato Sauce"}
          cookername={"Mr. Yakkinkao"}
        /> */}
      </div>
      <Modal
        show={show}
        onHide={() => {
          setshow(false)
        }}
      >
        <Modal.Header closeButton>ยืนยันการ{text}อนุมัติสูตรอาหาร</Modal.Header>
        <Modal.Body>
          <h6>รายการสูตรอาหารที่เลือก</h6>
          {checklist.map((approval, index) => {
            return <Approvalbox key={index} menu={approval} />
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setshow(false)
            }}
          >
            ยกเลิก
          </Button>
          <Button onClick={onconfirm}>ยืนยัน</Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={oneshow}
        onHide={() => {
          setoneshow(false)
        }}
      >
        <Modal.Header closeButton>ยืนยันการ{text}อนุมัติสูตรอาหาร</Modal.Header>
        <Modal.Body>
          <h6>รายการสูตรอาหารที่เลือก</h6>
          {checklist.map((approval, index) => {
            return <Approvalbox key={index} menu={approval} />
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setoneshow(false)
            }}
          >
            ยกเลิก
          </Button>
          <Button onClick={ononeconfirm}>ยืนยัน</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default Approve
