import React from 'react'

function CrudPageHeader(props) {
  return (
    <div className='d-flex align-center space-between pt-20 crud-header-box'>
        <h1 className='crud-page-title main-color font-28'>{props.title}</h1>
        {props.children}
    </div>
  )
}

export default CrudPageHeader