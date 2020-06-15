import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.topImage} source={require("../assets/jacket.jpg")} />
      <View style={styles.topDetails}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.subTitle}>$100</AppText>
      </View>
      <View style={styles.listContainer}>
        <ListItem
          image={require("../assets/me.jpg")}
          title="Basit Mir"
          subTitle="5 Listings"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    marginLeft: 10,
    marginVertical: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 8,
  },
  topDetails: {
    paddingLeft: 15,
    paddingTop: 10,
  },
  topImage: {
    height: 250,
    width: "100%",
  },
});
