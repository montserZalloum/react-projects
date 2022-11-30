import React, { useRef } from 'react'
import Input from '../../UI/Input'

function MealItemForm(props) {
  const amountRef = useRef()
  const submitForm = (e)=> {
    e.preventDefault();
    props.onAddToCart(+amountRef.current.value)
  }

  return (
    <form onSubmit={submitForm}>
        <Input label="Amount" 
          ref={amountRef}
          input={{
            id: 'i_' + props.id,
            type:"number",
            min: 1,
            max: 5,
            defaultValue: 1
        }} />
        <button className='btn'>+ Add</button>
    </form>
  )
}

export default MealItemForm