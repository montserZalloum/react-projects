import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import { uiActions } from "../../store/ui-slice";
import Modal from "../ui/Modal";

function OrderNow({bikeID,bike}) {
  const { userData } = useSelector((state) => state.user);
  const { sendRequest } = useHttp();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [isGuestModal, setIsGuestModal] = useState(false);

  const toggleIsGuestModal = (isOpen) => {
    setIsGuestModal(isOpen);
  };

  const orderNowHandler = () => {
    if (userData && userData.id) {
      const afterOrderBike = (data, err) => {
        let msg = ''
        if (err) {
            msg = `something went wrong: ${err}`
        } else {
            msg = `thank you for choosing us`;
            navigate('/')
        }
        dispatch(uiActions.showNotification(msg))
      };
      const today = new Date();
      let tommorow = new Date(today.getTime());
      tommorow.setDate(tommorow.getDate() + 1);

      sendRequest(
        {
          method: "POST",
          url: "order",
          data: {
            userID: userData.id,
            username: userData.name,
            bikeID: bikeID,
            price: bike.price,
            name: bike.name,
            image: bike.image,
            from: today,
            to: tommorow,
          },
        },
        afterOrderBike
      );
    } else {
        toggleIsGuestModal(true);
    }
  };

  return (
    <>
        <div className="d-flex mt-20">
            <button
                onClick={orderNowHandler}
                className="btn w-50 font-20 pt-20 pb-20"
            >
                Order Now
            </button>
        </div>
        <Modal onClose={()=> toggleIsGuestModal(false)} isOpen={isGuestModal}>
            <div className="p-side-20 pt-40 pb-40">
                <h1 className="center font-20 mb-30">You have to Register To order a bike</h1>
                <Link className="btn btn-50 m-side-auto pt-10 pb-10" to="/register">Go to register</Link>
            </div>
        </Modal>
    </>
  );
}

export default OrderNow;
