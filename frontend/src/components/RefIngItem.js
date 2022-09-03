import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { FaTrashAlt } from "react-icons/fa";

const RefIngItem = (props) => {
  const [showConf, setShowConf] = useState(false);

  const handleShow = () => setShowConf(true);
  const handleClose = () => setShowConf(false);

  return (
    <>
      <Modal show={showConf} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm delete {props.ingname}?</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body></Modal.Body> */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="ref-ing-item">
        <Card className="ref-ing-card-ing-name">
          <Card.Body>{props.ingname}</Card.Body>
        </Card>
        <Card className="ref-ing-card-ing-amount">
          <Card.Body>{props.ingamount}</Card.Body>
        </Card>
        <Button variant="danger" onClick={handleShow}>
          <FaTrashAlt />
        </Button>
        <Button variant="success" onClick={handleShow}>
          แก้ไข
        </Button>
      </div>
    </>
  );
};

export default RefIngItem;
