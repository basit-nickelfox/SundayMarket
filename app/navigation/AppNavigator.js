import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListEditScreen from "../screens/ListEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountsNavigator from "./AccountsNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewListingButton from "./NewListingButton";
import routes from "./routes";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
      name={routes.FEED}
      component={FeedNavigator}
    />
    <Tab.Screen
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate(routes.LISTING_EDIT)}
          />
        ),
      })}
      name={routes.LISTING_EDIT}
      component={ListEditScreen}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
      name={routes.ACCOUNT}
      component={AccountsNavigator}
    />
  </Tab.Navigator>
);
export default AppNavigator;
