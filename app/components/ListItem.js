import React from "react";
import { StyleSheet, Image, View, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";
import AppText from "./AppText";

const ListItem = ({ image, title, subTitle, onPress, renderRightActions }) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.details}>
          <Image style={styles.image} source={image} />
          <View style={styles.minorDetails}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
    fontSize: 15,
  },
  minorDetails: {},
  details: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10,
  },
});
