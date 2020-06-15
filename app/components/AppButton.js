import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const AppButton = ({ color, text, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: "9%",
    justifyContent: "center",
    borderRadius: 25,
    marginVertical: 10,
    // backgroundColor: props.color,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default AppButton;
