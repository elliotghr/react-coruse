import React from "react";
import { CrudTableRow } from "./CrudTableRow";

export const CrudTable = ({ data, deleteData, setDataToEdit }) => {
  return (
    <div>
      <h3>Tabla de datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 ? (
            data.map((el) => {
              return (
                <CrudTableRow
                  key={el.id}
                  el={el}
                  deleteData={deleteData}
                  setDataToEdit={setDataToEdit}
                />
              );
            })
          ) : (
            <tr>
              <td colSpan="3">No hay datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
