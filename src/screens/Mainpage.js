import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "../navigations/Stack";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import Swiper from "react-native-swiper";
import React from "react";
import ProductScreen from "./ProductScreen";

const images = [
  require("../object/Mainpage/banner1.png"),
  require("../object/Mainpage/banner2.png"),
  require("../object/Mainpage/banner3.png"),
];
const { width: ScreenWidth } = Dimensions.get("window");
const { height: ScreenHeight } = Dimensions.get("window");

const Mainpage = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <View
        style={{
          height: ScreenHeight * 0.13,
          width: ScreenWidth * 1,
          backgroundColor: "green",
        }}
      />

      <View style={{ height: ScreenHeight * 0.25, backgroundColor: "white" }}>
        <Swiper style={styles.wrapper} showsButtons={false}>
          {images.map((image, index) => (
            <View key={index} style={styles.slide}>
              <Image source={image} style={styles.image} resizeMode="contain" />
            </View>
          ))}
        </Swiper>
      </View>
      <View
        style={{
          height: ScreenHeight * 1,
          width: ScreenWidth * 1,
        }}
      >
        <Text style={styles.text}>추천 상품</Text>
        <View style={styles.container}>
          {/* 상세페이지에서 상품 컴포넌트 사용*/}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignItems: "flex-start",
    backgroundColor: "red",
    height: ScreenHeight * 0.8,
    marginLeft: ScreenWidth * 0.05,
    marginTop: ScreenHeight * 0.03,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "90%",
    height: "100%",
  },
  text: {
    fontSize: 25,
    fontWeight: 700,
    color: "black",
    marginLeft: "5%",
    marginTop: "5%",
  },
});

export default Mainpage;
