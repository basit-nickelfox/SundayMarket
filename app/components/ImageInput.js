import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import colors from "../config/colors";
import * as Permissions from "expo-permissions";

let grantPermission = false;
const ImageInput = ({ imageUri, onChangeImage }) => {
  // const [imageUri, setImageUri] = useState();

  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    // const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (!granted) {
      alert("You need to enable permission to access library");
    } else {
      grantPermission = granted;
    }
  };
  const handlePress = () => {
    if (!imageUri) selectImage();
    else {
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        {
          text: "Yes",
          onPress: () => onChangeImage(null),
        },
        { text: "No" },
      ]);
    }
  };
  //open library
  const selectImage = async () => {
    if (grantPermission) {
      try {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality: 0.5,
        });

        if (!result.cancelled) {
          onChangeImage(result.uri);
        }
      } catch (error) {
        console.log("Error reading an image", error);
      }
    } else {
      alert("You need to enable permission to access library");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            color={colors.medium}
            size={40}
            name="camera"
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
  },
  container: {
    backgroundColor: colors.light,
    height: 100,
    width: 100,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});
