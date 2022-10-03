import React, { useState, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaPlus, FaBan } from "react-icons/fa";
import {
  AddorEditIngredient,
  AddorEditKitchenware,
  GetAllMeIngredient,
  GetAllMeKitware,
  GetSystemIngredient,
  GetSystemKitchenware,
} from "../script/controller";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { Offcanvas } from "react-bootstrap";
import "./Ref.css";
// import MapIngList from "../components/MapIngList";

const Ref = () => {
  // email: simonys@gmail.com
  // password: simonys

  const [categoryData, setCategoryData] = useState({
    meat: "63148bc17afa87e2439351d4",
    veggie: "63148c731fd415225d9d18cd",
    condiment: "63148cee1fd415225d9d18d1",
    flour: "6326f032899f2ff5706099a7",
    other: "6326f0b9899f2ff5706099ab",
  });

  const sortByCategory = (element) => {
    Object.keys(categoryData).forEach((e) => {
      if (element.categoryID === categoryData[e]) {
        if (e === "meat") {
          setMeatIng([...meatIng, element]);
        } else if (e === "veggie") {
          setVegIng([...vegIng, element]);
        } else if (e === "condiment") {
          setCondIng([...condIng, element]);
        } else if (e === "flour") {
          setFlourIng([...flourIng, element]);
        } else if (e === "other") {
          setOtherIng([...otherIng, element]);
        }
      }
    });
  };

  const addEntryClick = (element) => {
    const isDuplicate = uniqueingid.includes(element._id);
    if (
      element.categoryID === undefined &&
      !uniquetoolid.includes(element._id)
    ) {
      setTool([...Tool, element]);
      setuniquetoolid([...uniquetoolid, element._id]);
    } else if (!isDuplicate) {
      sortByCategory(element);
      setuniqueingid([...uniqueingid, element._id]);
    }
    handleCloseing();
    handleClosetool();
  };

  const filterIngByCategory = (IngData, ToolData) => {
    let i = 0;
    IngData.forEach((eachIng) => {
      const newIngEntry = {
        _id: eachIng.ingredientID,
        categoryID: eachIng.categoryID,
        ingamount: eachIng.amount,
        name: eachIng.ingredientName,
        id: i,
      };
      i += 1;
      if (eachIng.categoryID === "63148bc17afa87e2439351d4") {
        setMeatIng((meatIng) => [...meatIng, newIngEntry]);
      } else if (eachIng.categoryID === "63148c731fd415225d9d18cd") {
        setVegIng((vegIng) => [...vegIng, newIngEntry]);
      } else if (eachIng.categoryID === "63148cee1fd415225d9d18d1") {
        setCondIng((condIng) => [...condIng, newIngEntry]);
      } else if (eachIng.categoryID === "6326f032899f2ff5706099a7") {
        setFlourIng((flourIng) => [...flourIng, newIngEntry]);
      } else if (eachIng.categoryID === "6326f0b9899f2ff5706099ab") {
        setOtherIng((otherIng) => [...otherIng, newIngEntry]);
      }
    });
    i = 0;
    ToolData.forEach((eachTool) => {
      const newToolEntry = {
        _id: eachTool.kitchenwareID,
        name: eachTool.kitchenwareName,
        id : i
      }
      setTool((prevTool) => [...prevTool, newToolEntry])
    })
  };

  // const [ignore, setignore] = useState(false);
  const [ingData, setIngData] = useState([]);
  const [wareData, setWareData] = useState([]);
  const [token, setToken] = useState("");

  const UpdateCurrentIngredientKitchenware = async () => {
    if (ignore.current) return;
    ignore.current = true;
    setToken(JSON.parse(localStorage.getItem("token")));
    let myToken = JSON.parse(localStorage.getItem("token"));
    const ingfulldata = await GetSystemIngredient(myToken);
    const warefulldata = await GetSystemKitchenware(myToken);
    const myingredient = await GetAllMeIngredient(myToken);
    const mytool = await GetAllMeKitware(myToken);
    let i = 0;
    ingfulldata.data.forEach((element) => {
      element.id = i;
      i += 1;
    });
    i = 0;
    warefulldata.data.forEach((element) => {
      element.id = i;
      i += 1;
    });
    setWareData(warefulldata.data);
    setIngData(ingfulldata.data);
    filterIngByCategory(myingredient.ingredient, mytool.kitchenware);
  };

  const ignore = React.useRef(false);
  useEffect(() => {
    UpdateCurrentIngredientKitchenware();
  });

  const removeonClick = (setFunc, setUniqueFunc, element) => {
    setFunc((current) =>
      current.filter((ing) => {
        return ing._id !== element._id;
      })
    );
    setUniqueFunc((current) =>
      current.filter((item) => {
        return item !== element._id;
      })
    );
  };

  const [showing, setshowing] = useState(false);
  const [showtool, setshowtool] = useState(false);
  const handleShowtool = () => setshowtool(true);
  const handleClosetool = () => setshowtool(false);
  const handleCloseing = () => setshowing(false);
  const handleShowing = () => setshowing(true);
  const [keywording, setkeywording] = useState("");

  const [meatIng, setMeatIng] = useState([]);
  const [vegIng, setVegIng] = useState([]);
  const [condIng, setCondIng] = useState([]);
  const [flourIng, setFlourIng] = useState([]);
  const [otherIng, setOtherIng] = useState([]);
  const [uniqueingid, setuniqueingid] = useState([]);
  const [Tool, setTool] = useState([]);
  const [uniquetoolid, setuniquetoolid] = useState([]);
  const [IngBeforeEdit, setIngBeforeEdit] = useState({
    meat: [],
    veg: [],
    flour: [],
    cond: [],
    other: [],
    uniqueing: [],
    uniquetoolid: [],
  });

  const [showAddIngButton, setShowAddIngButton] = useState(false);
  const [showAddWareButton, setShowAddWareButton] = useState(false);
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [showEditButton, setShowEditButton] = useState(true);
  const [SubmitConfirmation, setSubmitConfirmation] = useState(false);
  const [nullAmountAlert, setNullAmountAlert] = useState(false);
  const [DiscardChange, setDiscardChange] = useState(false);
  const [Dummy, setDummy] = useState(false);

  const handleStartEditing = (
    meat,
    veg,
    cond,
    flour,
    other,
    tool,
    uing,
    utool
  ) => {
    setShowAddIngButton(true);
    setShowAddWareButton(true);
    setShowSubmitButton(true);
    setShowEditButton(false);
    const meatCopy = JSON.parse(JSON.stringify(meat));
    const vegCopy = JSON.parse(JSON.stringify(veg));
    const condCopy = JSON.parse(JSON.stringify(cond));
    const flourCopy = JSON.parse(JSON.stringify(flour));
    const otherCopy = JSON.parse(JSON.stringify(other));
    const toolCopy = JSON.parse(JSON.stringify(tool));
    const uingCopy = JSON.parse(JSON.stringify(uing));
    const utoolCopy = JSON.parse(JSON.stringify(utool));
    setIngBeforeEdit({
      meat: meatCopy,
      veg: vegCopy,
      flour: flourCopy,
      cond: condCopy,
      other: otherCopy,
      tool: toolCopy,
      uniqueing: uingCopy,
      uniquetool: utoolCopy,
    });
    console.log("start editing");
  };

  const handleRevertChange = () => {
    setMeatIng(IngBeforeEdit.meat);
    setVegIng(IngBeforeEdit.veg);
    setFlourIng(IngBeforeEdit.flour);
    setCondIng(IngBeforeEdit.cond);
    setOtherIng(IngBeforeEdit.other);
    setTool(IngBeforeEdit.tool);
    setuniqueingid(IngBeforeEdit.uniqueing);
    setuniquetoolid(IngBeforeEdit.uniquetool);
  };

  const handleDiscardChange = () => {
    setShowAddIngButton(false);
    setShowAddWareButton(false);
    setShowSubmitButton(false);
    setShowEditButton(true);
    setDiscardChange(false);
    handleRevertChange();
  };

  const handleSubmit = async () => {
    let IngList = [];
    let ToolList = [];
    Tool.forEach((eachTool) => {
      ToolList.push(eachTool._id);
    });
    const handleIngList = (IngCategory) => {
      IngCategory.forEach((eachIng) => {
        IngList.push({
          ingredientID: eachIng._id,
          amount: parseInt(eachIng.ingamount),
        });
      });
    };
    handleIngList(meatIng);
    handleIngList(vegIng);
    handleIngList(condIng);
    handleIngList(flourIng);
    handleIngList(otherIng);
    let isIngAmountNull = false;
    IngList.forEach((eachIng) => {
      if (isNaN(eachIng.amount)) {
        console.log(isNaN(eachIng.amount));
        setNullAmountAlert(true);
        isIngAmountNull = true;
      }
    });
    if (isIngAmountNull) return;
    setShowAddIngButton(false);
    setShowAddWareButton(false);
    setShowSubmitButton(false);
    setShowEditButton(true);
    setSubmitConfirmation(false);
    let IngListForSubmit = {
      ingredient: IngList,
    };
    let ToolListForSubmit = {
      kitchenware: ToolList,
    };
    console.log(ToolList)
    const response = await AddorEditIngredient(token, IngListForSubmit);
    const response2 = await AddorEditKitchenware(token, ToolListForSubmit);
    console.log(response);
    console.log(response2);
    UpdateCurrentIngredientKitchenware();
  };

  return (
    <div className="refpage">
      <h1 className="text-center">จัดการวัตถุดิบในตู้เย็น</h1>
      <button onClick={() => console.log(Tool)}> Tool </button>
      <div className="ref-page-form-box">
        <Form>
          <Button
            onClick={handleShowing}
            className="button-28"
            style={{ display: showAddIngButton ? "block" : "none" }}
          >
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
              <Form.Control
                type="text"
                onChange={(e) => setkeywording(e.target.value)}
              />
              {ingData
                .filter((ing) => ing.name.includes(keywording.toLowerCase()))
                .map((filtereding) => (
                  <Button
                    onClick={() => addEntryClick(filtereding)}
                    key={filtereding.id}
                  >
                    {filtereding.name}
                  </Button>
                ))}
            </Offcanvas.Body>
          </Offcanvas>
        </Form>
        <Form>
          <Button
            onClick={handleShowtool}
            className="button-28"
            style={{ display: showAddIngButton ? "block" : "none" }}
          >
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
              <Form.Control
                type="text"
                onChange={(e) => {
                  setkeywording(e.target.value);
                }}
              />
              {wareData
                .filter((ing) => ing.name.includes(keywording.toLowerCase()))
                .map((filtereding) => (
                  <Button
                    onClick={() => addEntryClick(filtereding)}
                    key={filtereding.id}
                  >
                    {filtereding.name}
                  </Button>
                ))}
            </Offcanvas.Body>
          </Offcanvas>
        </Form>
      </div>
      <div className="ref-page-ingredient-list">
        <Tabs
          className="ref-page-ingredient-tab"
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="meat" title="เนื้อสัตว์">
            {meatIng.map((ing) => (
              <div className="ref-ing-item" key={ing.id}>
                <Card className="ref-ing-name">
                  <Card.Body>{ing.name}</Card.Body>
                </Card>
                <Form.Control
                  disabled={showEditButton ? true : false}
                  type="number"
                  min="0"
                  onChange={(e) => {
                    ing.ingamount = e.target.value;
                    setDummy((dummy) => !dummy);
                  }}
                  className="ref-ing-amount"
                  value={ing.ingamount || ""}
                />
                <Card className="ref-ing-unit">
                  <Card.Body>{ing.unit}</Card.Body>
                </Card>
                <Button
                  className=""
                  variant="danger"
                  onClick={() => removeonClick(setMeatIng, setuniqueingid, ing)}
                  style={{ display: showEditButton ? "none" : "block" }}
                >
                  {" "}
                  <FaBan />{" "}
                </Button>
              </div>
            ))}
          </Tab>
          <Tab eventKey="veggie" title="ผัก/ผลไม้">
            <div>
              {vegIng.map((ing) => (
                <div className="ref-ing-item" key={ing.id}>
                  <Card className="ref-ing-name">
                    <Card.Body>{ing.name}</Card.Body>
                  </Card>
                  <Form.Control
                    disabled={showEditButton ? true : false}
                    type="number"
                    min="0"
                    onChange={(e) => {
                      ing.ingamount = e.target.value;
                      setDummy((dummy) => !dummy);
                    }}
                    className="ref-ing-amount"
                    value={ing.ingamount || ""}
                  />
                  <Card className="ref-ing-unit">
                    <Card.Body>{ing.unit}</Card.Body>
                  </Card>
                  <Button
                    className=""
                    variant="danger"
                    onClick={() =>
                      removeonClick(setVegIng, setuniqueingid, ing)
                    }
                    style={{ display: showEditButton ? "none" : "block" }}
                  >
                    {" "}
                    <FaBan />{" "}
                  </Button>
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="condiment" title="เครื่องปรุง">
            <div>
              {condIng.map((ing) => (
                <div className="ref-ing-item" key={ing.id}>
                  <Card className="ref-ing-name">
                    <Card.Body>{ing.name}</Card.Body>
                  </Card>
                  <Form.Control
                    disabled={showEditButton ? true : false}
                    type="number"
                    min="0"
                    onChange={(e) => {
                      ing.ingamount = e.target.value;
                      setDummy((dummy) => !dummy);
                    }}
                    className="ref-ing-amount"
                    value={ing.ingamount || ""}
                  />
                  <Card className="ref-ing-unit">
                    <Card.Body>{ing.unit}</Card.Body>
                  </Card>
                  <Button
                    className=""
                    variant="danger"
                    onClick={() =>
                      removeonClick(setCondIng, setuniqueingid, ing)
                    }
                    style={{ display: showEditButton ? "none" : "block" }}
                  >
                    {" "}
                    <FaBan />{" "}
                  </Button>
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="flour" title="แป้ง">
            <div>
              {flourIng.map((ing) => (
                <div className="ref-ing-item" key={ing.id}>
                  <Card className="ref-ing-name">
                    <Card.Body>{ing.name}</Card.Body>
                  </Card>
                  <Form.Control
                    disabled={showEditButton ? true : false}
                    type="number"
                    min="0"
                    onChange={(e) => {
                      ing.ingamount = e.target.value;
                      setDummy((dummy) => !dummy);
                    }}
                    className="ref-ing-amount"
                    value={ing.ingamount || ""}
                  />
                  <Card className="ref-ing-unit">
                    <Card.Body>{ing.unit}</Card.Body>
                  </Card>
                  <Button
                    className=""
                    variant="danger"
                    onClick={() =>
                      removeonClick(setFlourIng, setuniqueingid, ing)
                    }
                    style={{ display: showEditButton ? "none" : "block" }}
                  >
                    {" "}
                    <FaBan />{" "}
                  </Button>
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="other" title="ไข่/นม/อื่นๆ">
            <div>
              {otherIng.map((ing) => (
                <div className="ref-ing-item" key={ing.id}>
                  <Card className="ref-ing-name">
                    <Card.Body>{ing.name}</Card.Body>
                  </Card>
                  <Form.Control
                    disabled={showEditButton ? true : false}
                    type="number"
                    min="0"
                    onChange={(e) => {
                      ing.ingamount = e.target.value;
                      setDummy((dummy) => !dummy);
                    }}
                    className="ref-ing-amount"
                    value={ing.ingamount || ""}
                  />
                  <Card className="ref-ing-unit">
                    <Card.Body>{ing.unit}</Card.Body>
                  </Card>
                  <Button
                    className=""
                    variant="danger"
                    onClick={() =>
                      removeonClick(setOtherIng, setuniqueingid, ing)
                    }
                    style={{ display: showEditButton ? "none" : "block" }}
                  >
                    {" "}
                    <FaBan />{" "}
                  </Button>
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="tool" title="อุปกรณ์ทำอาหาร">
            <div>
              {Tool.map((ing) => (
                <div className="ref-tool-item" key={ing.id}>
                  <Card className="ref-tool-name">
                    <Card.Body>{ing.name}</Card.Body>
                  </Card>
                  <Button
                    className=""
                    variant="danger"
                    onClick={() => removeonClick(setTool, setuniquetoolid, ing)}
                    style={{ display: showEditButton ? "none" : "block" }}
                  >
                    {" "}
                    <FaBan />{" "}
                  </Button>
                </div>
              ))}
            </div>
          </Tab>
        </Tabs>
      </div>
      <div className="submit-button-section">
        <Button
          onClick={() =>
            handleStartEditing(
              meatIng,
              vegIng,
              condIng,
              flourIng,
              otherIng,
              Tool,
              uniqueingid,
              uniquetoolid
            )
          }
          className="button-28-green"
          style={{ display: showEditButton ? "block" : "none" }}
        >
          แก้ไขข้อมูลวัตถุดิบ
        </Button>
        <Button
          onClick={() => setDiscardChange(true)}
          className="button-28-red"
          style={{
            display: showEditButton ? "none" : "block",
            margin: "0 0 0 2%",
          }}
        >
          ยกเลิกการเปลี่ยนแปลง
        </Button>
        <Button
          onClick={() => setSubmitConfirmation(true)}
          className="button-28-green"
          style={{ display: showEditButton ? "none" : "block" }}
        >
          ยืนยันการแก้ไข
        </Button>
        <Modal
          show={SubmitConfirmation}
          onHide={() => setSubmitConfirmation(false)}
        >
          <Modal.Body className="text-center" style={{ fontSize: "28px" }}>
            ต้องการยืนยันการเปลี่ยนแปลงหรือไม่?
          </Modal.Body>
          <Modal.Footer className="content-center">
            <Button
              className="button-28-red"
              onClick={() => setSubmitConfirmation(false)}
            >
              ยกเลิก
            </Button>
            <Button className="button-28-green" onClick={() => handleSubmit()}>
              ยืนยันการแก้ไข
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={DiscardChange} onHide={() => setSubmitConfirmation(false)}>
          <Modal.Body className="text-center" style={{ fontSize: "28px" }}>
            ต้องการยกเลิกการเปลี่ยนแปลงหรือไม่?
          </Modal.Body>
          <Modal.Footer className="content-center">
            <Button
              className="button-28-red"
              onClick={() => setDiscardChange(false)}
            >
              ยกเลิก
            </Button>
            <Button
              className="button-28-green"
              onClick={() => handleDiscardChange()}
            >
              ยืนยัน
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={nullAmountAlert} onHide={() => setNullAmountAlert(false)}>
          <Modal.Body className="text-center" style={{ fontSize: "28px" }}>
            กรุณาใส่ปริมาณวัตถุดิบที่ต้องการ
          </Modal.Body>
          <Modal.Footer className="content-center">
            <Button
              className="button-28-green"
              onClick={() => {
                setNullAmountAlert(false);
                setSubmitConfirmation(false);
              }}
            >
              กลับ
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Ref;
