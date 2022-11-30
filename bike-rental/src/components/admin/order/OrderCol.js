import React from "react";
import { Link } from "react-router-dom";

function OrderCol(props) {
  return (
    <tr>
      <td>{props.userName}</td>
      <td>{props.bikeName}</td>
      <td>{props.price}</td>
      <td><img src={props.image} width="100px" /></td>
      <td>{new Date(props.from).toISOString().slice(0,10)}</td>
      <td>{new Date(props.to).toISOString().slice(0,10)}</td>
      <td>
        <div className="d-flex gap-5 h-100">
          <button
            onClick={() => props.onRemove(props.id)}
            className="btn-danger btn"
          >
            Remove
          </button>
          <Link
            className="btn btn-3 font-16 p-side-10"
            to={`/admin/order/${props.id}`}
          >
            Edit
          </Link>
        </div>
      </td>
    </tr>
  );
}

export default OrderCol;
