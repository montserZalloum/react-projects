import React, { useRef, useState } from "react";

import "../../styles/register.css";
import { useDispatch } from "react-redux";
// import { login } from "../../features/user";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../redux/userSlice";
// import { addUser } from "../../redux/api";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [name,setName] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      dispatch(addUser({name,email}))
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
            type="text"
            placeholder="Enter Name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
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
