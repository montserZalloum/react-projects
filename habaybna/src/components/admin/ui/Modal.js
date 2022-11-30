import React from 'react'
import ReactDOM from 'react-dom';
const portal = document.getElementById('modal-root');
function Modal(props) {
  if (!props.isOpen) return null
  return ReactDOM.createPortal(
    <div className='modal-box'>
        <div className='modal-overlay' onClick={props.onClose}></div>
        <div className='modal-content'>{props.children}</div>
    </div>
  ,portal)
}

export default Modal