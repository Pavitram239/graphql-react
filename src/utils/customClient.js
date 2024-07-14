import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com",
});
export default client;
