import { gql } from "@apollo/client";

export const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;

export const COUNTRY_DETAILS = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;
