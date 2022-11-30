import React, { ReactNode } from 'react'

const CrudHeader:React.FC<{children?: ReactNode,title:string}> = ({children,title}) => {
  return (
    <div className='d-flex align-center space-between pt-20 crud-header-box'>
        <h1 className='crud-page-title main-color font-28'>{title}</h1>
        {children}
    </div>
  )
}

export default CrudHeader