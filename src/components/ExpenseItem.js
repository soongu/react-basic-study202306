import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  console.log(props);

  const makeFormattedDate = () => {
    const year = props.date.getFullYear();
    const month = props.date.getMonth(); // 자바스크립트에서는 월이 0부터 시작합니다.
    const date = props.date.getDate();

    return `${year}년 ${month.toString().padStart(2, "0")}월 ${date.toString().padStart(2, "0")}일`;
  };


  const formattedPrice = new Intl.NumberFormat("ko-KR").format(props.price);

  return (
    <div className="expense-item">
      <div>{makeFormattedDate()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{formattedPrice}원</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
