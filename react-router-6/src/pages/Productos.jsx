import { Link } from "react-router-dom";

export const Productos = ({ productos }) => {
  return (
    <section>
      <h2>Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <Link to={`/productos/${producto.id}`}>{producto.nombre}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
