import React, { useEffect, useState } from "react";
import useHttp from "../../hooks/useHttp";
import BikesList from "./BikesList";
import BikeFilters from "./BikeFilters";

function BikesListWithFilters() {
  const [bikesList, setBikesList] = useState([]);
  const [price,setPrice] = useState("")
  const [name,setName] = useState("")
  const { sendRequest } = useHttp();

  // should i use useEffect for each api call?
  useEffect(() => {
    let timer;
    
    if (price || name) {
        timer = setTimeout(()=>{
            getData();
        },1000)
    } else
        getData();
    return function(){
        clearTimeout(timer)
    }
  }, [price,name]);

  const getData = () => {
    const storeBikes = (data) => {
      setBikesList(data);
    };
    let reqURL = 'bike?';
    if (price > 0)
        reqURL += `&price=${price}`
    if (name !== '')
        reqURL += `&name=${name}`
    sendRequest(
      {
        method: "GET",
        url: `${reqURL}`,
      },
      storeBikes
    );
  };
  return (
    <>
      <div className="container mt-50">
        <BikeFilters name={name} setName={setName} setPrice={setPrice} price={price} />
      </div>
      {bikesList.length > 0 && (
        <div className="mt-30">
          <BikesList data={bikesList} />
        </div>
      )}
    </>
  );
}

export default BikesListWithFilters;
