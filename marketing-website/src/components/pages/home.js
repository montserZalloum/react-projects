import React from "react";
import Landing from "../landing";
import FeaturesList from "../FeaturesBox";
function home() {
  return (
    <div className="homepage">
      <Landing />
      <FeaturesList />
    </div>
  );
}

export default home;
