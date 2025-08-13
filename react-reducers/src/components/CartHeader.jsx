export const CartHeader = ({ clearCart, total }) => {
  let style = {
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <div style={style}>
      <h3>Total: ${total}</h3>
      <button onClick={clearCart}>Limpiar Carrito</button>
    </div>
  );
};
