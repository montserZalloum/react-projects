import React from "react";
type Course = {
  id: string;
  courseTitle: string;
};
const CoursesList: React.FC<{ data: Course[] }> = ({ data }) => {
  console.log(data)
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
            <tr>
              <td>item.id</td>
              <td>item.name</td>
            </tr>
        </tbody>
      </table>
    </>
  );
};

export default CoursesList;
