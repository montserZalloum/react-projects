import React from 'react'
import ProductCard from './ProductCard'

export default function Homepage() {
  return (
    <div className='mt-30' >
        <div className='container'>
            <h1 className='center'>Games</h1>
            <div className="d-flex space-between">
                <ProductCard />
            </div>
        </div>
    </div>
  )
}
