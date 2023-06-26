import React from "react";

import styles from "./Cart.module.scss";
import Modal from "../UI/Modal";

const Cart = ({ onClose }) => {
  const {
    'cart-items': cartItemsStyle,
    total,
    actions,
    button,
    'button--alt': btnAlt,
  } = styles;

  const cartItems = (
    <ul className={cartItemsStyle}>
      {[{ id: "c1", name: "스시", amount: 2, price: 50000 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={total}>
        <span>주문 총액</span>
        <span>50,000원</span>
      </div>
      <div className={actions}>
        <button className={btnAlt} onClick={onClose}>닫기</button>
        <button className={button}>주문</button>
      </div>
    </Modal>
  );
};

export default Cart;
