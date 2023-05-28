import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width: ScreenWidth } = Dimensions.get("window");
const { height: ScreenHeight } = Dimensions.get("window");

const Mypage = () => {
  return (
    <View
      style={{
        height: ScreenHeight * 1,
        width: ScreenWidth * 1,
        backgroundColor: "white",
      }}
    >
      <View style={{ flex: 1.5, backgroundColor: "green" }} />
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Image
          source={require("../object/Mypage/user.png")}
          style={Mypagetext.Usericon}
        />
        <Text style={{ fontSize: 30, marginTop: "8%" }}>id</Text>
      </View>

      <View
        style={{
          flex: 4,
          backgroundColor: "white",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={Mypagetext.BoxText}></Text>
        <View style={Mypagetext.box1}>
          <Image
            source={require("../object/Mypage/ticket.png")}
            style={Mypagetext.BoxImage}
          />
          <Text style={Mypagetext.BoxText}>쿠폰함</Text>
        </View>
        <View style={Mypagetext.box2}>
          <Image
            source={require("../object/Mypage/point.png")}
            style={Mypagetext.BoxImage}
          />
          <Text style={Mypagetext.BoxText}>포인트</Text>
        </View>
      </View>

      <View style={{ flex: 5, backgroundColor: "black" }}>
        <View style={Mypagetext.Container}>
          <Text style={Mypagetext.Mypagelist}>주문 목록</Text>
          <Image
            source={require("../object/Mypage/arrow-point-to-right.png")}
            style={Mypagetext.ListImage}
          />
        </View>
        <View style={Mypagetext.Container}>
          <Text style={Mypagetext.Mypagelist}>취소&반품&교환 목록</Text>
          <Image
            source={require("../object/Mypage/arrow-point-to-right.png")}
            style={Mypagetext.ListImage}
          />
        </View>
        <View style={Mypagetext.Container}>
          <Text style={Mypagetext.Mypagelist}>결제수단</Text>
          <Image
            source={require("../object/Mypage/arrow-point-to-right.png")}
            style={Mypagetext.ListImage}
          />
        </View>
        <View style={Mypagetext.Container}>
          <Text style={Mypagetext.Mypagelist}>고객센터</Text>
          <Image
            source={require("../object/Mypage/arrow-point-to-right.png")}
            style={Mypagetext.ListImage}
          />
        </View>
        <View style={Mypagetext.Container}>
          <Text style={Mypagetext.Mypagelist}>이용약관</Text>
          <Image
            source={require("../object/Mypage/arrow-point-to-right.png")}
            style={Mypagetext.ListImage}
          />
        </View>
      </View>
    </View>
  );
};
const Mypagetext = StyleSheet.create({
  Mypagelist: {
    fontWeight: 900,
    fontSize: 20,
  },
  Container: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    flex: 1,
    marginTop: 1,
    backgroundColor: "#fffafa",
    flexDirection: "row",
  },
  ListImage: {
    paddingRight: "20%",
    width: "5%",
    height: "40%",
    resizeMode: "contain",
    opacity: 0.7,
  },
  box1: {
    width: "44%",
    height: "65%",
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "10%",
    marginLeft: "5%",
    borderColor: "green",
    borderWidth: 3,
  },
  box2: {
    width: "44%",
    height: "65%",
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "10%",
    marginRight: "5%",
    borderColor: "orange",
    borderWidth: 3,
  },
  BoxImage: {
    width: "50%",
    height: "40%",
    resizeMode: "contain",
    opacity: 0.7,
    marginTop: "10%",
  },
  Usericon: {
    width: "20%",
    height: "60%",
    resizeMode: "contain",
    opacity: 0.7,
    marginTop: "10%",
  },
  BoxText: {
    fontSize: 30,
    fontWeight: 500,
    marginTop: "5%",
  },
});
export default Mypage;
