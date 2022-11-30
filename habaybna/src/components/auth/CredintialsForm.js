import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import { uiActions } from "../../store/ui-slice";
import { userActions } from "../../store/user-slice";
import CreadintialFields from "./CreadintialFields";

function CredintialsForm(props) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, sendRequest } = useHttp();
  const [isFilled, setIsFilled] = useState(true);

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (name.trim() == "" || password.trim() == "") {
      setIsFilled(false);
      return false;
    }
    const cb = (users) => {
        function doLogin(){
            dispatch(userActions.login())
            navigate("/");
        }
        
        if (props.isRegister) {
            dispatch(uiActions.showNotification('User Created Successfully!'))
            doLogin()
        } else {
            const isExist = users.filter((user)=> {
                return user.name == name && user.password == password
            })
            if (isExist.length > 0) {
                doLogin()
            } else  
                dispatch(uiActions.showNotification('User Not Found!'))
        }

        
        
      
    };
    
    sendRequest(
      {
        url: "users",
        method: props.isRegister ? "POST" : "GET",
        data: {
          name,
          password,
        },
      },
      cb
    );
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <CreadintialFields
          name={name}
          setName={setName}
          password={password}
          setPassword={setPassword}
        />
        {!isFilled && (
          <p className="center mt-30">Please fill all required field</p>
        )}
        <div className="w-50 d-flex justify-center m-side-auto mt-30">
          <button className="btn w-100 pt-10 pb-10 font-17">Save</button>
        </div>
      </form>
      
    </>
  );
}

export default CredintialsForm;
