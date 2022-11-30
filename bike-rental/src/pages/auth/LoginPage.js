import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../components/layout/Header";
import Input from "../../components/ui/Input";
import useHttp from "../../hooks/useHttp";
import { uiActions } from "../../store/ui-slice";
import { userActions } from "../../store/user-slice";
function LoginPage() {
  const dispatch = useDispatch();
  const { isLoading, sendRequest } = useHttp();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputChangeHandler = ({ target: { name, value } }) => {
    getFieldName(name)(value);
  };
  const getFieldName = (fieldName) => {
    return eval(`set${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cb = (data, err) => {
      if (err) {
        dispatch(
          uiActions.showNotification(
            "Email or password is wrong, please re-check them and try again"
          )
        );
      } else {
        dispatch(
          userActions.login({
            id: data._id,
            name: data.name,
            email: email,
          })
        );
        dispatch(uiActions.showNotification(`Welcome Mr. ${data.name}`));
        navigate("/");
      }
    };
    sendRequest(
      {
        method: "POST",
        url: "user/login",
        data: {
          email,
          password,
        },
      },
      cb
    );
  };

  return (
    <>
      <Header />
      <div className="container mt-50">
        <h1 className="center mb-20">Login Page</h1>
        <form onSubmit={handleSubmit} className="w-50 m-side-auto">
          <div className="d-flex gap-20 flex-column">
            <Input
              value={email}
              id="email"
              label="Email"
              type="email"
              onChange={inputChangeHandler}
            />
            <Input
              value={password}
              id="password"
              label="Password"
              type="password"
              onChange={inputChangeHandler}
            />
            <button type="submit" className="btn w-100 font-18 pt-10 pb-10">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
