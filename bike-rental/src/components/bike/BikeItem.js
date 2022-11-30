import React from 'react'
import { Link } from 'react-router-dom'
import StockLabel from './StockLabel'

function BikeItem(props) {
  return (
    <Link to={`/bike-details/${props.id}`} className='bike-item shadow relative radius-15 overflow-hidden pb-20'>
        <figure className='d-flex border-b mb-10'>
            <img className='object-fit' src={props.image} width="100%" height="300" />
        </figure>
        <div className='bike-item-body p-side-10'>
            <h6 className='black-1 font-20 mb-10 center -bold uppercase'>{props.name}</h6>
            <p>Price: {props.price}$</p>
            <StockLabel quantity={props.quantity} />
        </div>
    </Link>
  )
}

export default BikeItem