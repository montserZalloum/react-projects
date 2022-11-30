import React from 'react'
import Card from '../ui/Card'

function Item({title,id}) {
  return (
    <Card>
        <p>{id}</p>
        <h3>{title}</h3>
        <button>Add To Favourites</button>
    </Card>
  )
}

export default Item