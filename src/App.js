import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: 1, title: "냠냠치킨", price: 19000, date: new Date(2023, 6 - 1, 3) },
  { id: 2, title: "양파", price: 5000, date: new Date(2023, 6 - 1, 7) },
  { id: 3, title: "포도", price: 20000, date: new Date(2023, 6 - 1, 21) },
  { id: 4, title: "오렌지", price: 15000, date: new Date(2023, 6 - 1, 22) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // console.log('In App.js :', expense);
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
