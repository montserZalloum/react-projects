import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header bg-soft-white p-20'>
        <div className="gap-15 d-flex">
            <Link to='/' className='black'>
                Home
            </Link>
            <Link to='/event' className='black'>
                Event
            </Link>
            <Link to='/register' className='black'>
                Register
            </Link>
            <Link to='/cms' className='black'>
                CMS
            </Link>
            <Link to='/games' className='black'>
                Games
            </Link>
        </div>
    </div>
  )
}
