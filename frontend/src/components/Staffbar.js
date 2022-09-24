import { FaCheck, FaSearch, FaBan, FaPlus } from "react-icons/fa"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import React, { useState } from "react"
import Mark from "../img/mark.jpg"
import Button from "react-bootstrap/Button"
import Offcanvas from "react-bootstrap/Offcanvas"
import Logonobg from "../img/logonobg.svg"

function Staffbar() {
  const staffname = "Mr. Mark Suck"
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Navbar key="false" expand="false" className="mb-3 color-nav">
      <Container fluid>
        <Navbar.Toggle onClick={handleShow} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-false`}
          aria-labelledby={`offcanvasNavbarLabel-expand-fasle`}
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header className="staffbar-bluebg" closeButton>
            <img src={Logonobg} alt="logo" style={{ width: "150px" }}></img>
          </Offcanvas.Header>
          <Offcanvas.Body className="staffbar-bluebg justify-content-center">
            <div className="staffbar-profile">
              <img src={Mark} alt="profile" className="staffbar-profile-pic" />
              <div className="staffbar-text">
                Welcome
                <br />
                {staffname}
              </div>
            </div>
            <div className="staffbar-menubar staffbar-text">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/Staff/Dashboard">
                  <FaSearch />
                  &nbsp;Dashboard
                </Nav.Link>
              </Nav>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/Add">
                  <FaPlus />
                  &nbsp;เพิ่มสูตรอาหาร
                </Nav.Link>
              </Nav>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/Staff/Approve">
                  <FaCheck />
                  &nbsp;อนุมัติสูตรอาหาร
                </Nav.Link>
              </Nav>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/Staff/Report">
                  <FaBan />
                  &nbsp;การรายงาน
                </Nav.Link>
              </Nav>
            </div>
            <Button className="staffbar-logout-button">Logout</Button>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default Staffbar
