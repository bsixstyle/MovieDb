import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, View, ActivityIndicator } from "react-native";
import Movies from "./Movies";

import { client } from "../graphql/Client";
import { FETCH_NOWPLAYING } from "../graphql/Queries";


const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});


export default function NowPlaying() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    requestPopular();
  }, []);

  const requestPopular = () => {
    client
      .query({
        query: FETCH_NOWPLAYING,
      })
      .then((response) => {
        setLoading(response.loading);
        setMovies(response.data.Recipe.results);
      })
      .catch((error) => {
        //console.log("ERROR ==>", error);
      });
  };

  if (loading) {
    return (
      <View style={styles.loader}>
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
