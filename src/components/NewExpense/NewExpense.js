import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({onAddExpense}) => {

  const [expenseToggle, setExpenseToggle] = useState(false);

  const saveExpenseHandler = expense => {
    const newExpense = {
      ...expense,
      id: Math.floor(Math.random() * 99999)
    };
    // console.log(newExpense);

    onAddExpense(newExpense);
    setExpenseToggle(false);
  };

  const startInsertModeHandler = () => {
    setExpenseToggle(true);
  };
  const stopInsertModeHandler = () => {
    setExpenseToggle(false);
  };

  let newExpenseContent = <button onClick={startInsertModeHandler}>Add New Expense</button>;

  if (expenseToggle) {
    newExpenseContent = <ExpenseForm onSaveExpense={saveExpenseHandler} onToggle={stopInsertModeHandler} />;
  }

  return (
    <div className='new-expense'>
      {newExpenseContent}
    </div>
  );
};

export default NewExpense;