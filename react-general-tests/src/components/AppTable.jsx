import React from "react";
import AppTableRow from "./AppTableRow";

export default function AppTable({ data, setDataToEdit, deleteData }) {
  return (
    <div>
      <h2>Tabla de datos</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => (
            <AppTableRow
              key={el.id}
              el={el}
              setDataToEdit={setDataToEdit}
              deleteData={deleteData}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
