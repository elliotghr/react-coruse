import React, { useState, useEffect } from "react";
import { CRUDForm } from "./CRUDForm";
import { CRUDTable } from "./CRUDTable";
import { Message } from "./Message";
import { helpFetch } from "../helpers/helpFetch";

let url = "http://localhost:3001/santos/";

function CRUDApp() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [dataToDelete, setDataToDelete] = useState(null);

  const createData = (data) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    // Enviar los datos a la API
    helpFetch("http://localhost:3001/santos/", options)
      .then((res) => {
        if (res.error) {
          alert(`Error: ${res.error.message}`);
        } else {
          setData((prevData) => [...prevData, res]);
          setDataToEdit(null);
        }
      })
      .catch((err) => {
        alert(`Error: ${err.message}`);
      });
  };

  const updateData = (data) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    // Enviar los datos a la API
    helpFetch(`http://localhost:3001/santos/${data.id}`, options)
      .then((res) => {
        if (res.error) {
          alert(`Error: ${res.error.message}`);
        } else {
          setData((prevData) => {
            prevData = prevData.filter((el) => el.id !== data.id);
            prevData.push(data);
            return prevData;
          });
          setDataToEdit(null);
        }
      })
      .catch((err) => {
        alert(`Error: ${err.message}`);
      });
  };

  useEffect(() => {
    helpFetch(url).then((res) => {
      if (res.error) {
        setError(res.error);
      } else {
        setError(null);
      }
      setData(res);
    });
  }, [url]);

  useEffect(() => {
    // Si no hay datos para eliminar, salimos
    if (!dataToDelete) return;
    // Si hay datos para eliminar, mostramos un mensaje de confirmación
    const deleteConfirm = window.confirm(
      `¿Seguro que quieres eliminar el registro: ${dataToDelete?.name}?`
    );
    // Si el usuario confirma la eliminación, procedemos
    if (!deleteConfirm) {
      setDataToDelete(null);
      return;
    }

    // Si hay datos para eliminar, enviamos la solicitud DELETE
    if (dataToDelete) {
      const options = {
        method: "DELETE",
      };

      helpFetch(`http://localhost:3001/santos/${dataToDelete.id}`, options)
        .then((res) => {
          if (res.error) {
            alert(`Error: ${res.error.message}`);
          } else {
            setData((prevData) =>
              prevData.filter((el) => el.id !== dataToDelete.id)
            );
            setDataToDelete(null);
          }
        })
        .catch((err) => {
          alert(`Error: ${err.message}`);
        });
    }
  }, [dataToDelete]);

  return (
    <div>
      <hr />
      <h2>CRUD</h2>
      <CRUDForm
        setData={setData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
        createData={createData}
        updateData={updateData}
      />
      <CRUDTable
        data={data}
        setDataToEdit={setDataToEdit}
        setDataToDelete={setDataToDelete}
      />
      {error && (
        <Message
          message={`Ha ocurrido un error: ${error.message}`}
          color={"red"}
        ></Message>
      )}
      <hr />
    </div>
  );
}

export default CRUDApp;
