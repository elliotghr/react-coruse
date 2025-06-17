import React, { useState, useEffect } from "react";

const initialState = {
  name: "",
  constellation: "",
};

export const CRUDForm = ({
  dataToEdit,
  setDataToEdit,
  createData,
  updateData,
}) => {
  const [formData, setFormData] = useState(initialState);

  // useEffect para detectar cambios en el estado dataToEdit
  useEffect(() => {
    if (dataToEdit) {
      setFormData(dataToEdit);
    } else {
      setFormData(initialState);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value.trim(),
    }));
  };

  const resetForm = () => {
    setFormData(initialState);
    if (dataToEdit) {
      // Si hay datos para editar, los limpiamos
      setDataToEdit(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Crear el objeto de datos a enviar
    if (!formData.id) {
      createData(formData);
    } else {
      updateData(formData);
    }
    resetForm();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>{dataToEdit ? "Editar" : "Agregar"}</h2>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="constellation">Constellation</label>
        <input
          type="text"
          id="constellation"
          name="constellation"
          value={formData.constellation}
          onChange={handleChange}
          required
        />

        <input type="submit" value="Enviar" />
        {dataToEdit && (
          <button type="button" onClick={resetForm}>
            Cancelar
          </button>
        )}
      </form>
    </div>
  );
};
