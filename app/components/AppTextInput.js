import React from "react";
import { StyleSheet, TextInput, View, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          color={defaultStyles.colors.medium}
          size={20}
          name={icon}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyles.textInput} {...otherProps} />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: defaultStyles.colors.light,
    padding: 15,
    marginVertical: 10,
    borderRadius: 25,
  },
});
