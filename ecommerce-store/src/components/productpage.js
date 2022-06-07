import React from 'react'

export default function Productpage() {
  return (
    <div className='mt-30'>
      <div className='container d-flex space-between'>
        <img src={`https://picsum.photos/200?random=${Math.random()}`} className="w-40" />
        <div className='w-50'>
          <h1>Games</h1>
        </div>
      </div>
    </div>
  )
}
