import React, { useEffect, useState } from "react"
import Ingdropdown from "../components/Ingdropdown"
import Form from "react-bootstrap/Form"
function Add() {
  let inglist = []
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
          <Ingdropdown />
        </Form>
      </div>
    </>
  )
}

export default Add
