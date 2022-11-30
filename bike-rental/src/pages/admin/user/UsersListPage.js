import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../../../components/admin/layout/AdminLayout";
import UsersList from "../../../components/admin/user/UsersList";
import useHttp from "../../../hooks/useHttp";

function UsersListPage() {
  const { isLoading, sendRequest } = useHttp();
  
  const [usersList,setUsersList] = useState([]);

  const headerOptions = (
    <Link to="/admin/users/new" className="btn w-25 pt-10 pb-10">
      New
    </Link>
  );

  useEffect(() => {
    getData()
  }, []);

  const getData = () => {
    sendRequest({ method: "GET" ,url: "user"},storeData);
  }

  const storeData = (data) => {
    setUsersList(data)
  }


  let content = ''
  if (isLoading) 
    content = <h1>isLoading</h1>
  else if (usersList.length === 0) 
    content = <h1>No Data</h1>
  else
    content = <UsersList refreshData={getData} data={usersList} />


  return (
    <AdminLayout title="Users List" header={headerOptions}>
      {content}
    </AdminLayout>
  );
}

export default UsersListPage;
