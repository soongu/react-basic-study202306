import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedPrice =
      state.totalPrice + action.item.amount * action.item.price;

    /* 
    이 부분은 수정이 필요함 처음 MealItem컴포넌트에서 추가할 때는 이 로직이 맞으나
    기존에 추가된 음식에서 장바구니에서 더 추가할때는 기본 객체에서 amount만 +1을 해줘야 함
    따라서 이미 추가된 음식인지의 여부를 확인해야 함.
    */
    const index = state.items.findIndex(item => item.id === action.item.id);
    const existingItems = [...state.items];
    const existingItem = existingItems[index];

    let addedItems;
    if (index === -1) {
      // 신규 아이템
      addedItems = [...state.items, action.item];
    } else {
      // 기존 아이템
      existingItem.amount += action.item.amount;
      addedItems = [...existingItems];
    }

    return {
      items: addedItems,
      totalPrice: updatedPrice,
    };
  } else if (action.type === "REMOVE") {
    
    // 우선 해당 삭제 대상의 amount가 몇인지 판단해야함
    // 1보다 크면 수량을 1개 내려주고 1이면 배열에서 제거해야 함.
    const index = state.items.findIndex(item => item.id === action.id);

    const existingItems = [...state.items];
    const existingItem = existingItems[index];
    const targetCartItemAmount = existingItem.amount;
    // 전체 가격 갱신
    const updatedTotalPrice = state.totalPrice - existingItem.price;

    let removedItems;
    if (targetCartItemAmount === 1) {
      removedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      existingItem.amount--;
      removedItems = [...existingItems];
    }

    return {
      items: removedItems,
      totalPrice: updatedTotalPrice,
    };
  }
  return defaultCartState;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
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
