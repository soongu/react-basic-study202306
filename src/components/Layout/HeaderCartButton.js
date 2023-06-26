import React, { useContext } from "react";

import styles from "./HeaderCartButton.module.scss";

import CartIcon from '../Cart/CartIcon';
import CartContext from "../../store/cart-context";

const HeaderCartButton = ({ onClick }) => {
  const { button, icon, badge } = styles;
  const { items } = useContext(CartContext);

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0);

  return (
    <button className={button} onClick={onClick}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
