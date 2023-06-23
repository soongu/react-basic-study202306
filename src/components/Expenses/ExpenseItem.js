import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ title, date, price }) => {
  const formattedPrice = new Intl.NumberFormat("ko-KR").format(price);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{formattedPrice}원</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
