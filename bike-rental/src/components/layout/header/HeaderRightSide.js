import React from "react";
import { useSelector } from "react-redux";
import HeaderLoggedIn from "./HeaderLoggedIn";
import HeaderGuest from "./HeaderGuest";

function HeaderRightSide() {
  const { isLoggedIn } = useSelector((state) => state.user);

  return <>{isLoggedIn ? <HeaderLoggedIn /> : <HeaderGuest />}</>;
}

export default HeaderRightSide;
