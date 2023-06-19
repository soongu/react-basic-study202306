import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = () => {
  const expenseDate = new Date(2023, 6, 19);
  const expenseTitle = "냠냠치킨";
  const expensePrice = 19000;

  const makeFormattedDate = () => {
    const year = expenseDate.getFullYear();
    const month = expenseDate.getMonth(); // 자바스크립트에서는 월이 0부터 시작합니다.
    const date = expenseDate.getDate();

    return `${year}년 ${month.toString().padStart(2, "0")}월 ${date.toString().padStart(2, "0")}일`;
  };


  const formattedPrice = new Intl.NumberFormat("ko-KR").format(expensePrice);

  return (
    <div className="expense-item">
      <div>{makeFormattedDate()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{formattedPrice}원</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
