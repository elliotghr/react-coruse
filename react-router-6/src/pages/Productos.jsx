import { Link, useLocation, useNavigate } from "react-router-dom";

export const Productos = ({ productos }) => {
  console.log(useLocation());
  // Obtenemos el parametro de la URL que nos indica el inicio y fin de los productos a mostrar
  const { search } = useLocation();

  // El objeto URLSearchParams nos permite trabajar con los parámetros de la URL
  // y obtener el valor de los parámetros que nos interesen dados ciertos métodos
  let query = new URLSearchParams(search);
  const LIMIT = 10; // Cantidad de productos a mostrar por página
  let start = query.get("inicio") > 1 ? query.get("inicio") : 1 || 1; // Si no existe el parámetro, se asigna 1
  let end = query.get("fin") || LIMIT; // Si no existe el parámetro, se asigna el valor de LIMIT

  // Si end es menor que el el tamaño de productos, se asigna a end el tamaño de productos, porque 
  // no podemos mostrar más productos de los que existen
  if (parseInt(end) > parseInt(productos.length)) {
    end = productos.length;
  }

  // useNavigate es un hook que nos permite navegar a otras rutas
  // y recibir parámetros por la URL
  let navigate = useNavigate();

  const handlePrev = () => {
    navigate(
      `/productos?inicio=${parseInt(start) - LIMIT}&fin=${
        parseInt(end) - LIMIT
      }`
    );
  };
  const handleNext = () => {
    navigate(
      `/productos?inicio=${parseInt(start) + LIMIT}&fin=${
        parseInt(end) + LIMIT
      }`
    );
  };

  const productosFiltrados = productos.slice(
    parseInt(start) - 1,
    parseInt(end)
  ); // Filtramos los productos según el inicio y fin

  return (
    <section>
      <h2>Productos</h2>
      <ul>
        {productosFiltrados.map((producto) => (
          <li key={producto.id}>
            <Link to={`/productos/${producto.id}`}>{producto.nombre}</Link>
          </li>
        ))}
      </ul>
      <p>
        Mostrando productos del <b>{start}</b> al <b>{end}</b>
      </p>
      {start > LIMIT && <button onClick={handlePrev}>Atrás</button>}
      {end < productos.length && (
        <button onClick={handleNext}>Siguiente</button>
      )}
    </section>
  );
};
