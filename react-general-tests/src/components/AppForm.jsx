import React, { useEffect, useState } from "react";
import { use } from "react";

const initialForm = {
  id: null,
  name: "",
  age: "",
};

export default function AppForm({
  createData,
  dataToEdit,
  setDataToEdit,
  updateData,
}) {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.age) {
      alert("Datos incompletos");
      return;
    }
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
      setDataToEdit(null);
    }

    handleReset(e);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setForm(initialForm);
  };

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  return (
    <div>
      <h2>{dataToEdit ? "Editar" : "Agregar"}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.name}
        />
        <label htmlFor="age">Edad</label>
        <input
          type="number"
          name="age"
          id="age"
          placeholder="Edad"
          onChange={handleChange}
          value={form.age}
        />
        <div>
          <input type="submit" value="Guardar" />
          <input type="reset" value="Limpiar" onClick={handleReset} />
        </div>
      </form>
    </div>
  );
}
