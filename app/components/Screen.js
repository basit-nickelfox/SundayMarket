import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import constants from "expo-constants";
export default function Screen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: constants.statusBarHeight,
    flex: 1,
  },
});
