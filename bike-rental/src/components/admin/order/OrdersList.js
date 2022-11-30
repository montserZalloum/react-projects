import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useHttp from "../../../hooks/useHttp";
import { uiActions } from "../../../store/ui-slice";
import OrderCol from "../order/OrderCol";
import RemoveModal from "../ui/RemoveModal";

function OrdersList(props) {
    const [selectedToRemove,setSelectedToRemove] = useState(null)
    const {sendRequest} = useHttp();
    const dispatch = useDispatch()

    const onRemoveHandler = (orderID) => {
        setSelectedToRemove(orderID)
    }
    const submitRemoveHandler = () => {
        sendRequest({method: 'DELETE',url: `order/${selectedToRemove}`},afterRemoveOrder)
    }
    const afterRemoveOrder = () => {
        onRemoveHandler(null);
        dispatch(uiActions.showNotification('the order deleted successfully!'))
        props.refreshData();
    }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Bike</th>
            <th>Price</th>
            <th>Bike Image</th>
            <th>From Date</th>
            <th>To Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((col, index) => {
            return (
              <OrderCol
                key={col._id}
                id={col._id}
                bikeName={col.name}
                userName={col.username}
                price={col.price}
                image={col.image}
                from={col.from}
                to={col.to}
                
                onRemove={onRemoveHandler}
              />
            );
          })}
        </tbody>
      </table>
      <RemoveModal
        onSubmitRemove={submitRemoveHandler}
        onClose={() => onRemoveHandler(null)}
        isOpen={selectedToRemove !== null}
      />
    </>
  );
}

export default OrdersList;
