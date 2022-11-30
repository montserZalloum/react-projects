import React from 'react'

function AdminWrapper(props) {
  return (
    <div className='admin-layout-wrapper pt-20 p-side-20 flex-1'>
        {props.children}
    </div>
  )
}

export default AdminWrapper