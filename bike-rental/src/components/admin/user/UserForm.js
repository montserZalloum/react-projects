import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import useHttp from "../../../hooks/useHttp";
import { uiActions } from "../../../store/ui-slice";
import Input from "../ui/Input";

function UserForm() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const {userID} = useParams()

  const { sendRequest: newUser } = useHttp();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { sendRequest: getUser } = useHttp();

  // get data -> edited user
  useEffect(() => {
    if (userID) {
      getUser({
        method: 'GET',
        url: `user/${userID}`
      },cb)
      function cb(user) {
        setName(user.name)
        setEmail(user.email)
        setPassword(user.password)
      }
      
    }
  }, []);
  

  let canSubmit = false;

  const handleInputChange = ({ target: { name, value } }) => {
    getFieldName(name)(value);
  };
  const getFieldName = (name) => {
    return eval("set" + name.charAt(0).toUpperCase() + name.slice(1));
  };

  const checkCanSubmit = () => {
    if (name.trim() == "" || email.trim() == "" || password.trim() == "")
      canSubmit = true;
    else canSubmit = false;
  };

  checkCanSubmit();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUserObj = {
      url: "user",
      method: "POST",
      data: {
        name,
        email,
        password,
      },
    };

    if (userID) {
      newUserObj.method = 'PATCH';
      newUserObj.url += `/${userID}`;
    }

    newUser(newUserObj, afterSaveForm);
  };

  const afterSaveForm = () => {
    dispatch(uiActions.showNotification('User Added Successfully!'));
    navigate("/admin/users");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="box grid-2 grid-1-p">
        <Input 
        value={name}
        label="Name" id="name" onChange={handleInputChange} />
        <Input 
        value={email}
        label="Email" id="email" onChange={handleInputChange} />
        <Input
          value={password}
          type="password"
          label="Password"
          id="password"
          onChange={handleInputChange}
        />
      </div>
      <div className="d-flex justify-center mt-50">
        <button
          disabled={canSubmit}
          className="btn w-50 pt-10 pb-10 font-20"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default UserForm;
