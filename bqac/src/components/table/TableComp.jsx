import { BsTrash, BsPencilSquare } from "react-icons/bs";
import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

export const TableComp = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerApiKey = () => {
      return localStorage.getItem('jwtToken');
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
          <th>Producto</th>
          <th>precio</th>
          <th>Imagen</th>
          <th>Tipo</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <tr key={producto.id}>
            <td>{producto.id}</td>
            <td>{producto.name}</td>
            <td>{producto.price}</td>
            <td>{producto.image}</td>
            <td>{producto.type}</td>
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
