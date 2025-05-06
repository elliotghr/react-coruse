import { Link } from "react-router-dom";

export function ServiciosLista({ servicios }) {
  return (
    <>
      <h2>Lista de Servicios</h2>
      <p>Estos son los servicios que ofrecemos:</p>
      <ul>
        {servicios.map((servicio) => (
          <li key={servicio.id}>
            <Link to={`/servicios/${servicio.id}`}>{servicio.nombre}</Link>
          </li>
        ))}
      </ul>
      <p>
        Si deseas más información sobre un servicio, no dudes en contactarnos.
      </p>
    </>
  );
}
