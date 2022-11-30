import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error,setError] = useState()
  const userNameChangeHandler = (e) => {
    setEnteredUserName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (!enteredUserName.trim().length || !enteredAge.trim().length) {
        setError({
            title: 'Invalid input',
            message: 'please enter a valid name and age (non-empty values).'
        })
        return 
    }

    if (+enteredAge < 1) {
        setError({
            title: 'Invalid Age',
            message: 'please enter a valid age ( > 0 ).'
        })
        return
    }
    props.onAddUser({name: enteredUserName,age: enteredAge})
    setEnteredAge("");
    setEnteredUserName("");
  };

  const dismissErrorModal = () => {
    setError(null)
  }

  return (
    <Card>
        {error && <ErrorModal onClose={dismissErrorModal} title={error.title} message={error.message} />}
      <form>
        <label>User Name</label>
        <input
          type="text"
          id="name"
          value={enteredUserName}
          onChange={userNameChangeHandler}
        />
        <br />
        <label>Age</label>
        <input
          type="number"
          id="age"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button onClick={addUserHandler} type="submit">
          Save
        </Button>
      </form>
    </Card>
  );
}

export default AddUser;
