import React from "react";
import Countries from "./components/Countries";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";
import { ApolloProvider } from "@apollo/client";
import client from "./utils/customClient";

const App = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/country/:code" element={<CountryDetails />} />
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default App;
