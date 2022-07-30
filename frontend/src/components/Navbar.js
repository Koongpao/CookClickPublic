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
              <img
                src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.15752-9/292609703_1081595922750571_685075280195760492_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeF3H1gtRa8PGzjadq8BR7wnxbqgAJaVdYjFuqAAlpV1iPHzdILqPjdtru9Hf5F8raYmiEO4LeFVXpuhlzCqmOyG&_nc_ohc=btb7wJIb7HcAX8ZO_RO&_nc_ht=scontent.fbkk14-1.fna&oh=03_AVLHVxeb6w65yGB6FQY2Tt60wu1l6bOa8xOtso7y9ZGktg&oe=630831A5"
                alt="logo"
              ></img>
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
                <img
                  src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.15752-9/292609703_1081595922750571_685075280195760492_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeF3H1gtRa8PGzjadq8BR7wnxbqgAJaVdYjFuqAAlpV1iPHzdILqPjdtru9Hf5F8raYmiEO4LeFVXpuhlzCqmOyG&_nc_ohc=btb7wJIb7HcAX8ZO_RO&_nc_ht=scontent.fbkk14-1.fna&oh=03_AVLHVxeb6w65yGB6FQY2Tt60wu1l6bOa8xOtso7y9ZGktg&oe=630831A5"
                  alt="logo"
                ></img>
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
                  src="https://scontent.fbkk6-2.fna.fbcdn.net/v/t1.15752-9/295496717_776865923732379_3601568390681838852_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGU1aSvncxZibrvqB1dkypzSuQL9EWXLUJK5Av0RZctQly3nxS50zwQthM9cLlJMw4feFeEg8Odq1dz9EGZ7DLk&_nc_ohc=iL3Mm-Eh904AX9m_N2I&tn=y3pXRUOwqqEgi0Fd&_nc_ht=scontent.fbkk6-2.fna&oh=03_AVLGZWWJlITl3nUYEYfOTjfWVbcLl-wpDgFmuUyKx64Kpw&oe=630B3F57"
                  alt="profile"
                  className="profilepic"
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
