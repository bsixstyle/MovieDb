import React, { useEffect } from "react";
import { Text, View } from "react-native";


import { client } from "../graphql/Client";
import { PopularMovies } from "../graphql/Queries";


export default function Popular() {
    useEffect(() => {
      requestPopular();
    }, []);
  
    const requestPopular = () => {
      client
        .query({
          query: PopularMovies,
        })
        .then((response) => {
          console.log("RESPONSE ==>", response);
        })
        .catch((error) => {
          console.log("ERROR ==>", error);
        });
    };
  
    return (
      <View>
        <Text>Popular</Text>
      </View>
    );
  }