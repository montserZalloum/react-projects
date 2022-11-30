import React from "react";

import BikesListWithFilters from "../components/bike/BikesListWithFilters";
import Header from "../components/layout/Header";

function HomePage() {
    return (
    <>
      <Header />
      <BikesListWithFilters />
    </>
  );
}

export default HomePage;
