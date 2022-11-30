import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useHttp from "../../../hooks/useHttp";
import { uiActions } from "../../../store/ui-slice";
import Input from "../../admin/ui/Input";
function OrderForm() {
  const { sendRequest } = useHttp();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {orderID} = useParams()

  const [image, setImage] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  let canSubmit = false;

  useEffect(()=>{
    if (orderID) {
        sendRequest({
            method: 'GET',
            url: 'order/' + orderID
        },cb);
        function cb (orderData)  {
          console.log(orderData)
            setImage(orderData.image)
            setFromDate(new Date(orderData.from).toISOString().substring(0,10))
            setToDate(new Date(orderData.to).toISOString().substring(0,10))
        }
    }
  },[])

  const inputChangeHandler = ({ target: { name, value } }) => {
    getFieldName(name)(value);
  };

  const getFieldName = (name) => {
    return eval("set" + name.charAt(0).toUpperCase() + name.slice(1));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const orderObj = {
      method: "POST",
      url: "order",
      data: {
        from: (fromDate),
        to: (toDate),
        image,
      },
    };
    if (orderID) {
        orderObj.method = 'PATCH';
        orderObj.url += '/' + orderID;
    }

    sendRequest(orderObj, afterSaveForm);
  };

  const afterSaveForm = () => {
    dispatch(uiActions.showNotification("order added successfully!"));
    navigate("/admin/orders");
  };

  const checkCanSubmit = () => {
    
    if (image.trim() == "" || fromDate == '' || toDate == ''  )
      canSubmit = true;
    else canSubmit = false;
  };


  checkCanSubmit();

  return (
    <form onSubmit={submitHandler}>
      <div className="grid-2 grid-1-p">
        <Input
          value={image}
          id="image"
          label="Image"
          onChange={inputChangeHandler}
        />
        <Input
          value={fromDate}
          type="date"
          id="fromDate"
          label="From Date"
          onChange={inputChangeHandler}
        />
        <Input
          value={toDate}
          type="date"
          id="toDate"
          label="To Date"
          onChange={inputChangeHandler}
        />
      </div>
      <div className="d-flex justify-center mt-50">
        <button
          disabled={canSubmit}
          className="btn w-50 pt-10 pb-10 font-20"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default OrderForm;
