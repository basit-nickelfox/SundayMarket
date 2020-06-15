import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.parentView}>
      <View style={styles.child1}>
        <View style={styles.closeIcon}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            color="white"
            size={35}
          />
        </View>
        <View style={styles.deleteIcon}>
          <MaterialCommunityIcons name="close" color="white" size={35} />
        </View>
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
    position: "absolute",
    right: 30,
    top: 35,
  },
  deleteIcon: {
    left: 30,
    top: 35,
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
