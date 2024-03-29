import {useState} from 'react'

function Button(props) {
  return (
    <button type={props.type || 'button'} onClick={props.onClick} >{props.children}</button>
  )
}

export default Button