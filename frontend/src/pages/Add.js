import React, { useEffect, useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { FaBan, FaPlus } from "react-icons/fa"
import Card from "react-bootstrap/Card"
import Offcanvas from "react-bootstrap/Offcanvas"
import { FormControl } from "react-bootstrap"

function Add() {
  const [recipename, setrecipename] = useState("")
  const [recipedesc, setrecipedesc] = useState("")
  const [inglist, setinglist] = useState([])
  const [toollist, settoollist] = useState([])
  const [uniqueingid, setuniqueingid] = useState([])
  const [uniquetoolid, setuniquetoolid] = useState([])
  const [steplist, setsteplist] = useState([])
  const newstep = { desc: "ใส่รายละเอียดขั้นตอน" }
  const addnewstep = () => {
    console.log(steplist)
    setsteplist([...steplist, newstep])
    console.log(steplist)
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
    ing.ingamount = amount
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
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }
    setSelectedFile(e.target.files[0])
  }
  const alling = [
    { ingname: "หมู", ingamount: 0, id: 1 },
    { ingname: "หมา", ingamount: 0, id: 2 },
    { ingname: "ไก่", ingamount: 0, id: 3 },
    { ingname: "ไข่", ingamount: 0, id: 4 },
  ]
  const alltool = [
    { toolname: "หม้อ", id: 1 },
    { toolname: "กระทะ", id: 2 },
    { toolname: "กระทะเบิ้มๆ", id: 3 },
    { toolname: "หม้อกากๆ", id: 4 },
  ]
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
              {alling
                .filter((ing) => ing.ingname.includes(keywording.toLowerCase()))
                .map((filtereding) => (
                  <Button
                    onClick={() => addEntryClick(0, filtereding)}
                    key={filtereding.id}
                  >
                    {filtereding.ingname}
                  </Button>
                ))}
            </Offcanvas.Body>
          </Offcanvas>
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
              {alltool
                .filter((tool) =>
                  tool.toolname.includes(keywordtool.toLowerCase())
                )
                .map((filteredtool) => (
                  <Button
                    onClick={() => addEntryClick(1, filteredtool)}
                    key={filteredtool.id}
                  >
                    {filteredtool.toolname}
                  </Button>
                ))}
            </Offcanvas.Body>
          </Offcanvas>
          <div>
            {toollist.map((tool) => (
              <div className="add-tool-item" key={tool.id}>
                <Card className="add-tool-name">
                  <Card.Body>{tool.toolname}</Card.Body>
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
              <div className="add-tool-item" key={steplist.indexOf(step)}>
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
