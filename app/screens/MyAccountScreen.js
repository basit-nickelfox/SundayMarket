import React from "react";
import { StyleSheet, View } from "react-native";
import AppIcon from "../components/AppIcon";
import colors from "../config/colors";
import Screen from "../components/Screen";
import ListItem from "../components/lists/ListItem";
import { FlatList } from "react-native-gesture-handler";
import ListItemSeparator from "../components/lists/ListItemSeparator";

const menuItem = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      background: colors.primary,
    },
    // targetScreen:'MyListing'
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      background: colors.secondary,
    },
    targetScreen: "Messages",
  },
];
const MyAccountScreen = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Basit Mir"
          subTitle="iammirbasit@gmail.com"
          image={require("../assets/me.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItem}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => navigation.navigate(item.targetScreen)}
              title={item.title}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  bgColor={item.icon.background}
                  iconColor={colors.white}
                  size={40}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>

      <ListItem
        title="Log Out"
        IconComponent={
          <AppIcon
            name="logout"
            bgColor="#ffe66d"
            iconColor={colors.white}
            size={40}
          />
        }
      />
    </Screen>
  );
};

export default MyAccountScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});
