import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useHttp from "../../../hooks/useHttp";
import { uiActions } from "../../../store/ui-slice";
import Input from "../../admin/ui/Input";
function BikeForm() {
  const { sendRequest } = useHttp();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {bikeID} = useParams()

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  let canSubmit = false;

  useEffect(()=>{
    if (bikeID) {
        sendRequest({
            method: 'GET',
            url: 'bike/' + bikeID
        },cb);
        function cb (bikeData)  {
            setName(bikeData.name)
            setPrice(bikeData.price)
            setQuantity(bikeData.quantity)
            setImage(bikeData.image)
            setDescription(bikeData.description)
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

    const bikeObj = {
      method: "POST",
      url: "bike",
      data: {
        name,
        image,
        description,
        quantity,
        price,
      },
    };
    if (bikeID) {
        bikeObj.method = 'PATCH';
        bikeObj.url += '/' + bikeID;
    }

    sendRequest(bikeObj, afterSaveForm);
  };

  const afterSaveForm = () => {
    dispatch(uiActions.showNotification("bike added successfully!"));
    navigate("/admin/bikes");
  };

  const checkCanSubmit = () => {
    
    if (name.trim() == "" || price == '' || quantity == ''  )
      canSubmit = true;
    else canSubmit = false;
  };


  checkCanSubmit();

  return (
    <form onSubmit={submitHandler}>
      <div className="grid-2 grid-1-p">
        <Input
          value={name}
          id="name"
          label="Name"
          onChange={inputChangeHandler}
        />
        <Input
          value={price}
          type="number"
          id="price"
          label="Price"
          onChange={inputChangeHandler}
        />
        <Input
          value={quantity}
          type="number"
          id="quantity"
          label="Quantity"
          onChange={inputChangeHandler}
        />
        <Input
          value={image}
          id="image"
          label="Image"
          onChange={inputChangeHandler}
        />
        <Input
          value={description}
          id="description"
          label="Description"
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

export default BikeForm;
