import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header bg-soft z-1 border-b pt-10 pb-10'>
        <div className='container'>
            <div className='box space-between d-flex align-center'>
                <h1>BIKE RENTAL</h1>
                <Link to='/'>Home</Link>
            </div>
        </div>
    </header>
  )
}

export default Header