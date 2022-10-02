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
  FaUserCircle,
} from "react-icons/fa"
import React, { useState } from "react"
import Logonobg from "../img/logonobg.svg"
import Button from "react-bootstrap/Button"
import { useAuth } from "../script/useAuth"

function Nbar({ user, onchangelogout }) {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const { logout } = useAuth()
  const onlogout = () => {
    logout()
    onchangelogout(false)
  }
  return (
    <>
      <div>
        <Navbar key="false" expand="false" className="mb-3 color-nav">
          <Container fluid>
            <Navbar.Toggle onClick={handleShow} />
            <Navbar.Brand href="/">
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
                <div className="flex space-around">
                  <FaUserCircle size={50} />
                  <div className="profilename">
                    <span>เข้าสู่ระบบด้วย</span>
                    <br />
                    <span>{user.email}</span>
                    <br />
                  </div>
                </div>
                <Button onClick={onlogout}>ออกจากระบบ</Button>
              </Offcanvas.Header>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default Nbar
