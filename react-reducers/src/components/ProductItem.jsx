export const ProductItem = ({ data, addToCart }) => {
  let { id, name, price } = data;

  let style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: "1rem",
    padding: "10px",
    marginBottom: "10px",
  };
  return (
    <div className="item">
      <h4>{name}</h4>
      <p>Precio: ${price}</p>
      <button onClick={() => addToCart(id)}>Agregar al carrito</button>
    </div>
  );
};
