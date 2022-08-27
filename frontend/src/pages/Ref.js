import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Ref = () => {
  return (
    <>
      <h1 className="text-center">ค้นหาสูตรอาหารทั้งหมด</h1>
      <div className="ref-page-form-box">
        <Form>
          <Form.Group
            className="ref-page-form"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Control
              as="textarea"
              rows={1}
              placeholder="กรอกชื่อวัตถุดิบ"
            />
          </Form.Group>
          <Form.Group
            className="ref-page-form"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Control
              as="textarea"
              rows={1}
              placeholder="กรอกปริมาณวัตถุดิบ"
            />
          </Form.Group>
          <Button className="ref-page-add-ingredient-button" variant="primary">
            Add Ingredient
          </Button>
        </Form>
      </div>

      <Tabs className="ref-page-ingredient-tab"
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
      >
        <Tab eventKey="meat" title="เนื้อสัตว์">
          <h1>test</h1>
        </Tab>
        <Tab eventKey="veggies" title="ผัก/ผลไม้">
          <h1>test</h1>
        </Tab>
        <Tab eventKey="condiment" title="เครื่องปรุง">
          <h1>test</h1>
        </Tab>
        <Tab eventKey="tool" title="อุปกรณ์ทำอาหาร">
          <h1>test</h1>
        </Tab>
        <Tab eventKey="other" title="นม/ไข่/อื่นๆ">
          <h1>test</h1>
        </Tab>
      </Tabs>
    </>
  );
};

export default Ref;
