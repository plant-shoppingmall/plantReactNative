import React, { useState, useEffect } from "react";
import { View, Text, AsyncStorage, StyleSheet } from "react-native";

const Cart = ({ route }) => {
  const [data, setData] = useState("상품");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@cart");
      setData((date = value.name));
      if (value !== null) {
        setData(value);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{route.params.name}</Text>
      <Text>{data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Cart;
