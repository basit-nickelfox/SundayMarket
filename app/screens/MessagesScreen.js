import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const messagesData = [
  { id: 1, title: "T1", description: "D1", image: require("../assets/me.jpg") },
  { id: 2, title: "T2", description: "D2", image: require("../assets/me.jpg") },
];
export default function MessagesScreen() {
  const [messages, setMessages] = useState(messagesData);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (item) =>
    setMessages(messages.filter((msg) => msg.id != item.id));
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subTitle={item.description}
            onPress={() => console.log(item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: "T1",
              description: "D1",
              image: require("../assets/me.jpg"),
            },
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/me.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
