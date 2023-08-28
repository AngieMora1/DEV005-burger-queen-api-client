import axios from "axios";
import styles from "./table.module.css";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { BsTrash, BsPencilSquare } from "react-icons/bs";

export const TableUsers = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const obtenerApiKey = () => {
      return localStorage.getItem('jwtToken');
    };

    const obtenerUsuarios = async () => {
      try {
        const apiKey = obtenerApiKey();
        const response = await axios.get('http://localhost:8080/users', {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        });

        setUsuarios(response.data);
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    };

    obtenerUsuarios();
  }, []);



  return (
    <Table striped="columns" className={styles.tableUser} cellspacing="0">
      <thead className={styles.tableHeader}>
        <tr>
          <th>Id</th>
          <th>Correo</th>
          <th>Contraseña</th>
          <th>Rol</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {usuarios.map((usuario) => (
          <tr key={usuario.id}>
            <td>{usuario.id}</td>
            <td>{usuario.email}</td>
            <td>{usuario.password}</td>
            <td>{usuario.role}</td>
            <td>
              <BsPencilSquare />
              <BsTrash />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
