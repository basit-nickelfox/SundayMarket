import React from "react";
import { View, StyleSheet, Image, ImageBackground, Text } from "react-native";

import colors from "../config/colors";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.image}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoView}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.text}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.login}></View>
        <View style={styles.register}></View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  logoView: {
    flex: 2.8,
    justifyContent: "flex-end",
  },
  bottomView: {
    justifyContent: "flex-end",
    flex: 7.2,
  },
  login: {
    width: "100%",
    height: "9%",
    backgroundColor: colors.primary,
  },
  register: {
    width: "100%",
    height: "9%",
    backgroundColor: colors.secondary,
  },
  image: {
    flex: 1,
    width: "100%",
  },
  logo: {
    alignSelf: "center",
    height: 140,
    width: 290,
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default WelcomeScreen;
