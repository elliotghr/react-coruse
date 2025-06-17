import React from "react";
import { CRUDTableRow } from "./CRUDTableRow";

export const CRUDTable = ({ data, setDataToEdit, setDataToDelete }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Constellation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <CRUDTableRow
                key={el.id}
                id={el.id}
                name={el.name}
                constellation={el.constellation}
                setDataToEdit={setDataToEdit}
                setDataToDelete={setDataToDelete}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
