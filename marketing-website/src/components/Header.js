import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {  login } from "../redux/userSlice";

function Header() {
  const {user} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // dispatch(login({name: 'moon',email: user.email}))
  
  return (
    <div className="header bg-soft-white p-20">
      <div className="d-flex flex-end flex-wrap">
        {!user?.name ? (
          <div>
            <Link className="black mr-10" to="/register">
              Register
            </Link>
            <Link className="black" to="/login">
              Login
            </Link>
          </div>
        ) : (
            <div className="avatar">
                <span>{user.name}</span>
            </div>
        )}
      </div>
    </div>
  );
}

export default Header;
