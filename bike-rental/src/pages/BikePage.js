import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../components/layout/Header";
import useHttp from "../hooks/useHttp";
import { uiActions } from "../store/ui-slice";
import BikeDetails from "../components/bike/BikeDetails";

function BikePage() {
  const { bikeID } = useParams();
  const { sendRequest, isLoading } = useHttp();
  const dispatch = useDispatch();

  const [bike, setBike] = useState(null);
  

  useEffect(() => {
    const getBikeData = (data, err) => {
      if (err) {
        dispatch(uiActions.showNotification(`${err}`));
      } else {
        setBike(data);
      }
    };
    sendRequest(
      {
        method: "GET",
        url: `bike/${bikeID}`,
      },
      getBikeData
    );
  }, []);

  

  return (
    <>
      <Header />
      <div className="mt-50 container">
        {isLoading ? (
          <h1 className="center">Loading ...</h1>
        ) : (
          <>
            <BikeDetails bikeID={bikeID} bike={bike} />
          </>
        )}
      </div>
      
    </>
  );
}

export default BikePage;
