import React from "react";
import { useFormikContext } from "formik";

import colors from "../config/colors";
import AppButton from "./AppButton";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton color={colors.primary} text={title} onPress={handleSubmit} />
  );
};

export default SubmitButton;
