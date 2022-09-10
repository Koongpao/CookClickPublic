import React, { useEffect, useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { FaBan, FaPlus } from "react-icons/fa"
import Card from "react-bootstrap/Card"
import Offcanvas from "react-bootstrap/Offcanvas"
import { FormControl } from "react-bootstrap"
import { GetAllIngredient, GetAllKitchenware } from "../script/controller"

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
  const newstep = { desc: "ใส่รายละเอียดขั้นตอน", pic: null }
  const onSelectstepFile = (step, event) => {
    if (!event.target.files || event.target.files.length === 0) {
      return
    }
    step.pic = event.target.files[0]
    let newpic = [...steppic]
    newpic[steplist.indexOf(step)] = URL.createObjectURL(step.pic)
    setsteppic(newpic)
  }
  const addnewstep = () => {
    setsteplist([...steplist, newstep])
    setsteppic([...steppic, ""])
  }
  const changedesc = (step, value) => {
    step.desc = value
  }
  const addEntryClick = (t, element) => {
    if (t === 0) {
      const isDuplicate = uniqueingid.includes(element.id)
      if (!isDuplicate) {
        setinglist([...inglist, element])
        setuniqueingid([...uniqueingid, element.id])
      }
    } else {
      const isDuplicate = uniquetoolid.includes(element.id)
      if (!isDuplicate) {
        settoollist([...toollist, element])
        setuniquetoolid([...uniquetoolid, element.id])
      }
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
  const handleShowing = () => {
    setshowing(true)
  }
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
    setPreview()
  }
  const send = (ready) => {
    const ingarray = {
      img: selectedFile,
      name: recipename,
      desc: recipedesc,
      status: ready,
      ing: inglist,
      tool: toollist,
      step: steplist,
    }
    console.log(ingarray)
  }

  return (
    <>
      <div className="flex flex-col align-items-center">
        <Form className="common-home">
          <input type="file" onChange={onSelectFile} />
          {selectedFile && (
            <img src={preview} width="180" height="180" alt="preview" />
          )}
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
          <div>
            {inglist.map((ing) => (
              <div className="add-ing-item" key={ing.id}>
                <Card className="add-ing-name">
                  <Card.Body>{ing.name}</Card.Body>
                </Card>
                <Form.Control
                  type="number"
                  placeholder={ing.amount
                    .toString()
                    .concat(" ")
                    .concat(ing.unit)}
                  min="0"
                  onChange={(e) => ingsetamount(ing, e.target.value)}
                />
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
          <Button onClick={handleShowtool} className="tool-add-button">
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
          <div>
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
          <Button onClick={() => addnewstep()}>
            <FaPlus />
            เพิ่มขั้นตอน
          </Button>
          <div>
            {steplist.map((step) => (
              <div key={steplist.indexOf(step)}>
                <input
                  type="file"
                  onChange={(e) => onSelectstepFile(step, e)}
                />
                {step.pic && (
                  <img
                    src={steppic[steplist.indexOf(step)]}
                    width="180"
                    height="180"
                    alt="preview"
                  />
                )}
                <Form.Control
                  type="text"
                  as="textarea"
                  placeholder={step.desc}
                  onChange={(e) => changedesc(step, e.target.value)}
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
            ))}
          </div>
          <div className="button-box">
            <Button
              className="savebutton"
              variant="success"
              onClick={() => send(1)}
            >
              Save
            </Button>
            <div className="blank-box"></div>
            <Button
              className="submitbutton"
              variant="success"
              onClick={() => send(2)}
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </>
  )
}

export default Add
