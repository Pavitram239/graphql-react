import React from "react";
import { Link } from "react-router-dom";

const Country = ({ code, name }) => {
  return (
    <div className="country">
      <span className="country-name">{name}</span>
      <Link className="details-button" to={`/country/${code}`}>
        {code}
      </Link>
    </div>
  );
};

export default Country;
