import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppIcon = ({
  name = email,
  bgColor = "#000",
  iconColor = "#fff",
  size = 40,
}) => {
  return (
    <View
      style={[
        styles.iconView,
        {
          backgroundColor: bgColor,
          width: size,
          height: size,
          borderRadius: size / 2,
        },
      ]}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
};

export default AppIcon;

const styles = StyleSheet.create({
  iconView: {
    justifyContent: "center",
    alignItems: "center",
  },
});
