import React, { useState } from 'react'
import Input from '../ui/Input'

function BikeFilters(props) {
    
  const priceChangeHandler = ({target: {value}}) => {
      props.setPrice(value);
  }
  const nameChangeHandler = ({target: {value}}) => {
      props.setName(value);
  }
  return (
    <div className='filters-box d-flex gap-20'>
        <Input label="Price" id="price" value={props.price} type="number" onChange={priceChangeHandler}  />
        <Input label="Name" id="name" value={props.name} onChange={nameChangeHandler}  />
    </div>
  )
}

export default BikeFilters