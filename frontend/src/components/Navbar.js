import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"
import {
  FaHome,
  FaSearch,
  FaSearchPlus,
  FaPlus,
  FaDrumstickBite,
} from "react-icons/fa"
import React, { useState } from "react"
import Logonobg from "../img/logonobg.svg"
import Mark from "../img/mark.jpg"

function Nbar() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <div>
        <Navbar key="false" expand="false" className="mb-3 color-nav">
          <Container fluid>
            <Navbar.Toggle onClick={handleShow} />
            <Navbar.Brand>
              <img src={Logonobg} alt="logo" style={{ width: "150px" }}></img>
            </Navbar.Brand>
            <Navbar.Brand href="/">
              <FaHome />
            </Navbar.Brand>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-false`}
              aria-labelledby={`offcanvasNavbarLabel-expand-fasle`}
              show={show}
              onHide={handleClose}
            >
              <Offcanvas.Header className="offcanvas-violet" closeButton>
                <img src={Logonobg} alt="logo" width="150px"></img>
              </Offcanvas.Header>
              <Offcanvas.Body className="offcanvas-violet" placement="start">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/Search">
                    <FaSearch />
                    &nbsp;ค้นหาสูตรอาหารทั้งหมด
                  </Nav.Link>
                </Nav>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/SearchRef">
                    <FaSearchPlus />
                    &nbsp;ค้นหาสูตรอาหารจากวัตถุดิบในตู้เย็น
                  </Nav.Link>
                </Nav>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/Add">
                    <FaPlus />
                    &nbsp;เพิ่มสูตรอาหาร
                  </Nav.Link>
                </Nav>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/Ref">
                    <FaDrumstickBite />
                    &nbsp;จัดการวัตถุดิบ
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
              <Offcanvas.Header className="offcanvas-foot flex">
                <img
                  src={Mark}
                  alt="profile"
                  className="profilepic"
                  width="50"
                ></img>
                <div className="profilename">
                  <span>
                    Logged in as
                    <br />
                  </span>
                  <span>Mr.Mark Suck</span>
                </div>
              </Offcanvas.Header>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default Nbar
