import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {
  products: [
    { id: 1, name: "Producto 1", price: 100 },
    { id: 2, name: "Producto 2", price: 200 },
    { id: 3, name: "Producto 3", price: 300 },
    { id: 4, name: "Producto 4", price: 400 },
    { id: 5, name: "Producto 5", price: 500 },
    { id: 6, name: "Producto 6", price: 600 },
    { id: 7, name: "Producto 7", price: 700 },
    { id: 8, name: "Producto 8", price: 800 },
    { id: 9, name: "Producto 9", price: 900 },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      // Find the product by ID
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      //   Check if the product is already in the cart
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem) {
        // If item already in cart, increase quantity
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item.id === product.id) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          }),
        };
      } else {
        // If item not in cart, add it
        return {
          ...state,
          cart: [...state.cart, { ...product, quantity: 1 }],
        };
      }
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      // Find the product by ID in the cart
      const product = state.cart.find(
        (product) => product.id === action.payload
      );

      if (product.quantity <= 1) {
        // If quantity is 1, remove the item from the cart
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== product.id),
        };
      }
      // If quantity is greater than 1, decrease the quantity
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === product.id) {
            return { ...product, quantity: item.quantity - 1 };
          }
          return item;
        }),
      };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART:
      return shoppingInitialState;

    default: {
      return state;
    }
  }
}
