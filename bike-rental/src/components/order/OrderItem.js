import React from 'react'

function OrderItem({name,price,image,from,to}) {
    
  return (
    <tr>
        <td>{name}</td>
        <td><img width="100" src={image} /></td>
        <td>{price}</td>
        <td>{new Date(from).toISOString().slice(0,10)}</td>
        <td>{new Date(to).toISOString().slice(0,10)}</td>
    </tr>
  )
}

export default OrderItem