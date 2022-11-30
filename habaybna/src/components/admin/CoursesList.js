import { useState } from "react";
import { Link } from "react-router-dom";
import RemoveUserModal from "./ModalRemoveUser";


function CoursesList(props) {
  
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
                  <Link to={`/admin/courses/${item.id}`} className="btn btn-main font-15 p-side-10">Edit</Link>
                  <button onClick={()=>{toggleRemoveModal();setSelectedUserID(item.id)}} className="btn btn-danger">Remove</button>
                  <Link className="btn p-side-10 font-15 btn-3" to={`/admin/courses/${item.id}/lessons`}>Lessons</Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <RemoveUserModal 
        isOpen={showRemoveModal} 
        userID={selectedUserID}
        from="courses"
        onRemoveUser={props.onRemoveUser}
        onClose={toggleRemoveModal}  />
    </>
  );
}

export default CoursesList;
