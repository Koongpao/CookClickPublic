import React, { useEffect, useState } from "react"
import Form from "react-bootstrap/Form"
import Dropdown from "react-bootstrap/Dropdown"
import Button from "react-bootstrap/Button"
import { FaPlus } from "react-icons/fa"

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <span
    ref={ref}
    onClick={(e) => {
      e.preventDefault()
      onClick(e)
    }}
    className="dropdown-atag"
  >
    {children}
    &#x25bc;
  </span>
))

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
  const addEntryClick = (ing) => {
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
    { name: "หมู", value: 0 },
    { name: "หมา", value: 0 },
    { name: "ไก่", value: 0 },
    { name: "ไข่", value: 0 },
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
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
              <Button>
                <FaPlus />
                เพิ่มวัตถุดิบ
              </Button>
            </Dropdown.Toggle>

            <Dropdown.Menu as={CustomMenu}>
              {alling.map((ing, index) => (
                <Dropdown.Item
                  key={index}
                  tag="button"
                  onClick={() => addEntryClick(ing)}
                >
                  {ing.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <div>
            {inglist.map((ing) => (
              <div>
                <div>{ing.name}</div>
                <Form.Group className="changeingvalue">
                  <Form.Control type="number" placeholder={ing.value} />
                </Form.Group>
              </div>
            ))}
          </div>
        </Form>
      </div>
    </>
  )
}

export default Add
