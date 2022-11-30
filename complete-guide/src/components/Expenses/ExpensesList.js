import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList2 from "./ExpensesList2";

function ExpensesList({ items }) {
  const [selectedYear, setSelectedYear] = useState("2021");

  const changeYearHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = items.filter((i) => {
    return i.date.getFullYear() == selectedYear;
  });

  return (
    <Card>
      <ExpensesFilter
        selected={selectedYear}
        onChangeYear={changeYearHandler}
      />
      <ExpensesChart expenses={filteredExpenses}  />
      <ExpensesList2 items={filteredExpenses} />
    </Card>
  );
}

export default ExpensesList;
