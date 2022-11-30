import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import './ExpenseItem.css'
import { useState } from 'react';

function ExpenseItem({title,amount,date}) {

  const [newTitle,setNewTitle] = useState(title)

    const clickHandler = () => {
      setNewTitle('updated')
    }

  return (
    <Card className='expense-item'>
        
      <ExpenseDate date={date} />

      <div className='expense-item__description'>
        <h2>{newTitle }</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clickHandler}>Change style</button>
    </Card>
  );
}

export default ExpenseItem;
