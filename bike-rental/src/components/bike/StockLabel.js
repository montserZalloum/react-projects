import React from 'react'

function checkStock(props) {
    if (props.quantity > 0) {
        return <p className='main-color font-20 -bold'>Quantity: {props.quantity}</p>
    } else {
        return <p>Out of stock</p>
    }
}

export default checkStock