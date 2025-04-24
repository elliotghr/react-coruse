import { useState, useEffect } from "react";
import AppForm from "./AppForm";
import AppTable from "./AppTable";

const initialDb = [
  { id: 1, name: "Nano", age: 12 },
  { id: 2, name: "Mosho", age: 6 },
  { id: 3, name: "Cricri", age: 6 },
];

export default function App() {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    let newData = {
      id: db.length + 1,
      name: data.name,
      age: data.age,
    };
    setDb([...db, newData]);
  };
  const updateData = (data) => {
    console.log(data);
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };
  const deleteData = (id) => {
    let confirm = window.confirm(
      `¿Estas seguro de eliminar el registro con id ${id}?`
    );

    if (confirm) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    }
  };

  return (
    <div>
      <h1>React general tests</h1>
      <article className="grid-1-2">
        <AppForm
          createData={createData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
          updateData={updateData}
        />
        <AppTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </div>
  );
}
