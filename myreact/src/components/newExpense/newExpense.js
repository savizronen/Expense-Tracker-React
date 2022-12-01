import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./newExpense.css";
function NewExpense(props) {
  function expenseSaveDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddexpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={expenseSaveDataHandler} />
    </div>
  );
}

export default NewExpense;
