import React from 'react'
import Header from './Header'
import SideNav from './SideNav'
import AdminWrapper from './AdminWrapper'
import AdminPageHeader from './AdminPageHeader'
function AdminLayout(props) {
  return (
    <>
      <Header />
      <div className='d-flex admin-page-wrapper'>
        <SideNav />
        <AdminWrapper>
          {props.title && <AdminPageHeader title={props.title}>{props.header}</AdminPageHeader>}
          {props.children}
        </AdminWrapper>
      </div>
    </>
  )
}

export default AdminLayout