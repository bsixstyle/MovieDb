import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  FlatList,
  View,
  ActivityIndicator,
} from "react-native";
import Movies from "./Movies";

import { client } from "../graphql/Client";
import { FETCH_UPCOMING } from "../graphql/Queries";

export default function TopRated() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<any[]>([])

  useEffect(() => {
    requestPopular();
  }, []);

  const requestPopular = () => {
    client
      .query({
        query: FETCH_UPCOMING,
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
      <ScrollView style={styles.contentContainer}>
        <FlatList
          data={movies}
          renderItem={({ item }) => <Movies {...item} />}
          keyExtractor={(item) => `${item.id}`}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
