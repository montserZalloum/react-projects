import React, { ReactNode } from 'react'
import SideNav from './SideNav'

const AdminLayout:React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <div className='d-flex space-between'>
        <SideNav />
        <div className='page-wrapper w-70 p-side-10'>
            {children}
        </div>
    </div>
  )
}

export default AdminLayout