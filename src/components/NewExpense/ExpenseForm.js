import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpense }) => {
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredPrice, setEnteredPrice] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredPrice: "",
    enteredDate: "",
  });

  const titleChangeHandler = (e) => {
    // console.log(e.target.value);
    // setEnteredTitle(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value
    // });

    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    });
  };

  const priceChangeHandler = (e) => {
    // setEnteredPrice(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredPrice: e.target.value
    // });

    setUserInput((prevState) => {
      return { ...prevState, enteredPrice: e.target.value };
    });
  };
  const dateChangeHandler = (e) => {
    // setEnteredDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value
    // });

    setUserInput((prevState) => {
      return { ...prevState, enteredDate: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(userInput);

    const expense = {
      title: userInput.enteredTitle,
      price: userInput.enteredPrice,
      date: new Date(userInput.enteredDate),
    };
    // console.log(expense);

    setUserInput({
      enteredTitle: "",
      enteredPrice: "",
      enteredDate: "",
    });

    onSaveExpense(expense);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="100"
            step="100"
            value={userInput.enteredPrice}
            onChange={priceChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
