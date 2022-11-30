import React from "react";
import { Link } from "react-router-dom";
import HeaderRightSide from "./header/HeaderRightSide";


function Header() {
    return (
    <header className="main-header bg-soft pt-10 pb-10">
      <div className="container">
        <div className="box d-flex space-between align-center">
          <Link to="/">
            <h1>Bike Rental</h1>
          </Link>
          <HeaderRightSide />
        </div>
      </div>
    </header>
  );
}

export default Header;
