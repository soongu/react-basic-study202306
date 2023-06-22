import React from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    { id: 1, title: "냠냠치킨", price: 19000, date: new Date(2023, 6 - 1, 3) },
    { id: 2, title: "양파", price: 5000, date: new Date(2023, 6 - 1, 7) },
    { id: 3, title: "포도", price: 20000, date: new Date(2023, 6 - 1, 21) },
    { id: 4, title: "오렌지", price: 15000, date: new Date(2023, 6 - 1, 22) },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
