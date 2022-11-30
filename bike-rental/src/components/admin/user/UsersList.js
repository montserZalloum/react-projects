import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useHttp from "../../../hooks/useHttp";
import { uiActions } from "../../../store/ui-slice";
import Modal from "../../ui/Modal";
import RemoveModal from "../ui/RemoveModal";
import UserCol from "./UserCol";

function UsersList(props) {
    const {sendRequest} = useHttp();
    const dispatch = useDispatch()
    const [selectedToRemove,setSelectedToRemove] = useState(null);


    const onRemoveHandler = (id) => {
        setSelectedToRemove(id)
    }

    const submitRemoveHandler = () => {
        sendRequest({method: 'DELETE',url:`user/${selectedToRemove}`},afterRemoveUser);
    }

    const afterRemoveUser = () => {
        dispatch(uiActions.showNotification('User Removed Successfully!'));
        onRemoveHandler(null);
        props.refreshData()
    }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((col,index) => {
            return <UserCol
              key={col._id}
              id={col._id}
              name={col.name}
              email={col.email}
              onRemove={onRemoveHandler}
            />;
          })}
        </tbody>
      </table>
      <RemoveModal onSubmitRemove={submitRemoveHandler} onClose={()=>onRemoveHandler(null)} isOpen={selectedToRemove !== null}  />
    </>
  );
}

export default UsersList;
