import Form from "react-bootstrap/Form"
import Dropdown from "react-bootstrap/Dropdown"
function Search() {
  return (
    <>
      <h1 className="m-5 text-center">ค้นหาสูตรอาหารทั้งหมด</h1>
      <div className="flex justify-content-center">
        <Form className="flex flex-col common-home p-4">
          <Form.Group className="mb-3" controlId="SearchKeyword">
            <Form.Label>Keyword:</Form.Label>
            <Form.Control type="search" placeholder="Enter Keyword" />
          </Form.Group>
          <Dropdown>
            <Dropdown.Toggle
              className="normal-search-btn"
              id="dropdown-search-type"
            >
              Search
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/r">Search by recipe name</Dropdown.Item>
              <Dropdown.Item href="/c">Search by cooker name</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form>
      </div>
    </>
  )
}
export default Search
