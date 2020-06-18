import React from "react";
import { StyleSheet } from "react-native";

import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppPicker from "../components/AppPicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const ListEditScreen = () => {
  const categories = [
    { label: "Furniture", id: 1 },
    { label: "Clothing", id: 2 },
    { label: "Camera", id: 3 },
  ];
  return (
    <Screen style={styles.container}>
      {/* <Image source={require("../assets/logo.png")} style={styles.logo} /> */}
      <AppForm
        initialValues={{ title: "", price: "", category: "", description: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />

        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />
        <AppPicker placeholder="Category" items={categories} />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="POST" />
      </AppForm>
    </Screen>
  );
};

export default ListEditScreen;

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
