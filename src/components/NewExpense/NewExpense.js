import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({onAddExpense}) => {

  const saveExpenseHandler = expense => {
    const newExpense = {
      ...expense,
      id: Math.floor(Math.random() * 99999)
    };
    // console.log(newExpense);

    onAddExpense(newExpense);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;