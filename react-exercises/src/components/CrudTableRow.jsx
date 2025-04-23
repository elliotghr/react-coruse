import React from "react";

export const CrudTableRow = ({ el, deleteData, setDataToEdit }) => {
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
