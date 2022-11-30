import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BikesList from "../../../components/admin/bike/BikesList";
import AdminLayout from "../../../components/admin/layout/AdminLayout";
import useHttp from "../../../hooks/useHttp";

function BikesListPage() {
  const { isLoading,sendRequest } = useHttp();
  const [bikesList, setBikesList] = useState([]);

  const headerOptions = (
    <Link className="btn w-25 pt-10 pb-10" to="/admin/bikes/new">
      New
    </Link>
  );

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    sendRequest({ method: "GET", url: "bike" }, storeData);
  };

  const storeData = (data) => {
    setBikesList(data);
  };

  let content = ''
  if (isLoading)
    content = <h1 className="center">Loading...</h1>
  else if (bikesList.length === 0)
    content = <h1 className="center">No Data</h1>
  else
    content = <BikesList refreshData={getData} data={bikesList} />

  return <AdminLayout title="Bikes List" header={headerOptions}>
    {content}
  </AdminLayout>;
}

export default BikesListPage;
