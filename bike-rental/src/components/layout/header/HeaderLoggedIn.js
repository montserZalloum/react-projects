import React from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../../store/user-slice";
import { uiActions } from "../../../store/ui-slice";
import { Link } from "react-router-dom";

function HeaderLoggedIn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(userActions.logout());
    dispatch(uiActions.showNotification("you are browsing as a guest"));
  };
  return (
    <div className="d-flex gap-5">
      <Link to="/my-orders" className="btn pt-10 pb-10 p-side-10 font-18">
        My Orders
      </Link>
      <button
        className="btn pt-10 pb-10 p-side-10 font-18"
        onClick={logoutHandler}
      >
        Logout
      </button>
    </div>
  );
}

export default HeaderLoggedIn;
