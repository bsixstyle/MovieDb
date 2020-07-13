import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  ActivityIndicator,
  TextInput,
  Button,
} from "react-native";

import { client } from "../graphql/Client";
import { FETCH_SEARCHMOVIES } from "../graphql/Queries";
import Movies from "./Movies";

export default function SearchMovies() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  const requestSearch = () => {
    setLoading(true);
    client
      .query({
        query: FETCH_SEARCHMOVIES,
        variables: { query : search },
      })
      .then((response) => {
        console.log("RESPONSE ==>", response);
        setMovies(response.data.Recipe.results);
        setLoading(response.loading);
      })
      .catch((error) => {
        console.log("ERROR ==>", error);
      });
  };

  return (
    <View style={styles.contentContainer}>
      <TextInput
        style={styles.textStyle}
        placeholder="Search Movies"
        onChangeText={(text) => setSearch(text)}
        value={search}
      />
      <Button title="Search" onPress={() => requestSearch()} />

      <View
        style={{
          borderBottomColor: "white",
          borderBottomWidth: 1,
          margin: 20,
        }}
      />

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          nestedScrollEnabled
          data={movies}
          renderItem={({ item }) => <Movies {...item} />}
          keyExtractor={(item) => `${item.id}`}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  textStyle: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },

  buttonStyle: {
    marginBottom: 20,
  },
});
