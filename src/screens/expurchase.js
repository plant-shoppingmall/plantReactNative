import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
const purchasePay = navigation => {
  return (
    <View style={purchasePayStyles.purchasePay}>
      <View style={purchasePayStyles.address}>
        <View style={purchasePayStyles.addressFrame} />
        <Text style={purchasePayStyles.addressTitle}>배송지</Text>
        <View style={purchasePayStyles.button}>
          <View style={purchasePayStyles.buttonFrame} />
          <Text style={purchasePayStyles.buttonTitle}>변경</Text>
        </View>
        <Text style={purchasePayStyles.realAddress}>도로명 주소</Text>
        <Text style={purchasePayStyles.userNamePN}>유병규/010-5177-6539</Text>
      </View>
      <View style={purchasePayStyles.require}>
        <View style={purchasePayStyles.addressFrame} />
        <Text style={purchasePayStyles.requireTitle}>배송 요청사항</Text>
        <View style={purchasePayStyles.button}>
          <View style={purchasePayStyles.buttonFrame} />
          <Text style={purchasePayStyles.buttonTitle}>변경</Text>
        </View>
        <Text style={purchasePayStyles.pickupLocationChoice}>
          문 앞에 놓아주세요
        </Text>
        <Text style={purchasePayStyles.requireChoice}>없음</Text>
        <Text style={purchasePayStyles.pickupLocation}>수령위치</Text>
        <Text style={purchasePayStyles.require}>요청사항</Text>
      </View>
      <View style={purchasePayStyles.ordererInfo}>
        <View style={purchasePayStyles.ordererFrame} />
        <Text style={purchasePayStyles.ordererTitle}>주문자 정보</Text>
        <View style={purchasePayStyles.button}>
          <View style={purchasePayStyles.buttonFrame} />
          <Text style={purchasePayStyles.buttonTitle}>변경</Text>
        </View>
        <Text style={purchasePayStyles.realordererName}>유병규</Text>
        <Text style={purchasePayStyles.realordererPN}>010-5177-6539</Text>
        <Text style={purchasePayStyles.realordererEmail}>
          ybg6539@naver.com
        </Text>
        <Text style={purchasePayStyles.ordererName}>주문자명</Text>
        <Text style={purchasePayStyles.ordererPN}>연락처</Text>
        <Text style={purchasePayStyles.ordererEmail}>이메일</Text>
      </View>
      <View style={purchasePayStyles.product}>
        <View style={purchasePayStyles.productFrame} />
        <Text style={purchasePayStyles.productTitle}>주문 상품</Text>
        <View style={purchasePayStyles.button}>
          <View style={purchasePayStyles.buttonFrame} />
          <Text style={purchasePayStyles.buttonTitle}>변경</Text>
        </View>
        <Text style={purchasePayStyles.priceInProduct}>총 14,000원</Text>
        <View style={purchasePayStyles.productItem} />
      </View>
      <View style={purchasePayStyles.puchaseButton}>
        <View style={purchasePayStyles.buyButton} />
        <Text style={purchasePayStyles.priceText}>14,000원</Text>
        <Text style={purchasePayStyles.deviceText}>결제하기</Text>
      </View>
    </View>
  );
};

