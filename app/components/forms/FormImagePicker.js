import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";
import ImageInputList from "../ImageInputList";
import AppErrorMessage from "./AppErrorMessage";

const FormImagePicker = ({ name }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];
  const onAddImage = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };
  const onRemoveImage = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };
  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={onAddImage}
        onRemoveImage={onRemoveImage}
      />
      <AppErrorMessage errorMsg={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormImagePicker;

const styles = StyleSheet.create({});
