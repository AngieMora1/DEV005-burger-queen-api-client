import { Modal, Button, Container } from "react-bootstrap";
import styles from "./modal.module.css";

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export const ModalComp = ({ show, onClose, title, children }) => {
  return (
    <Modal show={show} onHide={onClose} className={styles.modalBack}>
      <Container className={styles.modalForm}>
        <Modal.Header >
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Cerrar Modal
          </Button>
        </Modal.Footer>
      </Container>
    </Modal>
  );
};
