import React from "react";

export default function AppTableRow({ el, setDataToEdit, deleteData }) {
  return (
    <tr>
      <td>{el.name}</td>
      <td>{el.age}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(el.id)}>Eliminar</button>
      </td>
    </tr>
  );
}
