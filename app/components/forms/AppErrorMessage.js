import React from "react";
import { StyleSheet } from "react-native";
import AppText from "../AppText";

const AppErrorMessage = ({ errorMsg, visible }) => {
  if (!visible || !errorMsg) return null;
  return <AppText style={styles.error}>{errorMsg}</AppText>;
};

export default AppErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
