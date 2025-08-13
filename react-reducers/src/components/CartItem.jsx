import React from "react";

export const CartItem = ({ data, removeOneFromCart, removeAllFromCart }) => {
  if (!data) return null;
  const { id, name, price, quantity } = data;
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <h4>{name}</h4>
      <p>Cantidad: {quantity}</p>
      <p>Precio unitario: ${price}.00</p>
      <p>Total: ${price * quantity}.00</p>
      <button onClick={() => removeOneFromCart(id)}>Eliminar uno</button>
      <button onClick={() => removeAllFromCart(id)}>Eliminar todos</button>
    </div>
  );
};
