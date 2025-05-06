import { useParams } from "react-router-dom";

export const ServicioDetalle = ({ servicios }) => {
  const { id } = useParams(); // Extraemos el id de los parámetros de la URL
  // Buscamos el servicio por su id
  const servicio = servicios.find((servicio) => servicio.id === parseInt(id));

  return (
    <section>
      <h2>Detalle del servicio </h2>
      <h3>{servicio.nombre}</h3>
      <p>Precio: ${servicio.precio}</p>
    </section>
  );
};
