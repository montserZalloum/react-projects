import React, { useReducer } from 'react'
import CartContext from './cart-context'

const defaultState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state,action) => {
    if (action.type == 'ADD') {
        state.totalAmount = state.totalAmount + action.item.amount
        const updatedItems = [...state.items].concat(action.item)
        return {
            items: updatedItems,
            totalAmount: state.totalAmount,
        }
    }

    return defaultState
}

function CartProvider(props) {
    const [cartState,dispatchCart] = useReducer(cartReducer,defaultState)

    const addItemToCartHandler = (item) => {
        dispatchCart({
            type: 'ADD',
            item
        })
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCart({
            type: 'REMOVE',
            id
        })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider