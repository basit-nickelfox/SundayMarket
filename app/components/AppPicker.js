import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import AppText from "./AppText";

const AppPicker = ({ icon, placeholder }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              color={defaultStyles.colors.medium}
              size={20}
              name={icon}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>{placeholder}</AppText>
          <MaterialCommunityIcons
            color={defaultStyles.colors.medium}
            size={20}
            name="chevron-down"
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <Text style={styles.button}>CLOSE</Text>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  button: {
    color: defaultStyles.colors.primary,
    textAlign: "center",
    textAlignVertical: "center",
    height: 40,
    fontWeight: "bold",
    fontSize: 18,
    // backgroundColor: defaultStyles.colors.light,
  },
  text: {
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: defaultStyles.colors.light,
    padding: 15,
    marginVertical: 10,
    borderRadius: 25,
  },
});
