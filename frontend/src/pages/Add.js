import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import { FaBan } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");

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
    );
  }
);

function Add() {
  const [inglist, setinglist] = useState([]);
  const [toollist, settoollist] = useState([]);
  const [uniqueingid, setuniqueingid] = useState([]);
  const [uniquetoolid, setuniquetoolid] = useState([]);
  const addEntryClick = (t, element) => {
    if (t === 0) {
      const isDuplicate = uniqueingid.includes(element.id);
      if (!isDuplicate) {
        setinglist([...inglist, element]);
        setuniqueingid([...uniqueingid, element.id]);
      }
    } else {
      const isDuplicate = uniquetoolid.includes(element.id);
      if (!isDuplicate) {
        settoollist([...toollist, element]);
        setuniquetoolid([...uniquetoolid, element.id]);
      }
    }
  };

  const ingsetamount = (ing, amount) => {
    ing.ingamount = amount;
  };
  const removeonClick = (t, element) => {
    if (t === 0) {
      let index = uniqueingid.indexOf(element.id);
      setinglist(inglist.slice(0, index).concat(inglist.slice(index + 1)));
      setuniqueingid(
        uniqueingid.slice(0, index).concat(uniqueingid.slice(index + 1))
      );
    } else {
      let index = uniquetoolid.indexOf(element.id);
      settoollist(toollist.slice(0, index).concat(toollist.slice(index + 1)));
      setuniquetoolid(
        uniquetoolid.slice(0, index).concat(uniquetoolid.slice(index + 1))
      );
    }
  };
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };
  const alling = [
    { ingname: "หมู", ingamount: 0, id: 1 },
    { ingname: "หมา", ingamount: 0, id: 2 },
    { ingname: "ไก่", ingamount: 0, id: 3 },
    { ingname: "ไข่", ingamount: 0, id: 4 },
  ];
  const alltool = [
    { toolname: "หม้อ", id: 1 },
    { toolname: "กระทะ", id: 2 },
    { toolname: "กระทะเบิ้มๆ", id: 3 },
    { toolname: "หม้อกากๆ", id: 4 },
  ];
  const send = (ready) => {
    const ingarray = { status: ready, ing: inglist, tool: toollist };
    console.log(ingarray);
  };

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
            <Dropdown.Toggle id="dropdown-autoclose-true dropdown-variant-primary">
              เพิ่มวัตถุดิบ
            </Dropdown.Toggle>
            <Dropdown.Menu as={CustomMenu}>
              {alling.map((ing) => (
                <Dropdown.Item
                  key={ing.id}
                  tag="button"
                  onClick={() => addEntryClick(0, ing)}
                >
                  {ing.ingname}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <div>
            {inglist.map((ing) => (
              <div className="add-ing-item" key={ing.id}>
                <Card className="add-ing-name">
                  <Card.Body>{ing.ingname}</Card.Body>
                </Card>
                <Form.Control
                  type="number"
                  placeholder={ing.ingamount}
                  min="0"
                  onChange={(e) => ingsetamount(ing, e.target.value)}
                />
                <Button
                  className=""
                  variant="danger"
                  onClick={() => removeonClick(0, ing)}
                >
                  {" "}
                  <FaBan />{" "}
                </Button>
              </div>
            ))}
          </div>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-autoclose-true dropdown-variant-primary">
              เพิ่มอุปกรณ์
            </Dropdown.Toggle>
            <Dropdown.Menu as={CustomMenu}>
              {alltool.map((tool) => (
                <Dropdown.Item
                  key={tool.id}
                  tag="button"
                  onClick={() => addEntryClick(1, tool)}
                >
                  {tool.toolname}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <div>
            {toollist.map((tool) => (
              <div className="add-ing-item" key={tool.id}>
                <Card className="add-ing-name">
                  <Card.Body>{tool.toolname}</Card.Body>
                </Card>
                <Button
                  className=""
                  variant="danger"
                  onClick={() => removeonClick(1, tool)}
                >
                  {" "}
                  <FaBan />{" "}
                </Button>
              </div>
            ))}
          </div>
          <Button
            className="savebutton"
            variant="success"
            onClick={() => send(1)}
          >
            Save
          </Button>
          <Button className="" variant="success" onClick={() => send(2)}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Add;
