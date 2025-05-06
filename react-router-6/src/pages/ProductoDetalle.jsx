import { useParams, useNavigate } from "react-router-dom";

export const ProductoDetalle = ({ productos }) => {
  const { id } = useParams(); // Extraemos el id de los parámetros de la URL
  // Buscamos el producto por su id
  const producto = productos.find((producto) => producto.id === parseInt(id));

  const navigate = useNavigate(); // Hook para navegar entre páginas
  const IrAtras = () => navigate(-1); // Navegamos a la página anterior

  return (
    <section>
      <h2>Detalle del Producto </h2>
      <h3>{producto.nombre}</h3>
      <p>Precio: ${producto.precio}</p>
      <button onClick={IrAtras}>Regresar</button>
    </section>
  );
};
