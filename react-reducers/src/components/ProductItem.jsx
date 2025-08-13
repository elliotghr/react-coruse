export const ProductItem = ({ data, addToCart }) => {
  let { id, name, price } = data;

  let style = {
    border: "1px solid #ccc",
    padding: "10px",
  };
  return (
    <div style={style}>
      <h4>{name}</h4>
      <p>Precio: ${price}</p>
      <button onClick={() => addToCart(id)}>Agregar al carrito</button>
    </div>
  );
};
