import React, { useReducer } from "react";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";
import { ProductItem } from "./ProductItem";

export const ShoppingCart = () => {
  // Initialize the reducer with the initial state
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  //   Destructure products and cart from the state
  const { products, cart } = state;

  //   Define action dispatch functions
  const addToCart = (id) => {
    console.log(id);
  };
  const removeOneFromCart = () => {};
  const removeAllFromCart = () => {};
  const clearCart = () => {};

  console.log(products, cart);
  return (
    <div>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              data={product}
              addToCart={addToCart}
            />
          );
        })}
      </article>
      <h3>Carrito</h3>
      <article className="box"></article>
    </div>
  );
};
