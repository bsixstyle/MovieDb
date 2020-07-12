import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";


import { client } from "../graphql/Client";
import { FETCH_SEARCHMOVIES } from "../graphql/Queries";


export default function SearchMovies() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    requestPopular();
  }, []);

  const requestPopular = () => {
    client
      .query({
        query: FETCH_SEARCHMOVIES,
      })
      .then((response) => {
        console.log("RESPONSE ==>", response);
        setLoading(response.loading);
      })
      .catch((error) => {
        console.log("ERROR ==>", error);
      });
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return (
      <View style={styles.contentContainer}>
        <Text>Popular</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
