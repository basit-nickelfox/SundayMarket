import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AppText from "./AppText";

import colors from "../config/colors";
const Card = ({ title, subTitle, image }) => {
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={image} />
      <View style={styles.details}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
  details: {
    padding: 20,
  },
  view: {
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    height: 200,
    width: "100%",
  },
});
