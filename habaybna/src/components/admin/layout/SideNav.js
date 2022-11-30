import React from 'react'
import { Link } from 'react-router-dom'

function SideNav() {
  return (
    <div className='side-nav w-20 bg-soft d-flex flex-column'>
        <Link className='black-1 pt-10 pb-10 p-side-10' to="/admin">Home</Link>
        <Link className='black-1 pt-10 pb-10 p-side-10' to="/admin/users">Users</Link>
        <Link className='black-1 pt-10 pb-10 p-side-10' to="/admin/courses">Courses</Link>
    </div>
  )
}

export default SideNav