import { Button, Form } from "react-bootstrap"

const AddIng = () => {
  return (
    <>
      <h1 className="addads-title">เพิ่มวัตถุดิบลงในระบบ</h1>
      <div className="addads-linkform">
        <Form>
          <Form.Label className="addads-formtitle">ชื่อวัตถุดิบ</Form.Label>
          <Form.Control type="text" className="addads-form" />
        </Form>
      </div>
      <div className="addads-type">
        <Form>
          <Form.Check
            className="addads-type1"
            type="radio"
            name="group1"
            inline
            label="Header"
          />
          <div className="addads-houterbox"></div>
          <div className="addads-hinnerbox"></div>
          <Form.Check
            className="addads-type2"
            type="radio"
            name="group1"
            inline
            label="Bottom"
          />
          <div className="addads-bouterbox"></div>
          <div className="addads-binnerbox"></div>
        </Form>
      </div>
      <Button className="addads-btn">ADD ADS</Button>
    </>
  )
}
export default AddIng
