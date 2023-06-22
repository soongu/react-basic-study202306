

import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  
  // let title = props.title;
  const [title, setTitle] = useState(props.title);
  
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(props.price);
  
  const clickHandler = () => {
    // console.log('click!!!');
    // title = 'gggg';
    setTitle('gggg');
  };
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{formattedPrice}원</div>
      </div>
      <button onClick={clickHandler}>수정</button>
    </Card>
  );
};

export default ExpenseItem;
