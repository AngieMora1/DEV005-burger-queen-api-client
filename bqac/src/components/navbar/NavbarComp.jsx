import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { PiHamburgerBold } from "react-icons/pi";
import { RxExit } from "react-icons/rx";
import styles from "./navbar.module.css";

export const NavbarComp = () => {
  return (
    <Navbar>
        <Container className={styles.header}>
          <Navbar.Brand>
            <PiHamburgerBold/>
            <Navbar.Text>BQAC Team</Navbar.Text>
          </Navbar.Brand>

          <Nav className={styles.navLinks}>
            <Nav.Link href="#" className={styles.navOpt}>
              Usuarios
            </Nav.Link>
            <Nav.Link href="#" className={styles.navOpt}>
              Productos
            </Nav.Link>
          </Nav>

          <Button className={styles.navClose}>
            <RxExit />
          </Button>
        </Container>
      </Navbar>
  )
}

