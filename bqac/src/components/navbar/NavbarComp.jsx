import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { PiHamburgerBold } from "react-icons/pi";
import { RxExit } from "react-icons/rx";

export const NavbarComp = () => {
  return (
    <Navbar>
        <Container className="header">
          <Navbar.Brand className="logo">
            <PiHamburgerBold className="burger" />
            <Navbar.Text>BQAC Team</Navbar.Text>
          </Navbar.Brand>

          <Nav className="nav-links">
            <Nav.Link href="#" className="nav-opt">
              Usuarios
            </Nav.Link>
            <Nav.Link href="#" className="nav-opt">
              Productos
            </Nav.Link>
          </Nav>

          <Button className="btn-close">
            <RxExit />
          </Button>
        </Container>
      </Navbar>
  )
}

