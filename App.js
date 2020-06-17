import React, { useState } from "react";
// import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";

const categories = [
  {
    label: "Furniture",
    id: 1,
  },
  {
    label: "Camera",
    id: 2,
  },
  {
    label: "Clothing",
    id: 3,
  },
];
export default function App() {
  const [category, setCategory] = useState(categories[0]);
  return (
    <Screen>
      <AppPicker
        icon="apps"
        placeholder="Category"
        items={categories}
        selectedItem={category}
        onSelectedItem={(item) => setCategory(item)}
      />
    </Screen>
    // <ListingScreen />
    // <MyAccountScreen />
    // <MessagesScreen/>
    // <ListingDetailsScreen />
    // <WelcomeScreen />
    // <ViewImageScreen />
  );
}
