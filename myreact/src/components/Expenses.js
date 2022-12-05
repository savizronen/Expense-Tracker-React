import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
    console.log("In Expenses.js");
    console.log(selectedYear);
  }

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeYear={filterChangeHandler}
        />
        {filterExpenses.map((expenses) => (
          <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
