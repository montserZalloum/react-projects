import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getConference } from "../redux/conferenceSlice";

export default function Eventpage() {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const resp = (await dispatch(getConference())).payload;
      setData(resp[0]);
    }
    fetchData();
  }, []);

  return <div className="container">{
    data && 
    <div className="mt-30">
      <h1>Conference Name: {data.name}</h1>
      <h2>Location: {data.location}</h2>
      <h3 className="main-color">Speakers: {data.speakers}</h3>
      <h4>Food: {data.food}</h4>
    </div>
  }</div>
}
