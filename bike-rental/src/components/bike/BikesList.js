import React from "react";
import BikeItem from "./BikeItem";

function BikesList(props) {
  return (
    <div className="bikes-list-container">
      <div className="container">
        <div className="box grid-3">
          {props.data.map((bike) => {
            return <BikeItem
              key={bike._id}
              name={bike.name}
              id={bike._id}
              description={bike.description}
              image={bike.image}
              price={bike.price}
              quantity={bike.quantity}
            />;
          })}
        </div>
      </div>
    </div>
  );
}

export default BikesList;
