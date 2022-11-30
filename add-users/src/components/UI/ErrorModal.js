import React,{useState} from 'react'
import Button from './Button'
import './Modal.css'
function ErrorModal(props) {
    
  return (
    <div>
        <div className="backdrop" onClick={props.onClose}></div>
        <div className="modal">
            <header className="header"><h2>{props.title}</h2></header>
            <div className="content">
                <p>{props.message}</p>
            </div>
            <footer className="actions">
                <Button onClick={props.onClose}>Okay</Button>
            </footer>
        </div>
    </div>
  )
}

export default ErrorModal