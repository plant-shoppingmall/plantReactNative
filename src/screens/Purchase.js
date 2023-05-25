import React, { useState } from "react";
import Modal from "react-native-modal";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Button, { ButtonTypes } from "../component/PurchaseButton";

const Purchase = navigation => {
  const price = "14,000원";
  const products = [
    {
      id: 1,
      name: "장미꽃",
      price: "14,000",
      image: require("../object/꽃/image000.png"),
    },
    {
      id: 2,
      name: "장미꽃",
      price: "14,000",
      image: require("../object/꽃/image000.png"),
    },
    {
      id: 3,
      name: "장미꽃",
      price: "14,000",
      image: require("../object/꽃/image000.png"),
    },
    {
      id: 4,
      name: "장미꽃",
      price: "14,000",
      image: require("../object/꽃/image000.png"),
    },
  ];
  const userInfo = {
    id: 1,
    name: "홍길동",
    email: "test@naver.com",
    phoneNumber: "010-1234-5678",
    address: "서울시 성북구 화랑로 48길 16",
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [modalOutput, setModalOutput] = useState(userInfo.address);
  return (
    <View style={styles.container}>
      {/* 배송 요청사항 변경 Modal */}
      <Modal
        isVisible={modalVisible}
        useNativeDriver={true}
        hideModalContentWhileAnimating={true}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>배송 요청사항</Text>
          <Button
            title="변경"
            onPress={() => {
              console.log("Modal quit!");
              setModalOutput("선택 3");
              setModalVisible(false);
            }}
            buttonStyle={styles.ChangeButtonFrame}
            textStyle={styles.ChangeButtonTitle}
          />
        </View>
      </Modal>
      {/* 메인 화면 */}
      <ScrollView>
        <View style={styles.purchasePay}>
          {/* 배송지 */}
          <View style={styles.address}>
            <View style={styles.frame}>
              <View style={styles.frameHead}>
                <Text style={styles.frameTitle}>배송지</Text>
                <Button
                  title="변경"
                  onPress={() => {
                    console.log("change!");
                  }}
                  buttonStyle={[styles.ChangeButtonFrame, { marginLeft: 180 }]}
                  textStyle={styles.ChangeButtonTitle}
                />
              </View>
              <Text style={styles.menuTitle}>{userInfo.address}</Text>
            </View>
          </View>
          {/* 배송 요청사항 */}
          <View style={styles.require}>
            <View style={styles.frame}>
              <View style={styles.frameHead}>
                <Text style={styles.frameTitle}>배송 요청사항</Text>
                <Button
                  title="변경"
                  onPress={() => {
                    setModalVisible(true);
                    console.log("change!");
                  }}
                  buttonStyle={[styles.ChangeButtonFrame, { marginLeft: 105 }]}
                  textStyle={styles.ChangeButtonTitle}
                />
              </View>
              <View style={styles.menu}>
                <Text style={styles.menuTitle}>수령위치</Text>
                <Text style={styles.userChoice}>문 앞에 놓아주세요</Text>
              </View>
              <View style={styles.menu}>
                <Text style={styles.menuTitle}>요청사항</Text>
                <Text style={styles.userChoice}>없음</Text>
              </View>
            </View>
          </View>
          {/* 주문자 정보 */}
          <View style={styles.ordererInfo}>
            <View style={styles.frame}>
              <Text style={styles.frameTitle}>주문자 정보</Text>
              <View style={styles.menu}>
                <Text style={styles.menuTitle}>주문자명</Text>
                <Text style={[styles.userChoice, { marginLeft: 23 }]}>
                  {userInfo.name}
                </Text>
              </View>
              <View style={styles.menu}>
                <Text style={styles.menuTitle}>연락처</Text>
                <Text style={[styles.userChoice, { marginLeft: 42 }]}>
                  {userInfo.phoneNumber}
                </Text>
              </View>
              <View style={styles.menu}>
                <Text style={styles.menuTitle}>이메일</Text>
                <Text style={[styles.userChoice, { marginLeft: 43 }]}>
                  {userInfo.email}
                </Text>
              </View>
            </View>
          </View>
          {/* 주문 상품 */}
          <View style={styles.product}>
            <View style={styles.frame}>
              <Text style={styles.frameTitle}>주문 상품</Text>
              {/* 상품 리스트 */}
              <View style={styles.itemList}>
                <ScrollView horizontal={true} style={styles.itemScrollView}>
                  {products.map(product => (
                    <View key={product.id} style={styles.item}>
                      <Image source={product.image} style={styles.itemImage} />
                      <Text style={styles.itemTitle}>{product.name}</Text>
                      {/* <Text style={purchasePayStyles.itemInfo}>7,000원 2개</Text> */}
                    </View>
                  ))}
                </ScrollView>
              </View>
              {/* 상품 총 가격 */}
              <Text style={styles.priceInProduct}>총 14,000원</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* 결제 버튼 */}
      <View style={styles.puchaseButton}>
        <Button
          buttonType={ButtonTypes.BUY}
          price="14,000원"
          title="결제하기"
          onPress={() => {
            console.log("buy!");
          }}
          buttonStyle={styles.buyButton}
          textStyle={styles.deviceText}
          priceStyle={styles.priceText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  purchasePay: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#eeeeee",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  address: {
    marginBottom: 10,
    width: "98%",
    height: 160,
  },
  require: {
    marginBottom: 10,
    width: "98%",
    height: 160,
  },
  ordererInfo: {
    marginBottom: 10,
    width: "98%",
    height: 190,
  },
  product: {
    marginBottom: 10,
    width: "98%",
    height: 320,
  },
  frame: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    paddingLeft: 20,
    paddingTop: 10,
  },
  frameHead: {
    flexDirection: "row",
  },
  frameTitle: {
    marginBottom: 30,
    marginRight: 50,
    color: "#000000",
    borderWidth: 0.03,
    fontSize: 25,
  },
  ChangeButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  ChangeButtonFrame: {
    marginTop: 2,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 30,
    backgroundColor: "#ffffff",
    borderColor: "#d9d9d9",
    borderWidth: 1,
  },
  ChangeButtonTitle: {
    color: "#000000",
    //fontFamily: "Inter, sans-serif",
    fontSize: 15,
  },
  menu: {
    flexDirection: "row",
  },
  menuTitle: {
    marginRight: 50,
    marginBottom: 10,
    color: "gray",
    fontSize: 18,
  },
  userChoice: {
    color: "#000000",
    fontSize: 18,
    marginLeft: 20,
  },
  itemScrollView: {
    flexDirection: "row",
  },
  itemList: {
    flexDirection: "row",
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginRight: 10,
    marginBottom: 10,
    width: 150,
    height: 185,
    borderWidth: 0.5,
    borderRadius: 20,
    borderStyle: "solid",
    borderColor: "gray",
    backgroundColor: "#FFFFFF",
    shadowColor: "black",
    shadowOpacity: 0.27,
    elevation: 3,
  },
  itemImage: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    marginTop: 5,
    width: 130,
    height: 130,
    borderWidth: 0.5,
    borderRadius: 20,
    borderColor: "gray",
  },
  itemTitle: {
    color: "black",
    fontSize: 15,
  },
  itemInfo: {
    color: "black",
    fontSize: 13,
  },
  priceInProduct: {
    textAlign: "right",
    marginTop: 10,
    marginRight: 20,
    color: "black",
    fontSize: 20,
  },

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

  modalContainer: {
    flexDirection: "column",
    alignItems: "center",
    /* 모달창 크기 조절 */
    width: "90%",
    height: 300,
    backgroundColor: "#D6D6D6",
    borderRadius: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 700,
  },
});

export default Purchase;
