import React, { useState, useEffect, createContext } from "react";
import { helpHttp } from "../helpers/helpHttp";

const CrudContext = createContext();

export const CrudProvider = ({ children }) => {
  const [db, setDb] = useState(null);
  //   Variable para controlar el modo de edición
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Llamada del helper helpHttp
  let api = helpHttp();
  let url = "http://localhost:3001/santos";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  //   Funciones para el crud
  const createData = (data) => {
    data.id = Date.now();
    data.id = String(data.id);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    api.post(url, options).then((res) => {
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = db.map((el) => (el.id === res.id ? res : el));
        setDb(newData);
        setError(null);
      } else {
        setError(res);
      }
      setDataToEdit(null);
    });
  };

  const deleteData = (id) => {
    console.log(id);
    let isDelete = confirm(
      `¿Estás seguro de eliminar el registro con id ${id}?`
    );
    if (isDelete) {
      let endpoint = `${url}/${id}`;

      let options = {
        headers: { "content-type": "application/json" },
      };
      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          let dbFiltered = db.filter((el) => el.id !== id);
          setDb(dbFiltered);
          setError(null);
        } else {
          setError(res);
        }
      });
      setDataToEdit(null);
    }
  };
  let data = {
    db,
    setDb,
    dataToEdit,
    setDataToEdit,
    error,
    loading,
    createData,
    updateData,
    deleteData,
  };

  return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
};

export default CrudContext;
