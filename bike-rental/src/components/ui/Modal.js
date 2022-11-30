import React from "react";
import ReactDOM from 'react-dom';

function Modal(props) {
  if (!props.isOpen) return null;

  const portal = document.getElementById('modal-root');

  return ReactDOM.createPortal(
    <aside className="modal-box">
      <div className="modal-overlay" onClick={props.onClose}></div>
      <div className="modal-content">{props.children}</div>
    </aside>
  ,portal);
}

export default Modal;
