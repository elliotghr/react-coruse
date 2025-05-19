import React from "react";
import { useNavigate } from "react-router-dom";

export const CrudTableRow = ({ el, deleteData, setDataToEdit }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    setDataToEdit(el);
    navigate(`/editar/${el.id}`);
  };

  return (
    <tr key={el.id}>
      <td>{el.name}</td>
      <td>{el.constellation}</td>
      <td>
        <button onClick={handleEdit}>Editar</button>
        <button onClick={() => deleteData(el.id)}>Eliminar</button>
      </td>
    </tr>
  );
};
