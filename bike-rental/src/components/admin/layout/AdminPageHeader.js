import React from 'react'

function AdminPageHeader(props) {
  return (
    <div className='header-title-box d-flex space-between mb-20'>
        <h3>{props.title}</h3>
        {props.children}
    </div>
  )
}

export default AdminPageHeader