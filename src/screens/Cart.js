import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { priceToInt } from "../object/Object";

const Item = ({ name, initialNum, price, index, onDelete }) => {
  const [num, setNum] = useState(initialNum);
  const [renderPrice, setRenderPrice] = useState(priceToInt(price) * num);
  const { width: SCREEN_WIDTH } = Dimensions.get("window");

  if (num < 1) {
    setNum(1);
    setRenderPrice(priceToInt(price));
  }
  if (num > 10) {
    setNum(10);
    setRenderPrice(priceToInt(price) * 10);
  }

  const setPlusValue = () => {
    setNum(num + 1);
    setRenderPrice(priceToInt(price) * (num + 1));
  };

  const setMinusValue = () => {
    setNum(num - 1);
    setRenderPrice(priceToInt(price) * (num - 1));
  };

  return (
    <View
      style={{
        flexDirection: "row",
        width: SCREEN_WIDTH,
        justifyContent: "space-around",
        borderWidth: 2,
        borderRadius: 30,
        marginBottom: 5,
      }}
    >
      <View>
        <Text style={{ fontSize: 20 }}>{"이름: " + name}</Text>
        <Text style={{ fontSize: 20 }}>{"수량: " + num}</Text>
        <Text style={{ fontSize: 20 }}>
          {"기격: " + renderPrice.toLocaleString() + "원"}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          title="+"
          onPress={() => setPlusValue()}
          style={styles.button}
        ></Button>
        <Button
          title="-"
          onPress={() => setMinusValue()}
          style={styles.button}
        ></Button>
        <Button
          title="삭제"
          onPress={() => {
            onDelete(index);
          }}
          style={styles.button}
        ></Button>
      </View>
    </View>
  );
};

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await AsyncStorage.getItem("cart");
        const parsedData = JSON.parse(data);
        setItems(parsedData);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async index => {
    try {
      const updatedItems = [...items];
      updatedItems.splice(index, 1);
      setItems(updatedItems);
      await AsyncStorage.setItem("cart", JSON.stringify(updatedItems));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 10 }}>
        <ScrollView
          contentContainerStyle={[styles.scrollViewContext]}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            {items.map(item => (
              <Item
                name={item.name}
                initialNum={item.productNum}
                price={item.price}
                onDelete={handleDelete}
              />
            ))}
            {/* {(() => {
          if (items.length > 0) {
            return items.map((item, index) => (
              <Item
                key={index}
                name={item.name}
                initialNum={item.productNum}
                price={item.price}
                index={index}
                onDelete={handleDelete}
              />
            ));
          } else {
            <Text>상품이 없습니다.</Text>;
          }
        })()} */}
          </View>
        </ScrollView>
      </View>
      <View style={[styles.puchaseButton, { flex: 1 }]}>
        <Button
          price="14,000원"
          title="결제하기"
          onPress={() => {
            navigation.navigate("purchase", {
              product: items,
              productNum: productNum,
            });
          }}
          style={styles.buyButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: { padding: "auto" },
  puchaseButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    backgroundColor: "(0,0,0,0.5)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  buyButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#fe7d67",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  priceText: {
    marginRight: 10,
    color: "#ffffff",
    //fontFamily: "Inter, sans-serif",
    fontSize: 20,
    fontWeight: 700,
  },
  deviceText: {
    color: "#ffffff",
    //fontFamily: "Inter, sans-serif",
    fontSize: 20,
  },
});

export default Cart;
