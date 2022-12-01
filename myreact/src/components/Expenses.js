import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  function filterChangeYearHandler(selectedYear) {
    console.log("expenses.js");
    console.log(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeYear={filterChangeYearHandler} />
        <ExpenseItem
          title={props.lst[0].title}
          amount={props.lst[0].amount}
          date={props.lst[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.lst[1].title}
          amount={props.lst[1].amount}
          date={props.lst[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.lst[2].title}
          amount={props.lst[2].amount}
          date={props.lst[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.lst[3].title}
          amount={props.lst[3].amount}
          date={props.lst[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
