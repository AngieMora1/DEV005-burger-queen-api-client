import { BsTrash, BsPencilSquare } from "react-icons/bs";
import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

export const TableComp = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerApiKey = () => {
      return localStorage.getItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlLmhvcHBlckBzeXN0ZXJzLnh5eiIsImlhdCI6MTY5MjUwNTE4MSwiZXhwIjoxNjkyNTA4NzgxLCJzdWIiOiIyIn0.qyGGJKDueRjM_OjG3EWr6UvmwzL6pZj7NNHpEI5MLTM');
    };

    const obtenerProductos = async () => {
      try {
        const apiKey = obtenerApiKey();
        const response = await axios.get('http://localhost:8080/products', {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        });

        setProductos(response.data);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    obtenerProductos();
  }, []);



  return (
    <Table striped="columns">
      <thead>
        <tr>
          <th>Id</th>
          <th>Correo</th>
          <th>Contraseña</th>
          <th>Rol</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <tr key={producto.id}>
            <td>{producto.id}</td>
            <td>{producto.nombre}</td>
            <td>{producto.precio}</td>
            <td>
              <BsPencilSquare />
              <BsTrash />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
