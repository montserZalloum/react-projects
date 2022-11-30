import React from 'react'

function Banner(props) {
  return (
    <div className='bg-soft'>
        <h1 className='center font-45'>{props.courseName}</h1>
        <iframe src={props.trailerLink} width="100%" height="300" />
    </div>
  )
}

export default Banner