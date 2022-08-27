import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const RefIngItem = (props) => {
  return (
    <>
      <div className="ref-ing-item">
        <Card className="ref-ing-card-ing-name">
          <Card.Body>{props.ingname}</Card.Body>
        </Card>
        <Card className="ref-ing-card-ing-amount">
          <Card.Body>{props.ingamount}</Card.Body>
        </Card>
        <Button className="" variant="danger"> X </Button>
        <Button className="" variant="success"> แก้ไข </Button>
      </div>
    </>
  );
};

export default RefIngItem;
