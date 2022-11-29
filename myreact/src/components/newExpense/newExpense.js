import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./newExpense.css";
function NewExpense(props) {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
}

export default NewExpense;
