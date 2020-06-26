import React from "react";
import { View, StyleSheet, Image, ImageBackground, Text } from "react-native";

import AppButton from "../components/AppButton";
import colors from "../config/colors";
import routes from "../navigation/routes";

const WelcomeScreen = ({ navigation }) => {
  // const onPress = () => {
  //   console.log("Pressed");
  // };
  return (
    <ImageBackground
      style={styles.image}
      source={require("../assets/background.jpg")}
      blurRadius={2}
    >
      <View style={styles.logoView}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.text}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.bottomView}>
        <AppButton
          color={colors.primary}
          text="LOGIN"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppButton
          color={colors.secondary}
          text="REGISTER"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
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
    padding: 18,
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
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default WelcomeScreen;
