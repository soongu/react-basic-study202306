import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

  const formattedPrice = new Intl.NumberFormat('ko-KR').format(props.price);

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{formattedPrice}원</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
