import React from "react";
import { Link } from "react-router-dom";

function UserCol(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>
        <div className="d-flex gap-5 h-100">
          <button onClick={()=>props.onRemove(props.id)} className="btn-danger btn">Remove</button>
          <Link
            className="btn btn-3 font-16 p-side-10"
            to={`/admin/user/${props.id}`}
          >
            Edit
          </Link>
        </div>
      </td>
    </tr>
  );
}

export default UserCol;
