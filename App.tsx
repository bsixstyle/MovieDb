import React from "react";
import { StyleSheet, View } from "react-native";
import Navigation from "./menu/Navigation";

import { ApolloProvider } from '@apollo/client';
import { client } from "./graphql/Client";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Navigation />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
