import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalPrice: 0
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const addedItems = [...state.items, action.item];
    const updatedPrice = state.totalPrice + action.item.amount * action.item.price;
    return {
      items: addedItems,
      totalPrice: updatedPrice
    };
  } else if (action.type === 'REMOVE') {
    const removedItems = state.items.filter(item => item.id !== action.id);
    return {
      items: removedItems,
      totalPrice: state.totalPrice
    };
  }
  return defaultCartState;
};

const CartProvider = ({ children }) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
