import React, { useState, useEffect, useReducer } from "react";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { helpHttp } from "../helpers/helpHttp";
import { Loader } from "./Loader";
import { Message } from "./Message";
import { crudInitialState, crudReducer } from "../reducers/crudReducer";
import { TYPES } from "../actions/crudActions";

export default function CrudApi() {
  // const [db, setDb] = useState(null);
  const [state, dispatch] = useReducer(crudReducer, crudInitialState);
  const { db } = state; // Extraemos db del estado
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
        console.log(res);
        if (!res.err) {
          // setDb(res);
          dispatch({ type: TYPES.READ_ALL_DATA, payload: res });
          setError(null);
        } else {
          // setDb(null);
          dispatch({ type: TYPES.NO_DATA });
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
        // setDb([...db, res]);
        dispatch({ type: TYPES.CREATE_DATA, payload: res });
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
        // setDb(newData);
        dispatch({ type: TYPES.UPDATE_DATA, payload: res });
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
          // setDb(dbFiltered);
          dispatch({ type: TYPES.DELETE_DATA, payload: id });
          setError(null);
        } else {
          setError(res);
        }
      });
      setDataToEdit(null);
    }
  };

  return (
    <>
      <h2>CRUD API</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && (
          <CrudTable
            data={db}
            deleteData={deleteData}
            setDataToEdit={setDataToEdit}
          />
        )}
      </article>
    </>
  );
}
