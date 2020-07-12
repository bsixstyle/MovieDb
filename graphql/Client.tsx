import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from 'apollo-link-http';

const link = new HttpLink({ uri: 'http://localhost:4000/graphql', fetch });

export const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});
