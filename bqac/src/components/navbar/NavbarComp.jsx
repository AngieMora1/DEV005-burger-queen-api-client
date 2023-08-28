import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { PiHamburgerBold } from "react-icons/pi";
import { RxExit } from "react-icons/rx";
import styles from "./navbar.module.css";
import { TableComp } from "../table/TableComp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalComp } from "../modal/ModalComp";
import { TableUsers } from "../table/TableUsers";

export const NavbarComp = () => {
  const navigate = useNavigate();
  const [seccionActiva, setSeccionActiva] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/");
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


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

        <Button className={styles.navClose} onClick={handleLogout}>
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
        <TableUsers/>
        <Button onClick={handleShowModal}> Registro</Button>

        <ModalComp show={showModal} onClose={handleCloseModal} title="Mi Modal"> 
          <p>Contenido del modal...</p>
        </ModalComp>
      </section>
    </Navbar>
  );
};
