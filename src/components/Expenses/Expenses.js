import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {items
          .filter(item => item.date.getFullYear().toString() === filteredYear)
          .map(({ id, title, price, date }) => (
            <ExpenseItem key={id} title={title} price={price} date={date} />
          ))}
      </Card>
    </div>
  );
};

export default Expenses;
