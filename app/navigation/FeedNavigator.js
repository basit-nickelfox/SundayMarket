import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import colors from "../config/colors";

const Stack = createStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator mode="card">
    <Stack.Screen
      options={{ headerShown: false }}
      name="Listing"
      component={ListingScreen}
    />
    <Stack.Screen
      options={{
        title: null,
        headerTransparent: true,
        headerTintColor: colors.primary,
      }}
      name="ListingDetails"
      component={ListingDetailsScreen}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
