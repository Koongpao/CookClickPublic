import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"
import { FaHome, FaSearch } from "react-icons/fa"
import "./Navbar.css"

function OffcanvasExample() {
  return (
    <>
      {[false].map((expand) => (
        <div>
          <style type="text/css">
            {`
            
    `}
          </style>
          <Navbar
            key={expand}
            variant="green"
            expand={expand}
            className="mb-3 color-nav"
          >
            <Container fluid>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Brand>
                <img
                  src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.15752-9/292609703_1081595922750571_685075280195760492_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeF3H1gtRa8PGzjadq8BR7wnxbqgAJaVdYjFuqAAlpV1iPHzdILqPjdtru9Hf5F8raYmiEO4LeFVXpuhlzCqmOyG&_nc_ohc=btb7wJIb7HcAX8ZO_RO&_nc_ht=scontent.fbkk14-1.fna&oh=03_AVLHVxeb6w65yGB6FQY2Tt60wu1l6bOa8xOtso7y9ZGktg&oe=630831A5"
                  alt="logo"
                ></img>
              </Navbar.Brand>
              <Navbar.Brand href="/Home">
                <FaHome />
              </Navbar.Brand>
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
              >
                <Offcanvas.Header className="offcanvas-violet">
                  {" "}
                  <br />
                </Offcanvas.Header>
                <Offcanvas.Body className="offcanvas-violet">
                  <div className="thickline">
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="/Search">
                        <FaSearch />
                        ค้นหาเมนูทั้งหมด
                      </Nav.Link>
                    </Nav>
                  </div>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </div>
      ))}
    </>
  )
}

export default OffcanvasExample
