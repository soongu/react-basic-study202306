import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredPrice, setEnteredPrice] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (e) => {
    // console.log(e.target.value);
    setEnteredTitle(e.target.value);
  };

  const priceChangeHandler = e => {
    setEnteredPrice(e.target.value);
  };
  const dateChangeHandler = e => {
    setEnteredDate(e.target.value);
  };

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Price</label>
          <input type='number' min='100' step='100' onChange={priceChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2025-12-31' onChange={dateChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;