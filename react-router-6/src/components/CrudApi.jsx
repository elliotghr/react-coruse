import React, { useState, useEffect } from "react";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { helpHttp } from "../helpers/helpHttp";
import { Loader } from "./Loader";
import { Message } from "./Message";
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";

export default function CrudApi() {
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
        console.log(res.err);
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

  return (
    <>
      <HashRouter basename="/santos">
        <header>
          <h2>CRUD API con rutas</h2>
          <nav>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Santos
            </NavLink>
            <NavLink
              to="/agregar"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Agregar
            </NavLink>
          </nav>
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <>
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
              </>
            }
          />
          <Route
            path="/agregar"
            element={
              <CrudForm
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
              />
            }
          />
          <Route
            path="/editar/:id"
            element={
              <CrudForm
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
              />
            }
          />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </HashRouter>
      {/* <article className="grid-1-2"></article> */}
    </>
  );
}
