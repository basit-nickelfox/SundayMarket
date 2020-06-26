import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import MyAccountScreen from "../screens/MyAccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import colors from "../config/colors";
import routes from "./routes";

const Stack = createStackNavigator();
const AccountsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.ACCOUNT}
      options={{
        headerShown: false,
      }}
      component={MyAccountScreen}
    />
    <Stack.Screen
      name={routes.MESSAGES}
      options={{
        headerTintColor: colors.primary,
        headerTitleAlign: "center",
      }}
      component={MessagesScreen}
    />
  </Stack.Navigator>
);

export default AccountsNavigator;
