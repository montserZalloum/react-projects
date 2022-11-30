import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const saveExpenseDataHandler = (expenseData) => {
    const data = { ...expenseData, id: Math.random() };
    props.onAddExpense(data);
  };

  const toggleAddExpenseHandler = () => {
    setIsFormOpen((prev) => {
      return !prev;
    });
  };

  return (
    <div className="new-expense">
      {!isFormOpen ? (
        <button onClick={toggleAddExpenseHandler}>New Expense</button>
      ) : (
        <ExpenseForm onCloseFrom={toggleAddExpenseHandler} onSaveExpenseData={saveExpenseDataHandler} />
      )}
    </div>
  );
};

export default NewExpense;
