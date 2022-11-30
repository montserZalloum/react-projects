import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import CoursesList from "../../../components/admin/CoursesList";
import CrudTemplate from "../../../components/admin/ui/CrudTemplate";
import useHttp from "../../../hooks/useHttp";

function UsersList() {
  const [courses,setCourses] = useState([])

  const headerOptions = <Link to="/admin/courses/add">New Course</Link>;
  
  const { isLoading, sendRequest: getRequest } = useHttp();

  useEffect(() => {
    getData()
  }, [getRequest]);

  function getData(){
    const storeData = (data) => {
      setCourses(data)
    }
    
    getRequest({
      method: "GET",
      url: "courses"
    },storeData)
  }
  return (
    <CrudTemplate title="Courses" header={headerOptions}>
      {isLoading && <h1>Loading ...</h1>}
      {!isLoading && <CoursesList data={courses} onRemoveUser={getData} />}
      
    </CrudTemplate>
  );
}

export default UsersList;
