import React from "react";
import { Button, View, StyleSheet } from "react-native";
import { cactus, flower, pot, airPurifyPlantes } from "../object/Object";
//price, image, category, description, size
const Category = ({ navigation, route }) => {
  const items = flower;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {items.map(item => (
        <Button
          key={item.id}
          title={item.name}
          onPress={() =>
            navigation.navigate("상품 페이지", {
              object: item,
              category: items,
            })
          }
        ></Button>
      ))}
      <Button
        title="purchase"
        onPress={() => navigation.navigate("purchase")}
      ></Button>
      <Button
        title="categoryScreen"
        onPress={() => navigation.navigate("cateScreen")}
      ></Button>
      <Button
        title="ListScreen"
        onPress={() => navigation.navigate("listScreen")}
      ></Button>
    </View>
  );
};
export default Category;
