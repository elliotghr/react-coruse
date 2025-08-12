import { useContext } from "react";
import { CrudTableRow } from "./CrudTableRow";
import CrudContext from "../context/CrudContext";

export const CrudTable = () => {
  // Usamos el contexto CrudContext para acceder a las funciones
  const { db: data } = useContext(CrudContext);

  return (
    <div>
      <h3>Tabla de datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => {
              return <CrudTableRow key={el.id} el={el} />;
            })
          ) : (
            <tr>
              <td colSpan="3">No hay datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
