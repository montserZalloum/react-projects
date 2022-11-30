import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
  return (
    <Link to={props.link} className='card-item bg-white shadow radius-8 overflow-hidden d-flex flex-column'>
        <img className='radius-8 object-fit' src={`https://picsum.photos/200?q=${props.name}`} />
        <div className='pt-10 pb-10 p-side-10'>
          <p className='main-color'>{props.label}</p>
          <p className='font-26 bold black-1'>{props.name}</p>
        </div>
    </Link>
  )
}

export default CardItem