import React, { useEffect, useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { FaBan, FaPlus } from "react-icons/fa"
import { IoIosArrowDown } from "react-icons/io"
import Card from "react-bootstrap/Card"
import Offcanvas from "react-bootstrap/Offcanvas"
import { FormControl } from "react-bootstrap"
import { GetAllIngredient, GetAllKitchenware } from "../script/controller"
import Accordion from "react-bootstrap/Accordion"
import { useAccordionButton } from "react-bootstrap/AccordionButton"

function Add() {
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InlheWFAdGVzdGVyYS50eCIsInVzZXJJRCI6IjYzMTJmYzIzM2MwMWE0YjBjNzI1NDkyZCIsInJvbGUiOjMsImlhdCI6MTY2MjE4ODYwOX0.152tDb7Dh7SFfsGmfAOzumleQvqvp5CxIiASXgpdAjw"
  )
  const [ingdata, setingdata] = useState([])
  const [waredata, setwaredata] = useState([])
  const [ignore, setignore] = useState(false)
  useEffect(() => {
    async function fetchdata() {
      const ingfulldata = await GetAllIngredient(token)
      const warefulldata = await GetAllKitchenware(token)
      let i = 0
      ingfulldata.data.forEach((element) => {
        element.id = i
        i += 1
        element.amount = 0
      })
      i = 0
      warefulldata.data.forEach((element) => {
        element.id = i
        i += 1
      })
      setwaredata(warefulldata.data)
      setingdata(ingfulldata.data)
    }
    if (!ignore) {
      fetchdata()
    }
    return () => {
      setignore(true)
    }
  })
  const [recipename, setrecipename] = useState("")
  const [recipedesc, setrecipedesc] = useState("")
  const [inglist, setinglist] = useState([])
  const [toollist, settoollist] = useState([])
  const [uniqueingid, setuniqueingid] = useState([])
  const [uniquetoolid, setuniquetoolid] = useState([])
  const [steplist, setsteplist] = useState([])
  const [steppic, setsteppic] = useState([])
  const onSelectstepFile = (step, event) => {
    if (!event.target.files || event.target.files.length === 0) {
      return
    }
    step.pic = event.target.files[0]
    setsteplist([...steplist])
    let newpic = [...steppic]
    newpic[steplist.indexOf(step)] = URL.createObjectURL(step.pic)
    setsteppic(newpic)
  }
  const [stepindex, setstepindex] = useState(1)
  const addnewstep = () => {
    let brandnewstep = {
      desc: "ขั้นตอนลำดับที่ ".concat(stepindex),
      pic: null,
      id: stepindex,
    }
    setstepindex(stepindex + 1)
    setsteplist([...steplist, brandnewstep])
    setsteppic([...steppic, ""])
  }
  const changedesc = (step, value) => {
    if (value === "") {
      step.desc = "ขั้นตอนลำดับที่ ".concat(step.id)
      setsteplist([...steplist])
      return
    }
    step.desc = value
    setsteplist([...steplist])
  }
  const addEntryClick = (t, element) => {
    if (t === 0) {
      const isDuplicate = uniqueingid.includes(element.id)
      if (!isDuplicate) {
        setinglist([...inglist, element])
        setuniqueingid([...uniqueingid, element.id])
      }
      handleCloseing()
    } else {
      const isDuplicate = uniquetoolid.includes(element.id)
      if (!isDuplicate) {
        settoollist([...toollist, element])
        setuniquetoolid([...uniquetoolid, element.id])
      }
      handleClosetool()
    }
  }
  const ingsetamount = (ing, amount) => {
    ing.amount = amount
  }
  const removeonClick = (t, element) => {
    if (t === 0) {
      let index = uniqueingid.indexOf(element.id)
      setinglist(inglist.slice(0, index).concat(inglist.slice(index + 1)))
      setuniqueingid(
        uniqueingid.slice(0, index).concat(uniqueingid.slice(index + 1))
      )
    } else if (t === 1) {
      let index = uniquetoolid.indexOf(element.id)
      settoollist(toollist.slice(0, index).concat(toollist.slice(index + 1)))
      setuniquetoolid(
        uniquetoolid.slice(0, index).concat(uniquetoolid.slice(index + 1))
      )
    } else {
      let index = steplist.indexOf(element)
      setsteplist(steplist.slice(0, index).concat(steplist.slice(index + 1)))
      setsteppic(steplist.slice(0, index).concat(steplist.slice(index + 1)))
    }
  }
  const [showing, setshowing] = useState(false)
  const handleCloseing = () => setshowing(false)
  const handleShowing = () => setshowing(true)
  const [keywording, setkeywording] = useState("")
  const [showtool, setshowtool] = useState(false)
  const handleClosetool = () => setshowtool(false)
  const handleShowtool = () => setshowtool(true)
  const [keywordtool, setkeywordtool] = useState("")
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()

  const onSelectFile = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }
    setSelectedFile(event.target.files[0])
    let newpic = URL.createObjectURL(event.target.files[0])
    setPreview(newpic)
  }
  const send = (ready) => {
    let lastinglist = []
    inglist.forEach((element) => {
      let nexting = { ingredientID: element._id, amount: element.amount }
      lastinglist.push(nexting)
    })
    let lastwarelist = []
    toollist.forEach((element) => {
      let nextware = { kitchenwareID: element._id }
      lastwarelist.push(nextware)
    })
    let laststeplist = []
    let i = 0
    steplist.forEach((element) => {
      let nextstep = { id: i, description: element.desc, image: element.pic }
      i += 1
      laststeplist.push(nextstep)
    })
    const ingarray = {
      image: selectedFile,
      name: recipename,
      description: recipedesc,
      status: ready,
      ingredient: lastinglist,
      kitchenware: lastwarelist,
      cookingstep: laststeplist,
    }
    console.log(ingarray)
  }

  const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey)
    return (
      <Button
        className="mx-2"
        variant="outline-dark"
        onClick={decoratedOnClick}
      >
        {children}
      </Button>
    )
  }

  return (
    <>
      <div className="flex flex-col align-items-center">
        <Form className="common-home">
          <div className="mb-3 add-pic-recipe">
            <Form.Control type="file" onChange={onSelectFile} />
            {selectedFile && (
              <img
                src={preview}
                alt="preview"
                className="add-pic-pre"
                thumbnail="true"
              />
            )}
          </div>
          <Form.Group className="mb-3" controlId="AddName">
            <Form.Control
              type="text"
              placeholder="ใส่ชื่อสูตรอาหาร"
              onChange={(e) => setrecipename(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="AddDesc">
            <Form.Control
              type="text"
              placeholder="ใส่คำอธิบายของสูตรอาหาร"
              as="textarea"
              onChange={(e) => setrecipedesc(e.target.value)}
            />
          </Form.Group>
          <Button onClick={handleShowing} className="add-ing-button">
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
              <FormControl
                type="text"
                onChange={(e) => setkeywording(e.target.value)}
              />
              {ingdata
                .filter((ing) => ing.name.includes(keywording.toLowerCase()))
                .map((filtereding) => (
                  <Button
                    onClick={() => addEntryClick(0, filtereding)}
                    key={filtereding.id}
                  >
                    {filtereding.name}
                  </Button>
                ))}
            </Offcanvas.Body>
          </Offcanvas>
          <div className="add-ing-box">
            {inglist.map((ing) => (
              <div className="add-ing-item" key={ing.id}>
                <Card className="add-ing-name">
                  <Card.Body>{ing.name}</Card.Body>
                </Card>
                <Form.Control
                  type="number"
                  placeholder={"โปรดกรอกปริมาณที่ใช้"}
                  min="0"
                  onChange={(e) => ingsetamount(ing, e.target.value)}
                  className="add-ing-amount"
                />
                <Card className="add-ing-unit">
                  <Card.Body>{ing.unit}</Card.Body>
                </Card>

                <Button
                  className=""
                  variant="danger"
                  onClick={() => removeonClick(0, ing)}
                >
                  {" "}
                  <FaBan />{" "}
                </Button>
              </div>
            ))}
          </div>
          <Button onClick={handleShowtool} className="add-tool-button">
            <FaPlus />
            เพิ่มอุปกรณ์
          </Button>
          <Offcanvas
            show={showtool}
            onHide={handleClosetool}
            placement="top"
            className="searchoffcanvas"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>เพิ่มอุปกรณ์</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <FormControl
                type="text"
                onChange={(e) => setkeywordtool(e.target.value)}
              />
              {waredata
                .filter((tool) => tool.name.includes(keywordtool.toLowerCase()))
                .map((filteredtool) => (
                  <Button
                    onClick={() => addEntryClick(1, filteredtool)}
                    key={filteredtool.id}
                  >
                    {filteredtool.name}
                  </Button>
                ))}
            </Offcanvas.Body>
          </Offcanvas>
          <div className="add-tool-box">
            {toollist.map((tool) => (
              <div className="add-tool-item" key={tool.id}>
                <Card className="add-tool-name">
                  <Card.Body>{tool.name}</Card.Body>
                </Card>
                <Button
                  className=""
                  variant="danger"
                  onClick={() => removeonClick(1, tool)}
                >
                  {" "}
                  <FaBan />{" "}
                </Button>
              </div>
            ))}
          </div>
          <Button onClick={() => addnewstep()} className="add-step-button">
            <FaPlus />
            เพิ่มขั้นตอน
          </Button>
          <Accordion className="accordion" flush>
            {steplist.map((step) => (
              <Card key={step.id}>
                <Card.Header className="add-step-header">
                  <span>{step.desc}</span>
                  <div>
                    <Button
                      className="py-1.5 px-2.5 mx-2"
                      variant="outline-dark"
                      onClick={() => removeonClick(2, step)}
                    >
                      <FaBan />
                    </Button>
                    <CustomToggle eventKey={step.id}>
                      <IoIosArrowDown />
                    </CustomToggle>
                  </div>
                </Card.Header>
                <Accordion.Collapse
                  eventKey={step.id}
                  className="accordionitem"
                >
                  <Card.Body>
                    <div className="stepremovebutton">
                      <Form.Control
                        type="file"
                        onChange={(e) => onSelectstepFile(step, e)}
                      />
                    </div>
                    <div className="steppiccenter">
                      {steppic[steplist.indexOf(step)] && (
                        <img
                          src={steppic[steplist.indexOf(step)]}
                          className="add-pic-pre"
                          thumbnail="true"
                          alt="preview"
                        />
                      )}
                    </div>
                    <FormControl
                      type="text"
                      as="textarea"
                      placeholder="กรุณากรอกขั้นตอนวิธีการทำ"
                      onChange={(e) => changedesc(step, e.target.value)}
                    />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
            {/* {steplist.map((step) => (
              <Accordion.Item eventKey={step.id} key={step.id}>
                <Accordion.Header>{step.desc}</Accordion.Header>
                <Accordion.Body className="accordionitem">
                  <div className="stepremovebutton">
                    <Form.Control
                      type="file"
                      onChange={(e) => onSelectstepFile(step, e)}
                    />
                    <Button
                      className=""
                      variant="danger"
                      onClick={() => removeonClick(2, step)}
                    >
                      {" "}
                      <FaBan />{" "}
                    </Button>
                  </div>
                  <div className="steppiccenter">
                    {steppic[steplist.indexOf(step)] && (
                      <img
                        src={steppic[steplist.indexOf(step)]}
                        className="add-pic-pre"
                        thumbnail="true"
                        alt="preview"
                      />
                    )}
                  </div>
                  <FormControl
                    type="text"
                    as="textarea"
                    placeholder="กรุณากรอกขั้นตอนวิธีการทำ"
                    onChange={(e) => changedesc(step, e.target.value)}
                  />
                </Accordion.Body>
              </Accordion.Item>
            ))} */}
          </Accordion>
          <div className="button-box">
            <Button
              className="savebutton"
              variant="success"
              onClick={() => send(1)}
            >
              บันทึกสูตรอาหาร
            </Button>
            <div className="blank-box"></div>
            <Button
              className="submitbutton"
              variant="success"
              onClick={() => send(2)}
            >
              ยืนยันการสร้างสูตรอาหาร
            </Button>
          </div>
        </Form>
      </div>
    </>
  )
}

export default Add
