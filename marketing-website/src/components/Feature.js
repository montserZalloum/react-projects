import React from "react";
import {Link} from 'react-router-dom'
function Feature({name}) {
  return (
    <Link to={`/feature/${name}`} className="feature center pointer">
      <img src={`https://picsum.photos/200?random=${Math.random()}`} className="w-100" />
      <p>{name}</p>
    </Link>
  );
}

export default Feature;
