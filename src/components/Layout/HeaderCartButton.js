import React, { useContext, useEffect, useState } from "react";

import styles from "./HeaderCartButton.module.scss";

import CartIcon from '../Cart/CartIcon';
import CartContext from "../../store/cart-context";

const HeaderCartButton = ({ onClick }) => {
  const [btnIsHighlighed, setBtnIsHighlighed] = useState(false);
  const { items } = useContext(CartContext);
  const { button, icon, badge, bump } = styles;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0);

  const btnClassName = `${button} ${btnIsHighlighed ? bump : ''}`;

  useEffect(() => {
    if (items.length === 0) return;
    setBtnIsHighlighed(true);

    // 애니메이션 지속시간이 300밀리초라 재생 후에 지워줌
    const timer = setTimeout(() => {
      setBtnIsHighlighed(false);
    }, 300);

    // 엄청빠르게 누르면 애니메이션이 중첩됨 그걸 방지
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClassName} onClick={onClick}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
