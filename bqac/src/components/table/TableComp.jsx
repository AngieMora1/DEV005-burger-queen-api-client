import { BsTrash, BsPencilSquare } from "react-icons/bs";
import { Table } from "react-bootstrap";

export const TableComp = () => {
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
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>admin</td>
          <td>
            <BsPencilSquare />
            <BsTrash />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>admin</td>
          <td>
            <BsPencilSquare />
            <BsTrash />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};
