import React from "react";
import TableCol from "./TableCol";
function LessonsTable(props) {
  console.log(props.data)
  console.log(props.labels)
  return (
    <table>
      <thead>
        <tr>
          {props.labels.map((th) => (
            <th key={th}>{th}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((tr, idx) => {
          return (
            <tr key={idx}>
              {props.labels.map((td) => (
                <TableCol key={`${td}${tr.id}`} courseID={tr.courseID} id={tr.id} label={td} val={tr[td.toLowerCase()]} />
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default LessonsTable;
