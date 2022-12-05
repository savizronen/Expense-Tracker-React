import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./newExpense.css";
const NewExpense = (props) => {
  const [isEnding, setIsending] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsending(true);
  };

  const stopEditingHandler = () => {
    setIsending(false);
  };

  return (
    <div className="new-expense">
      {!isEnding && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEnding && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCansel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
