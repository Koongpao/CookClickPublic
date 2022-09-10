import React, { useState } from "react"
import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { FaPassport, FaPlus } from "react-icons/fa"
import Card from "react-bootstrap/Card"
import { Offcanvas } from "react-bootstrap"

const Ref = () => {
  const [inglist, setinglist] = useState([])
  const [uniqueingid, setuniqueingid] = useState([])
  const [IngDetails, setIngDetails] = useState({ ingname: "", ingamount: "" })
  const ingsetamount = (ing, amount) => {
    ing.ingamount = amount
  }
  const removeonClick = (t, element) => {
    let index = uniqueingid.indexOf(element.id)
    setinglist(inglist.slice(0, index).concat(inglist.slice(index + 1)))
    setuniqueingid(
      uniqueingid.slice(0, index).concat(uniqueingid.slice(index + 1))
    )
  }
  const addEntryClick = (element) => {
    console.log(element)
    const isDuplicate = uniqueingid.includes(element.id)
    if (!isDuplicate) {
      setinglist([...inglist, element])
      setuniqueingid([...uniqueingid, element.id])
    }
  }
  const [showing, setshowing] = useState(false)
  const handleCloseing = () => setshowing(false)
  const handleShowing = () => setshowing(true)
  const [keywording, setkeywording] = useState("")
  const alling = [
    { ingname: "หมู", ingamount: 0, id: 1 },
    { ingname: "หมา", ingamount: 0, id: 2 },
    { ingname: "ไก่", ingamount: 0, id: 3 },
    { ingname: "ไข่", ingamount: 0, id: 4 },
  ]

  return (
    <>
      <h1 className="text-center">จัดการวัตถุดิบ</h1>
      <div className="ref-page-form-box">
        <Form>
          <Button onClick={handleShowing} className="ingredient-add-button">
            <FaPlus />
            เพิ่มวัตถุดิบ
          </Button>
          <Offcanvas
            show={showing}
            onHide={handleCloseing}
            placement="top"
            className="searchoffcanvas"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>เพิ่มวัตถุดิบ</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Form.Control
                type="text"
                onChange={(e) => setkeywording(e.target.value)}
              />
              {alling
                .filter((ing) => ing.ingname.includes(keywording.toLowerCase()))
                .map((filtereding) => (
                  <Button
                    onClick={() => addEntryClick(filtereding)}
                    key={filtereding.id}
                  >
                    {filtereding.ingname}
                  </Button>
                ))}
            </Offcanvas.Body>
          </Offcanvas>
        </Form>
      </div>
      <div className="ref-page-ingredient-list">
        <Tabs
          className="ref-page-ingredient-tab"
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="meat" title="เนื้อสัตว์">
            <div>
              {inglist.map((ing) => (
                <div className="add-ing-item" key={ing.id}>
                  <Card className="add-ing-name">
                    <Card.Body>{ing.ingname}</Card.Body>
                  </Card>
                  <Form.Control
                    type="number"
                    placeholder={ing.ingamount}
                    min="0"
                    onChange={(e) => ingsetamount(ing, e.target.value)}
                  />
                  <Button
                    className=""
                    variant="danger"
                    onClick={() => removeonClick(0, ing)}
                  >
                    {" "}
                    x{" "}
                  </Button>
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="veggies" title="ผัก/ผลไม้">
            <h1>test</h1>
          </Tab>
          <Tab eventKey="condiment" title="เครื่องปรุง">
            <h1>test</h1>
          </Tab>
          <Tab eventKey="tool" title="อุปกรณ์ทำอาหาร">
            <h1>test</h1>
          </Tab>
          <Tab eventKey="other" title="นม/ไข่/อื่นๆ">
            <h1>test</h1>
          </Tab>
        </Tabs>
        <Button>ยืนยันการแก้ไข</Button>
      </div>
    </>
  )
}

export default Ref
