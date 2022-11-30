import React, { useState } from "react";
import { Link } from "react-router-dom";
import RemoveUserModal from "./ModalRemoveUser";
import parse,{domToReact} from 'html-react-parser';
// const listName = "users";
// const labels = ["id", "Name", "Actions"];
// const columns = [
//   "id",
//   "name"
// ];

function TableList(props) {
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [selectedID, setSelectedID] = useState(null);
  const toggleRemoveModal = () => {
    setShowRemoveModal(!showRemoveModal);
  };

  const formatData = (column) => {
    const TDs = [];
    for (let key of props.columns) {
      if (typeof key === "object") {
        if (key.label == "actions") {
          TDs.push(
            <td key={column.id}>
              <div className="d-flex gap-5">
                <Link
                  to={`/admin/${props.listName}/${column.id}`}
                  className="btn btn-main font-15 p-side-10"
                >
                  Edit
                </Link>
                <button
                  onClick={() => {
                    toggleRemoveModal();
                    setSelectedID(column.id);
                  }}
                  className="btn btn-danger"
                >
                  Remove
                </button>
              </div>
            </td>
          );
          
        }
      } else {
        TDs.push(<th key={column.id + key}>{column[key]}</th>);
      }
    }
    return TDs;
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            {props.labels.map((thName) => (
              <th key={thName}>{thName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.data.length ? (
            props.data.map((item) => <tr key={item.id}>{formatData(item)}</tr>)
          ) : (
            <td className="center w-100" colspan="3">
              No Data
            </td>
          )}
        </tbody>
      </table>
      <RemoveUserModal
        isOpen={showRemoveModal}
        userID={selectedID}
        from={props.listName}
        onRemoveUser={props.onRemoveUser}
        onClose={toggleRemoveModal}
      />
    </>
  );
}

export default TableList;
