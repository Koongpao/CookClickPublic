import Form from "react-bootstrap/Form"
import { Button } from "react-bootstrap"
import { useState } from "react"
import { SearchMenu } from "../script/controller"

const Search = () => {
  const [keyword, setKeyword] = useState("")
  const [menulist, setMenulist] = useState([])

  const onSearchClick = async () => {
    let response = await SearchMenu(keyword)
    console.log(response)
    setMenulist(response)
  }

  return (
    <>
      <h1 className="text-center">ค้นหาสูตรอาหารทั้งหมด</h1>
      <button onClick={() => console.log(menulist)}>asd</button>
      <div className="flex justify-content-center">
        <Form className="flex flex-col common-home p-4">
          <Form.Group className="mb-3" controlId="SearchKeyword">
            <Form.Label>Keyword:</Form.Label>
            <Form.Control
              type="search"
              placeholder="ใส่คำที่ต้องการค้นหา"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <Button onClick={() => onSearchClick()}>ค้นหา</Button>
          </Form.Group>
        </Form>
      </div>
    </>
  )
}
export default Search
