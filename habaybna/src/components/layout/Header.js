import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userActions } from "../../store/user-slice";

function Header() {
  const dispatch = useDispatch();
  const {isLoggedIn} = useSelector((state) => state.user);
  
  const logoutHandler = () => {
    dispatch(userActions.logout());
  };
  return (
    <header className="header bg-main p-side-25">
      <div className="d-flex">
        {!isLoggedIn && (
          <>
            <Link className="white pt-20 pb-20" to="/register">
              Register
            </Link>
            <Link className="white pl-40 pt-20 pb-20" to="/login">
              Login
            </Link>
          </>
        )}
        {isLoggedIn && (
          <button
            onClick={logoutHandler}
            className="bg-transparent border-0 pointer font-20 white ml-40 pt-20 pb-20"
            to="/login"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
