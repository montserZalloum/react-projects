import React, { useRef, useState } from "react";
import { signup } from "../../firebase";
import "../../styles/register.css";
import { useDispatch } from "react-redux";
import { login } from "../../features/user";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      dispatch(
        login({ email: emailRef.current.value, name: nameRef.current.value })
      );
      navigate("/");

    } catch (e) {
      console.log("error", e.message);
    }
    setLoading(false);
  }
  return (
    <div className="register-page">
      <form className="modal-content">
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <label>
            <b>Name</b>
          </label>
          <input
            ref={nameRef}
            type="text"
            placeholder="Enter Name"
            name="name"
            required
          />
          <label>
            <b>Email</b>
          </label>
          <input
            ref={emailRef}
            type="text"
            placeholder="Enter Email"
            name="email"
            required
          />

          <label>
            <b>Password</b>
          </label>
          <input
            ref={passwordRef}
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <div className="clearfix">
            <button
              disabled={loading}
              onClick={handleSubmit}
              type="submit"
              className="signupbtn"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
