import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListEditScreen from "../screens/ListEditScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import FeedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedNavigator} />
    <Tab.Screen name="ListingEdit" component={ListEditScreen} />
    <Tab.Screen name="Account" component={MyAccountScreen} />
  </Tab.Navigator>
);
export default AppNavigator;
