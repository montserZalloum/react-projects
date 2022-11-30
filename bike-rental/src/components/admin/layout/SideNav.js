import React from 'react'
import { Link } from 'react-router-dom'

function SideNav() {
  return (
    <div className='w-25 bg-soft shadow admin-sidenav p-side-10 d-flex flex-column border-r'>
        <Link className='pt-10 pb-10' to="/admin/users">Users</Link>
        <Link className='pt-10 pb-10' to="/admin/bikes">Bikes</Link>
        <Link className='pt-10 pb-10' to="/admin/orders">Orders</Link>
    </div>
  )
}

export default SideNav