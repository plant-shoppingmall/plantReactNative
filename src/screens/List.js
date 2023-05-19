import React from "react";
import { Button, View, StyleSheet } from "react-native";
import { flower, products } from "../object/Object";

const List = navigation => {
  const items = flower;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {items.map(item => (
        <Button
          key={item.id}
          title={item.name}
          onPress={() =>
            navigation.navigate("category", {
              category: items,
            })
          }
        ></Button>
      ))}
    </View>
  );
};
export default List;
