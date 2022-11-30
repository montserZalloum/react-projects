import React from 'react'
import Notifications from '../ui/Notifications'
import AdminPageWrapper from './AdminPageWrapper'
import SideNav from './SideNav'

function AdminLayout(props) {
  return (
    <div className='d-flex'>
        <SideNav />
        <AdminPageWrapper>{props.children}</AdminPageWrapper>
        <Notifications />
    </div>
  )
}

export default AdminLayout