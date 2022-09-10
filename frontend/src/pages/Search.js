import Form from "react-bootstrap/Form"
import { Button } from "react-bootstrap"
import { useState } from "react"
function Search() {
  const [keyword, setkeyword] = useState("")
  const handlekwchange = (newkw) => {
    setkeyword(newkw)
  }
  const handlesearchbutton = () => {
    console.log(keyword)
  }

  return (
    <>
      <h1 className="text-center">ค้นหาสูตรอาหารทั้งหมด</h1>
      <div className="flex justify-content-center">
        <Form className="flex flex-col common-home p-4">
          <Form.Group className="mb-3" controlId="SearchKeyword">
            <Form.Label>Keyword:</Form.Label>
            <Form.Control
              type="search"
              placeholder="ใส่คำที่ต้องการค้นหา"
              value={keyword}
              onChange={(e) => handlekwchange(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Button onClick={handlesearchbutton}>ค้นหา</Button>
      </div>
    </>
  )
}
export default Search
