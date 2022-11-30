import React from 'react'

function AdminPageWrapper(props) {
  return (
    <div className='admin-page-wrapper p-side-10 pt-10 pb-10 w-80'>
        {props.children}
    </div>
  )
}

export default AdminPageWrapper