import { useContext } from "react";
import CrudContext from "../context/CrudContext";

export const CrudTableRow = ({ el }) => {
  // Usamos el contexto CrudContext para acceder a las funciones
  const { deleteData, setDataToEdit } = useContext(CrudContext);
  return (
    <tr key={el.id}>
      <td>{el.name}</td>
      <td>{el.constellation}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(el.id)}>Eliminar</button>
      </td>
    </tr>
  );
};
