import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useHttp from "../../hooks/useHttp";
import OrderNow from "./OrderNow";
import StockLabel from './StockLabel'
function BikeDetails({bike,bikeID}) {
    
  return (
    <div className="d-flex space-between">
      <figure className="w-35">
        <img
          width="100%"
          height="300"
          className="object-fit radius-15"
          src={bike.image}
        />
      </figure>
      <div className="details w-50">
        <h1 className="black-1 mb-20">{bike.name}</h1>
        <p className="font-20">{bike.description}</p>
        <div className="mt-20">
            <p>Price: {bike.price}</p>
            <StockLabel quantity={bike.quantity} />
        </div>
        <OrderNow bike={bike} bikeID={bikeID} />
      </div>
    </div>
  );
}

export default BikeDetails;
