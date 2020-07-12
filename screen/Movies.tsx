import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Movies = (movie: any) => (
  <View style={styles.content}>
    <Text style={styles.title}>{movie.title}</Text>
    <Text style={styles.overview}>{movie.overview}</Text>
  </View>
);
const styles = StyleSheet.create({
  content: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  overview: {
    color: "#3d3c41",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 15,
  },
});

export default Movies;
