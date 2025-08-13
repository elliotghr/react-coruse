import React, { useReducer } from "react";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";
import { ProductItem } from "./ProductItem";
import { CartItem } from "./CartItem";
import { TYPES } from "../actions/shoppingActions";
import { CartHeader } from "./CartHeader";

export const ShoppingCart = () => {
  // Initialize the reducer with the initial state
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  //   Destructure products and cart from the state
  const { products, cart, total } = state;

  //   Define action dispatch functions
  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    dispatch({ type: TYPES.SHOW_TOTAL });
  };
  const removeOneFromCart = (id) => {
    dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    dispatch({ type: TYPES.SHOW_TOTAL });
  };
  const removeAllFromCart = (id) => {
    dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    dispatch({ type: TYPES.SHOW_TOTAL });
  };
  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
    dispatch({ type: TYPES.SHOW_TOTAL });
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <section className="cart-container">
        <div className="products">
          <h2>Productos</h2>
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
        </div>
        <div className="cart">
          <h2>Carrito</h2>
          <article className="box">
            {cart.length > 0 ? (
              <CartHeader clearCart={clearCart} total={total} />
            ) : null}
            <div className="grid-responsive">
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
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};
