import React from "react";

export const CRUDTableRow = ({
  id,
  name,
  constellation,
  setDataToEdit,
  setDataToDelete,
}) => {
  if (!name || !constellation) {
    return null; // or handle the error as needed
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button onClick={() => setDataToEdit({ id, name, constellation })}>
          Edit
        </button>
        <button onClick={() => setDataToDelete({ id, name })}>Delete</button>
      </td>
    </tr>
  );
};
