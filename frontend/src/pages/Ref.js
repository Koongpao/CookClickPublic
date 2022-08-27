import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Ref = () => {
  return (
    <>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <h1>test</h1>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <h1>test</h1>
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          <h1>test</h1>
        </Tab>
      </Tabs>
    </>
  );
};

export default Ref;
