import React from "react";
import { Link } from "react-router-dom";

function HeaderLoggedIn() {

  return (
    <>
      <div className="d-flex gap-35 align-center">
          <Link to="/login">Login</Link>
          <Link
            className="btn  pt-10 pb-10 p-side-10 font-17"
            to="/register"
          >
            Register
          </Link>
        </div>
    </>
  );
}

export default HeaderLoggedIn;
