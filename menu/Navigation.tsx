import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import NowPlaying from "../screen/NowPlaying";
import Popular from "../screen/Popular";
import SearchMovies from "../screen/SearchMovies";
import TopRated from "../screen/TopRated";
import Upcoming from "../screen/Upcoming";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  const [loading, setLoading] = React.useState(true);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="NowPlaying"
        tabBarOptions={{
          activeTintColor: "#e91e63",
          showLabel: true,
        }}
      >
        <Tab.Screen
          name="Now Playing"
          children={() => <NowPlaying />}
          options={{
            tabBarLabel: "Playing",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="play" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Popular"
          children={() => <Popular />}
          options={{
            tabBarLabel: "Popular",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="star" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Top Rated"
          component={TopRated}
          options={{
            tabBarLabel: "Top",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="thumb-up"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Upcoming"
          component={Upcoming}
          options={{
            tabBarLabel: "Coming up",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="arrow-up"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchMovies}
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="file-find-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
