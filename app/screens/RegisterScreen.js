import React from "react";
import { StyleSheet } from "react-native";

import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  name: Yup.string().required().label("Name"),
});

const RegisterScreen = () => {
  return (
    <Screen style={styles.container}>
      {/* <Image source={require("../assets/logo.png")} style={styles.logo} /> */}
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="name"
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          placeholder="Name"
        />
        <AppFormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />

        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          textContentType="password"
          secureTextEntry
        />
        <SubmitButton title="REGISTER" />
      </AppForm>
    </Screen>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    margin: 10,
  },
  logo: {
    height: 180,
    width: 180,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});
