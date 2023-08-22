import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { PiHamburgerBold } from "react-icons/pi";
import { RxExit } from "react-icons/rx";
import styles from "./navbar.module.css";
import { TableComp } from "../table/TableComp";
import { useState } from "react";

export const NavbarComp = () => {
  const [seccionActiva, setSeccionActiva] = useState(null);

  return (
    <Navbar>
      <Container className={styles.header}>
        <Navbar.Brand>
          <PiHamburgerBold />
          <Navbar.Text>BQAC Team</Navbar.Text>
        </Navbar.Brand>

        <Nav className={styles.navLinks}>
          <Nav.Link
            href="#usuarios"
            onClick={() => setSeccionActiva("usuarios")}
            className={styles.navOpt}
          >
            Usuarios
          </Nav.Link>
          <Nav.Link
            href="#productos"
            onClick={() => setSeccionActiva("productos")}
            className={styles.navOpt}
          >
            Productos
          </Nav.Link>
        </Nav>

        <Button className={styles.navClose}>
          <RxExit />
        </Button>
      </Container>

      <section
        id="productos"
        style={{ display: seccionActiva === "productos" ? "block" : "none" }}
      >
        <h2>Sección de Productos</h2>
        <TableComp />
      </section>

      <section
        id="usuarios"
        style={{ display: seccionActiva === "usuarios" ? "block" : "none" }}
      >
        <h2>Sección de Usuarios</h2>
      </section>
    </Navbar>
  );
};
