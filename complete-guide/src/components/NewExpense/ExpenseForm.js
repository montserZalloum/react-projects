import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const cleanFormObj = {
    title: "",
    amount: "",
    date: "",
  };
  const [userInput, setUserInput] = useState(cleanFormObj);
  const inputChangeHandler = (e) => {
    const { id } = e.target;
    setUserInput({
      ...userInput,
      [id]: e.target.value,
    });
    
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSaveExpenseData(userInput)
    setUserInput(cleanFormObj);
    props.onCloseFrom()
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            id="title"
            value={userInput.title}
            onChange={inputChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            id="amount"
            value={userInput.amount}
            onChange={inputChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            id="date"
            min="2019-01-01"
            value={userInput.date}
            onChange={inputChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Submit</button>
        <button type="button" onClick={props.onCloseFrom}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
