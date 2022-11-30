import React, { ReactNode } from 'react'
import CrudHeader from './CrudHeader'

const CrudLayout:React.FC<{children: ReactNode,title: string,headerOpts:ReactNode}> = ({children,title,headerOpts}) => {
  return (
    <>
        <CrudHeader title={title} >{headerOpts}</CrudHeader>
        <div className='mt-30 crud-page-body'>
            {children}
        </div>
    </>
  )
}

export default CrudLayout