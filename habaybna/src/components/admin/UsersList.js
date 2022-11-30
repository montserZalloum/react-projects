import { useState } from "react";
import { Link } from "react-router-dom";
import RemoveUserModal from "./ModalRemoveUser";


function Users(props) {
  
  const [showRemoveModal,setShowRemoveModal] = useState(false)
  const [selectedUserID,setSelectedUserID] = useState(null)
  const toggleRemoveModal = ()=> {
    setShowRemoveModal(!showRemoveModal)
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <div className="d-flex gap-5">
                  <Link to={`/admin/users/${item.id}`} className="btn btn-main font-15 p-side-10">Edit</Link>
                  <button onClick={()=>{toggleRemoveModal();setSelectedUserID(item.id)}} className="btn btn-danger">Remove</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <RemoveUserModal 
      isOpen={showRemoveModal} 
      userID={selectedUserID}
      onRemoveUser={props.onRemoveUser}
      onClose={toggleRemoveModal}  />
    </>
  );
}

export default Users;
