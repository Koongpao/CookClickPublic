import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from 'react-bootstrap/Modal';

const RefIngItem = (props) => {
  const [showConf, setShowConf] = useState(false);

  return (
    <>
       <Modal show={() => setShowConf(false)} onHide={() => setShowConf(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConf(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShowConf(false)}>
            Save Changes
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
        <Button
          className=""
          variant="danger"
          onClick={() => setShowConf(true)}
        >
          {" "}
          X{" "}
        </Button>
        <Button className="" variant="success">
          {" "}
          แก้ไข{" "}
        </Button>
      </div>
    </>
  );
};

export default RefIngItem;
