import React, { useState } from "react";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";

const initialDB = [
  {
    id: 1,
    name: "Seiya",
    constellation: "Pegasus",
  },
  {
    id: 2,
    name: "Shiryu",
    constellation: "Dragon",
  },
  {
    id: 3,
    name: "Hyoga",
    constellation: "Cygnus",
  },
  {
    id: 4,
    name: "Shun",
    constellation: "Andromeda",
  },
  {
    id: 5,
    name: "Ikki",
    constellation: "Phoenix",
  },
];

export default function CrudApp() {
  const [db, setDb] = useState(initialDB);
  //   Variable para controlar el modo de edición
  const [dataToEdit, setDataToEdit] = useState(null);

  //   Funciones para el crud
  const createData = (data) => {
    data.id = `"${Date.now()}"`;
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
    setDataToEdit(null);
  };

  const deleteData = (id) => {
    console.log(id);
    let isDelete = confirm(
      `¿Estás seguro de eliminar el registro con id ${id}?`
    );
    if (isDelete) {
      let dbFiltered = db.filter((el) => el.id !== id);
      setDb(dbFiltered);
      setDataToEdit(null);
    }
  };

  return (
    <>
      <h2>CRUD APP</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          deleteData={deleteData}
          setDataToEdit={setDataToEdit}
        />
      </article>
    </>
  );
}
