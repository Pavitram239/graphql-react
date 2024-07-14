import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { COUNTRY_DETAILS } from "../utils/queries";
import client from "../utils/customClient";

const CountryDetails = () => {
  const { code } = useParams();
  console.log(code);
  const { loading, error, data } = useQuery(COUNTRY_DETAILS, {
    variables: { code },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const country = data?.country || {};
  console.log(country);
  return (
    <div className="country-details">
      <h2>{country.name}</h2>
      <p>
        <b>Native Name:</b> {country.native}
      </p>
      <p>
        <b>Capital:</b> {country.capital}
      </p>
      <p>
        <b>Currency:</b> {country.currency}
      </p>
      <p>
        <b>Languages:</b>{" "}
        {country.languages.map((lang) => (
          <span key={lang.code}>{lang.name}, </span>
        ))}
      </p>
    </div>
  );
};

export default CountryDetails;
