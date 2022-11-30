import React from 'react'
import { Link } from 'react-router-dom'

function TableCol(props) {

  const TdContent = ()=> {
    if (props.label === 'Name') {
      return <td><Link className='black-1' to={`/course/${props.courseID}/${props.id}`}>{props.val}</Link></td>
    } else {
      return <td>{props.val}</td>
    }
    
  }

  return (
    <>
      {<TdContent />}
    </>
  )
}

export default TableCol