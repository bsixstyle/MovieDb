import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

import clientFetch  from 'isomorphic-unfetch'
import serverFetch, { Headers as ServerHeaders } from 'cross-fetch';

const clients = typeof document !== 'undefined';
global.Headers = clients ? global.Headers : ServerHeaders;
const customFetch = clients ? clientFetch : serverFetch;

const cache = new InMemoryCache();

const restLink = new RestLink({
  uri: "http://api.themoviedb.org/3",
  customFetch
});

export const client = new ApolloClient({
  cache: cache,
  link: restLink,
});
