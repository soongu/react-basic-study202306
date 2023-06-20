import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  // console.log(props);

  const year = props.date.getFullYear();
  const month = props.date.getMonth();
  const day = props.date.getDay().toString().padStart(2, '0');


  const formattedPrice = new Intl.NumberFormat("ko-KR").format(props.price);

  return (
    <div className="expense-item">
      <div>
        <div>{year}</div>
        <div>{month}월</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{formattedPrice}원</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
