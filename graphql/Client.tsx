import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const cache = new InMemoryCache();
const restLink = new RestLink({
  uri: "http://api.themoviedb.org/3"
});

export const client = new ApolloClient({
  cache: cache,
  link: restLink,
});
