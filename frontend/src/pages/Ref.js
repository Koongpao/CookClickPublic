import React, { useState, useEffect } from "react"
import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import RefIngItem from "../components/RefIngItem"
import Ingdropdown from "../components/Ingdropdown"
import { FaPassport } from "react-icons/fa"
import Dropdown from "react-bootstrap/Dropdown"
import Card from "react-bootstrap/Card"

const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("")

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <Form.Control
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value ||
              child.props.children.toLowerCase().startsWith(value.toLowerCase())
          )}
        </ul>
      </div>
    )
  }
)

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
  const handleIngSubmit = (e) => {
    e.preventDefault()
    console.log(IngDetails)
  }
  const addEntryClick = (element) => {
    const isDuplicate = uniqueingid.includes(element.id)
    if (!isDuplicate) {
      setinglist([...inglist, element])
      setuniqueingid([...uniqueingid, element.id])
    }
  }
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
          <Form.Group
            className="ref-page-form"
            controlId="exampleForm.ControlTextarea1"
          >
            <Dropdown className="dropdown-ing-ref">
              <Dropdown.Toggle id="dropdown-autoclose-true dropdown-variant-primary">
                เพิ่มวัตถุดิบ
              </Dropdown.Toggle>
              <Dropdown.Menu as={CustomMenu}>
                {alling.map((ing) => (
                  <Dropdown.Item
                    key={ing.id}
                    tag="button"
                    onClick={() => addEntryClick(ing)}
                  >
                    {ing.ingname}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Form.Control
              onChange={(e) =>
                setIngDetails({ ...IngDetails, ingamount: e.target.value })
              }
              as="textarea"
              rows={1}
              placeholder="กรอกปริมาณวัตถุดิบ"
            />
          </Form.Group>
          <Button
            className="ref-page-add-ingredient-button"
            variant="primary"
            onClick={(e) => handleIngSubmit(e)}
          >
            Add Ingredient
          </Button>
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
      </div>
    </>
  )
}

export default Ref
