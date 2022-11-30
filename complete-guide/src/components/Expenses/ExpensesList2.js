import ExpenseItem from "./ExpenseItem";
function ExpensesList2({ items }) {

  let expensesContent = <p>No items</p>;
  if (items.length > 0) {
    expensesContent =
      items.map((el) => {
        return (
          <ExpenseItem
            key={el.id}
            title={el.title}
            date={el.date}
            amount={el.amount}
          />
        );
      });
  }

  return (
    <>
      {expensesContent}
    </>
  );
}

export default ExpensesList2;
