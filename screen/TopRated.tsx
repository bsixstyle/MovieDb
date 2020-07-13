import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  ActivityIndicator,
} from "react-native";
import Movies from "./Movies";

import { client } from "../graphql/Client";
import { FETCH_TOPRATED } from "../graphql/Queries";

export default function TopRated() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<any[]>([])

  useEffect(() => {
    requestPopular();
  }, []);

  const requestPopular = () => {
    client
      .query({
        query: FETCH_TOPRATED,
      })
      .then((response) => {
        console.log("RESPONSE ==>", response);
        setLoading(response.loading);
        setMovies(response.data.Recipe.results);
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
        <FlatList
          nestedScrollEnabled
          data={movies}
          renderItem={({ item }) => <Movies {...item} />}
          keyExtractor={(item) => `${item.id}`}
        />
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
