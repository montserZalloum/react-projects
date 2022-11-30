import React from 'react'
import Modal from '../../ui/Modal'

function RemoveModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <h1 className='center pt-20'>Are You Sure?</h1>
        <div className='d-flex space-around mt-20 pb-20'>
            <button onClick={props.onSubmitRemove} className='btn w-40 font-18 pt-10 pb-10'>Yes</button>
            <button onClick={props.onClose} className='btn btn-danger w-40 font-18 pt-10 pb-10'>Dismiss</button>
        </div>
    </Modal>
  )
}

export default RemoveModal