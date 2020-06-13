import React from "react";
import { View, StyleSheet, Image } from "react-native";

import colors from "../config/colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.parentView}>
      <View style={styles.child1}>
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>
      </View>
      <Image
        resizeMode="stretch"
        style={styles.child2}
        source={require("../assets/chair.jpg")}
      />
      <View style={styles.child3}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  closeIcon: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    position: "absolute",
    right: 30,
    top: 40,
  },
  deleteIcon: {
    backgroundColor: colors.secondary,
    height: 50,
    width: 50,
    left: 30,
    top: 40,
    position: "absolute",
  },
  parentView: {
    flex: 1,
    backgroundColor: colors.black,
  },
  child1: {
    flex: 2,
    // flexDirection: "row",
    // justifyContent: "space-between",
  },
  child2: {
    flex: 6,
    width: "100%",
  },
  child3: {
    flex: 2,
  },
});
export default ViewImageScreen;
