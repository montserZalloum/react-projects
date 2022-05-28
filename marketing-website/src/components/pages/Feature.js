import React, { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
function Feature() {
  const { name } = useParams();
  const navigate = useNavigate();

  const {user} = useSelector((state) => state.user);
  const addToBasket = () => {
    if (user.name) {
      alert('added to basket');
      navigate('/');
    } else {
      alert("Please login first");
    }
  };
  return (
    <div className="feature-page center">
      <div className="container">
        <h1 className="pt-20 font-55 mb-20">{name}</h1>
        <div className="d-flex justify-center">
          <img src="https://picsum.photos/200?random=1" className="w-25" />
        </div>
        <button className="btn mt-30" onClick={addToBasket}>
          Buy This
        </button>
      </div>
    </div>
  );
}

export default Feature;
