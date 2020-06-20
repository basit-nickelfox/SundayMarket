import React from "react";
import { StyleSheet } from "react-native";

import AppPicker from "../AppPicker";
import AppErrorMessage from "./AppErrorMessage";
import { useFormikContext } from "formik";

const AppFormPicker = ({
  placeholder,
  name,
  items,
  PickerItemComponent,
  numberOfCols,
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        numberOfCols={numberOfCols}
        PickerItemComponent={PickerItemComponent}
        items={items}
        onSelectedItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <AppErrorMessage errorMsg={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;

const styles = StyleSheet.create({});
