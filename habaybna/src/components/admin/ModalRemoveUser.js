import React from "react";
import { useDispatch } from "react-redux";
import useHttp from '../../hooks/useHttp'
import { uiActions } from "../../store/ui-slice";
import Modal from "./ui/Modal";

function RemoveUserModal(props) {
  const dispatch = useDispatch()
  
  const { isLoading, sendRequest: removeUser } = useHttp()
  const removeUserConfig = {
    method: 'DELETE',
  }
  
  const removeUserHandler = () => {

    const cb = ()=> {
      dispatch(uiActions.showNotification(`${props.from} removed successfully!`));
      props.onRemoveUser()
      props.onClose();
    }

    removeUserConfig.url = `${props.from}/${props.userID}`
    removeUser(removeUserConfig,cb)
  }

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <h1 className="center pt-30">Are You Sure?</h1>
        <button className="btn w-50 pt-20 pb-20 w-50 m-side-auto pointer mt-30 mb-30 font-20" onClick={removeUserHandler}>Of Course i am!</button>
      </Modal>
    </>
  );
}

export default RemoveUserModal;
