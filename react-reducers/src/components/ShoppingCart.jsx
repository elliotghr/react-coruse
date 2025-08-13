import React, { useReducer } from "react";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";
import { ProductItem } from "./ProductItem";
import { CartItem } from "./CartItem";
import { TYPES } from "../actions/shoppingActions";

export const ShoppingCart = () => {
  // Initialize the reducer with the initial state
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  //   Destructure products and cart from the state
  const { products, cart } = state;

  //   Define action dispatch functions
  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  const removeOneFromCart = (id) => {
    dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
  };
  const removeAllFromCart = (id) => {
    dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
  };
  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

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
      <article className="box">
        {cart.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          cart.map((item, index) => (
            <CartItem
              key={index}
              data={item}
              removeOneFromCart={removeOneFromCart}
              removeAllFromCart={removeAllFromCart}
            />
          ))
        )}
        <button onClick={clearCart}>Limpiar Carrito</button>
      </article>
    </div>
  );
};
