import React, { useState, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import RefIngItem from "../components/RefIngItem";
import Ingdropdown from "../components/Ingdropdown";
import { FaPassport } from "react-icons/fa";

const Ref = () => {
  const [IngDetails, setIngDetails] = useState({ ingname: "", ingamount: "" });

  const handleIngSubmit = (e) => {
    e.preventDefault();
    console.log(IngDetails);
  };

  return (
    <>
      <h1 className="text-center">ค้นหาสูตรอาหารทั้งหมด</h1>
      <div className="ref-page-form-box">
        {/* <div className="ref-page-dropdown-box">
            <Ingdropdown />
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
            </Form>
          </div> */}
        <Form>
          <Form.Group
            className="ref-page-form"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Control
              onChange={(e) =>
                setIngDetails({ ...IngDetails, ingname: e.target.value })
              }
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
              onChange={(e) =>
                setIngDetails({ ...IngDetails, ingamount: e.target.value })
              }
              as="textarea"
              rows={1}
              placeholder="กรอกปริมาณวัตถุดิบ"
            />
          </Form.Group>
          <Button
            className="ref-page-add-ingredient-button"
            variant="primary"
            onClick={(e) => handleIngSubmit(e)}
          >
            Add Ingredient
          </Button>
        </Form>
      </div>
      <div className="ref-page-ingredient-list">
        <Tabs
          className="ref-page-ingredient-tab"
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="meat" title="เนื้อสัตว์">
            <RefIngItem ingname="หมูสับ" ingamount="100g" />
            <RefIngItem ingname="ตี๋หน้าโง่" ingamount="1ตัว" />
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
      </div>
    </>
  );
};

export default Ref;
