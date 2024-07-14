import React from "react";
import { ApolloClient, useQuery } from "@apollo/client";
import client from "../utils/customClient";
import { LIST_COUNTRIES } from "../utils/queries";
import Country from "./Country";

const Countries = () => {
  const { data, loading, error } = useQuery(LIST_COUNTRIES);

  if (loading || error) {
    return <p>{error ? error.message : "Loading..."}</p>;
  }
  return (
    <div className="countries">
      {data?.countries.map((country) => {
        return <Country key={country.code} {...country} />;
      })}
    </div>
  );
};

export default Countries;
