import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import colors from "../config/colors";
import routes from "./routes";

const Stack = createStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator mode="card">
    <Stack.Screen
      options={{ headerShown: false }}
      name={routes.LISTING}
      component={ListingScreen}
    />
    <Stack.Screen
      options={{
        title: null,
        headerTransparent: true,
        headerTintColor: colors.primary,
      }}
      name={routes.LISTING_DETAILS}
      component={ListingDetailsScreen}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