const purchasePayStyles = StyleSheet.create({
  purchasePay: {
    width: "100%",
    height: "100%",
    backgroundColor: "#eeeeee",
  },
  require: {
    marginHorizontal: 0.69,
    marginVertical: 12.31,
    width: 337,
    height: 122,
  },
  addressFrame: {
    width: 337,
    height: 122,
    backgroundColor: "#ffffff",
    borderRadius: 1.25,
  },
  requireTitle: {
    marginHorizontal: 0.88,
    marginVertical: 0.94,
    width: 117,
    height: 24,
    color: "#000000",
    borderColor: "#000000",
    borderWidth: 0.03,
    fontFamily: "Inter, sans-serif",
    fontSize: 1.25,
    lineHeight: 1.51,
  },
  button: {
    marginHorizontal: 17.56,
    marginVertical: 0.94,
    width: 2.5,
    height: 1.19,
  },
  buttonFrame: {
    width: 2.5,
    height: 1.19,
    backgroundColor: "#ffffff",
    borderColor: "#d9d9d9",
    borderWidth: 0.06,
  },
  buttonTitle: {
    marginHorizontal: 0.5,
    marginVertical: 0.06,
    width: 1.5,
    height: 1,
    color: "#000000",
    fontFamily: "Inter, sans-serif",
    fontSize: 0.81,
    lineHeight: 0.98,
  },
  pickupLocationChoice: {
    marginHorizontal: 9,
    marginVertical: 3.88,
    width: 6.44,
    height: 1,
    color: "#000000",
    fontFamily: "Inter, sans-serif",
    fontSize: 0.81,
    lineHeight: 0.98,
  },
  requireChoice: {
    marginHorizontal: 9,
    marginVertical: 5.5,
    width: 1.5,
    height: 1,
    color: "#000000",
    fontFamily: "Inter, sans-serif",
    fontSize: 0.81,
    lineHeight: 0.98,
  },
  pickupLocation: {
    marginHorizontal: 0.88,
    marginVertical: 3.88,
    width: 3,
    height: 1,
    color: "#979797",
    fontFamily: "Inter, sans-serif",
    fontSize: 0.81,
    lineHeight: 0.98,
  },
  require: {
    marginHorizontal: 0.88,
    marginVertical: 5.5,
    width: 3,
    height: 1,
    color: "#979797",
    fontFamily: "Inter, sans-serif",
    fontSize: 0.81,
    lineHeight: 0.98,
  },
  address: {
    marginHorizontal: 0.69,
    marginVertical: 0.81,
    width: 21.06,
    height: 10.38,
  },
  addressFrame: {
    width: 21.06,
    height: 10.38,
    backgroundColor: "#ffffff",
    borderRadius: 1.25,
  },
  addressTitle: {
    marginHorizontal: 0.88,
    marginVertical: 0.94,
    width: 3.5,
    height: 1.5,
    color: "#000000",
    borderColor: "#000000",
    borderWidth: 0.03,
    fontFamily: "Inter, sans-serif",
    fontSize: 1.25,
    lineHeight: 1.51,
  },
  button: {
    marginHorizontal: 17.56,
    marginVertical: 0.94,
    width: 2.5,
    height: 1.19,
  },
  buttonFrame: {
    width: 2.5,
    height: 1.19,
    backgroundColor: "#ffffff",
    borderColor: "#d9d9d9",
    borderWidth: 0.06,
  },
  buttonTitle: {
    marginHorizontal: 0.5,
    marginVertical: 0.06,
    width: 1.5,
    height: 1,
    color: "#000000",
    fontFamily: "Inter, sans-serif",
    fontSize: 0.81,
    lineHeight: 0.98,
  },
  realAddress: {
    marginHorizontal: 0.88,
    marginVertical: 3.75,
    width: 4,
    height: 1,
    color: "#000000",
    fontFamily: "Inter, sans-serif",
    fontSize: 0.81,
    lineHeight: 0.98,
  },
  userNamePN: {
    marginHorizontal: 1.25,
    marginVertical: 7.44,
    width: 8.56,
    height: 1,
    color: "#979797",
    fontFamily: "Inter, sans-serif",
    fontSize: 0.81,
    lineHeight: 0.98,
  },
  ordererInfo: {
    marginHorizontal: 0.69,
    marginVertical: 21,
    width: 21.06,
    height: 7.94,
  },
  ordererFrame: {
    width: 21.06,
    height: 7.94,
    backgroundColor: "#ffffff",
    borderRadius: 1.25,
  },
  ordererTitle: {
    marginHorizontal: 0.88,
    marginVertical: 0.94,
    width: 6.13,
    height: 1.5,
    color: "#000000",
    borderColor: "#000000",
    borderWidth: 0.03,
    fontFamily: "Inter, sans-serif",
    fontSize: 1.25,
    lineHeight: 1.51,
  },
  button: {
    marginHorizontal: 17.56,
    marginVertical: 0.94,
    width: 2.5,
    height: 1.19,
  },
  buttonFrame: {
    width: 2.5,
    height: 1.19,
    backgroundColor: "#ffffff",
    borderColor: "#d9d9d9",
    borderWidth: 0.06,
  },
  buttonTitle: {
    marginHorizontal: 0.5,
    marginVertical: 0.06,
    width: 1.5,
    height: 1,
    color: "#000000",
    fontFamily: "Inter, sans-serif",
    fontSize: 0.81,
    lineHeight: 0.98,
  },
  realordererName: {
    marginHorizontal: 9.06,
    marginVertical: 3.31,
    width: 2.25,
    height: 1,
    color: "#000000",
    fontFamily: "Inter, sans-serif",
    fontSize: 0.81,
    lineHeight: 0.98,
  },
  realordererPN: {
    marginHorizontal: 9.06,
    marginVertical: 4.69,
    width: 6,
    height: 1,
    color: "#000000",
    fontFamily: "Inter, sans-serif",
    fontSize: 0.81,
    lineHeight: 0.98,
  },
  realordererEmail: {
    marginHorizontal: 9.06,
    marginVertical: 6.06,
    width: 8.19,
    height: 1,
    color: "#000000",
    fontFamily: "Inter, sans-serif",
    fontSize: 0.81,
    lineHeight: 0.98,
  },
  ordererName: {
    marginHorizontal: 0.94,
    marginVertical: 3.31,
    width: 3,
    height: 1,
    color: "#979797",
    fontFamily: "Inter, sans-serif",
    fontSize: 0.81,
    lineHeight: 0.98,
  },
  ordererPN: {
    marginHorizontal: 0.94,
    marginVertical: 4.69,
    width: 2.25,
    height: 1,
    color: "#979797",
    fontFamily: "Inter, sans-serif",
    fontSize: 0.81,
    lineHeight: 0.98,
  },
  ordererEmail: {
    marginHorizontal: 0.88,
    marginVertical: 6.06,
    width: 2.25,
    height: 1,
    color: "#979797",
    fontFamily: "Inter, sans-serif",
    fontSize: 0.81,
    lineHeight: 0.98,
  },
  product: {
    marginHorizontal: 0.69,
    marginVertical: 30.06,
    width: 21.06,
    height: 14.94,
  },
  productFrame: {
    width: 21.06,
    height: 14.94,
    backgroundColor: "#ffffff",
    borderRadius: 1.25,
  },
  productTitle: {
    marginHorizontal: 0.88,
    marginVertical: 0.94,
    width: 5,
    height: 1.5,
    color: "#000000",
    borderColor: "#000000",
    borderWidth: 0.03,
    fontFamily: "Inter, sans-serif",
    fontSize: 1.25,
    lineHeight: 1.51,
  },
  button: {
    marginHorizontal: 17.56,
    marginVertical: 0.94,
    width: 2.5,
    height: 1.19,
  },
  buttonFrame: {
    width: 2.5,
    height: 1.19,
    backgroundColor: "#ffffff",
    borderColor: "#d9d9d9",
    borderWidth: 0.06,
  },
  buttonTitle: {
    marginHorizontal: 0.5,
    marginVertical: 0.06,
    width: 1.5,
    height: 1,
    color: "#000000",
    fontFamily: "Inter, sans-serif",
    fontSize: 0.81,
    lineHeight: 0.98,
  },
  priceInProduct: {
    marginHorizontal: 1.75,
    marginVertical: 12.63,
    width: 5,
    height: 1.13,
    color: "#000000",
    fontFamily: "Inter, sans-serif",
    fontSize: 0.94,
    lineHeight: 1.13,
  },
  productItem: {
    marginHorizontal: 0.63,
    marginVertical: 3.75,
    width: 7.5,
    height: 7.5,
    backgroundColor: "#d9d9d9",
    borderRadius: 1.25,
  },
  buyButton: {
    width: 22.5,
    height: 3.69,
    backgroundColor: "#fe7d67",
  },
  priceText: {
    marginHorizontal: 6.06,
    marginVertical: 47.44,
    width: 5.56,
    height: 1.5,
    color: "#ffffff",
    fontFamily: "Inter, sans-serif",
    fontSize: 1.25,
    fontWeight: "700",
    lineHeight: 1.51,
  },
  deviceText: {
    marginHorizontal: 11.75,
    marginVertical: 47.44,
    width: 4.63,
    height: 1.5,
    color: "#ffffff",
    fontFamily: "Inter, sans-serif",
    fontSize: 1.25,
    lineHeight: 1.51,
  },
});
export default purchasePay;
