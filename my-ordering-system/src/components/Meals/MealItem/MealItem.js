import React, { useContext } from 'react'
import cartContext from '../../../store/cart-context'
import MealItemForm from './MealItemForm'

function MealItem(props) {
  const cartCtx = useContext(cartContext)
  const addToCartHandler = (amount) => {
    cartCtx.addItem({amount,name:props.name,id: 'x'+Math.random(),price:props.price})
  }

  return (
    <div className='d-flex space-between'>
        <div>
            <h2>{props.name}</h2>
            <h4>{props.description}</h4>
            <h6>{props.price}</h6>
        </div>
        <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
    </div>
  )
}

export default MealItem