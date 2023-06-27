import React, { useContext } from "react";

import styles from "./Cart.module.scss";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = ({ onClose }) => {
  const {
    "cart-items": cartItemsStyle,
    total,
    actions,
    button,
    "button--alt": btnAlt,
  } = styles;

  const { items, totalPrice, addItem, removeItem } = useContext(CartContext);

  const formatTotalPrice = new Intl.NumberFormat("ko-KR").format(totalPrice);

  const hasItems = items.length > 0;

  const cartAddHandler = item => {
    addItem({...item, amount: 1});
  };
  const cartRemoveHandler = id => {
    removeItem(id);
  };

  const cartItems = (
    <ul className={cartItemsStyle}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          cart={item}
          onRemove={cartRemoveHandler.bind(null, item.id)}
          onAdd={cartAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={total}>
        <span>주문 총액</span>
        <span>{formatTotalPrice}원</span>
      </div>
      <div className={actions}>
        <button className={btnAlt} onClick={onClose}>
          닫기
        </button>
        {hasItems && <button className={button}>주문</button>}
      </div>
    </Modal>
  );
};

export default Cart;
