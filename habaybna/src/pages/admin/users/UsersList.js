import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import CrudTemplate from "../../../components/admin/ui/CrudTemplate";
import Users from "../../../components/admin/UsersList";
import useHttp from "../../../hooks/useHttp";

function UsersList() {
  const [users,setUsers] = useState([])

  const headerOptions = <Link to="/admin/users/add">New User</Link>;
  
  const { isLoading, sendRequest: getUsers } = useHttp();

  useEffect(() => {
    getData()
  }, [getUsers]);

  function getData(){
    const storeUsers = (data) => {
      setUsers(data)
    }
    
    getUsers({
      method: "GET",
      url: "users"
    },storeUsers)
  }
  return (
    <CrudTemplate title="Users" header={headerOptions}>
      {isLoading && <h1>Loading ...</h1>}
      {!isLoading && <Users data={users} onRemoveUser={getData} />}
      
    </CrudTemplate>
  );
}

export default UsersList;
