import React, { useEffect, useState } from "react"
import Form from "react-bootstrap/Form"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"
import Button from "react-bootstrap/Button"
import { FaBan } from "react-icons/fa"
import Card from "react-bootstrap/Card"
import ButtonGroup from 'react-bootstrap/ButtonGroup'


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

function Add() {
  const [inglist, setinglist] = useState([])

  const uniqueName = []
  const uniqueIng = inglist.filter((element) => {
    const isDuplicate = uniqueName.includes(element.ingname)
    if (!isDuplicate) {
      uniqueName.push(element.ingname)

      return true
    }
    return false
  })
  const addEntryClick = (ing) => {
    setinglist([...inglist, ing])
  }
  const removeonClick = (ing) => {
    setinglist([...inglist, ing])
  }
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
    { ingname: "หมู", ingamount: 0 },
    { ingname: "หมา", ingamount: 0 },
    { ingname: "ไก่", ingamount: 0 },
    { ingname: "ไข่", ingamount: 0 },
  ]

  return (
    <>
      <div className="flex flex-col align-items-center">
        <Form className="common-home">
          <input type="file" onChange={onSelectFile} />
          {selectedFile && (
            <img src={preview} width="180" height="180" alt="preview" />
          )}
          <Form.Group className="mb-3" controlId="AddName">
            <Form.Control type="text" placeholder="Enter Recipe Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="AddDesc">
            <Form.Control
              type="text"
              placeholder="Enter Recipe Description"
              as="textarea"
            />
          </Form.Group>
          <DropdownButton as={ButtonGroup} id="dropdown-variant-primary" title="เพิ่มวัตถุดิบ">
            <Dropdown.Item as={CustomMenu} />
            {alling.map((ing, index) => (
              <Dropdown.Item
                key={index}
                tag="button"
                onClick={() => addEntryClick(ing)}
              >
                {ing.ingname}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <div>
            {uniqueIng.map((ing) => (
              <div className="add-ing-item">
                <Card className="add-ing-name">
                  <Card.Body>{ing.ingname}</Card.Body>
                </Card>
                <Form.Control
                  type="number"
                  placeholder={ing.ingamount}
                  min="0"
                />
                <Button
                  className=""
                  variant="danger"
                  onClick={() => removeonClick(ing)}
                >
                  {" "}
                  <FaBan />{" "}
                </Button>
              </div>
            ))}
          </div>
        </Form>
      </div>
    </>
  )
}

export default Add
