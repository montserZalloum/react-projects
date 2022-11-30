import React from "react";
import OrderItem from "./OrderItem";

function MyOrdersList(props) {
  console.log(props.data);
  return (
    <table>
      <thead>
        <tr>
          <th>Bike</th>
          <th>Image</th>
          <th>Price</th>
          <th>From Date</th>
          <th>To Date</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((order) => {
          return <OrderItem
            key={order._id}
            name={order.name}
            price={order.price}
            image={order.image}
            from={order.from}
            to={order.to}
          />;
        })}
      </tbody>
    </table>
  );
}

export default MyOrdersList;
