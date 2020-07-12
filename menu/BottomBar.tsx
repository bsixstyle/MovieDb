import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import NowPlaying from "../screen/NowPlaying";
import Popular from "../screen/Popular";
import SearchMovies from "../screen/SearchMovies";
import TopRated from "../screen/TopRated";
import Upcoming from "../screen/Upcoming";

const Tab = createBottomTabNavigator();

export default function BottomBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="NowPlaying"
        tabBarOptions={{
          activeTintColor: "#e91e63",
        }}
      >
        <Tab.Screen name="Now Playing" component={NowPlaying} />
        <Tab.Screen name="Popular" component={Popular} />
        <Tab.Screen name="Top Rated" component={TopRated} />
        <Tab.Screen name="Upcoming" component={Upcoming} />
        <Tab.Screen name="Search" component={SearchMovies} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
