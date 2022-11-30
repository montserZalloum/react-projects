import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersLists] = useState([]);

  const addUserHandler = (newUser) => {
    setUsersLists((prev) => {
      return [...prev, newUser];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList data={usersList} />
    </div>
  );
}

export default App;
