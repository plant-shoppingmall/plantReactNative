import { StatusBar } from "expo-status-bar";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import {
  findObject,
  findCategory,
  choiceRandom,
  choiceNum,
  priceToInt,
} from "../object/Object";
import MyButton from "../component/MyButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
console.log(SCREEN_WIDTH);

const ProductScreen = ({ route, navigation }) => {
  let productObject = route.params.object;

  //1. 상품 객체의 n개의 이미지를 출력하는 함수와 변수
  let numImage = productObject.image;
  let productImage = [];
  const renderImage = () => {
    for (let i = 0; i < numImage.length; i++) {
      productImage.push(
        <View
          style={{
            width: SCREEN_WIDTH,
            height: SCREEN_WIDTH,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            //key={i}
            source={numImage[i]}
            style={{
              width: SCREEN_WIDTH / 1.4,
              height: SCREEN_WIDTH / 1.4,
            }}
          />
        </View>
      );
    }
    return productImage;
  };
  let image = renderImage();
  // 1번 함수 끝

  // 2번 함수: 상품의 같은 카테고리 상품 5개 랜덤으로 선택
  let category = route.params.category;
  let recommandArray = [];

  const selectRandom = () => {
    while (recommandArray.length < 5) {
      let random = Math.floor(Math.random() * 10);

      for (let i = 0; i < recommandArray.length; i++) {
        if (recommandArray[i] === category[random]) {
          recommandArray.splice(i, 1);
        }
      }
      recommandArray.push(category[random]);

      for (let i = 0; i < recommandArray.length; i++) {
        if (recommandArray[i] === productObject) {
          recommandArray.splice(i, 1);
        }
      }
    }
    return recommandArray;
  };
  let item = selectRandom(); // 5개 아이템 저장된 배열
  // 2번 함수 끝

  // 3번 함수 item 배열 렌더링 작업

  let itemArray = [];

  const renderRecommand = () => {
    for (let i = 0; i < item.length; i++) {
      itemArray.push(
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderColor: "lightgray",
            borderWidth: 1,
            marginRight: 5,
          }}
        >
          <Pressable
            onPress={() =>
              navigation.navigate("상품 페이지", {
                object: item[i],
                category: category,
              })
            }
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={item[i].image[0]}
              style={{
                width: SCREEN_WIDTH / 3.2,
                height: SCREEN_WIDTH / 3.2,
              }}
            ></Image>
            <Text style={{ marginTop: 10, fontSize: 20 }}>{item[i].name}</Text>
            <Text style={{ marginTop: 7, marginBottom: 7 }}>
              {item[i].price}원
            </Text>
            <MyButton
              title="상품 보기"
              style={{
                backgroundColor: "rgba(0, 128, 0, 0.05)",
                marginBottom: 5,
                borderColor: "green",
                borderWidth: 1,
              }}
              onPress={() =>
                navigation.navigate("상품 페이지", {
                  object: item[i],
                  category: category,
                })
              }
            ></MyButton>
          </Pressable>
        </View>
      );
    }
    return itemArray;
  };
  let render = renderRecommand();

  const cartPage = () => {
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>11</Text>
    </View>;
  };
  let page = cartPage();

  return (
    <View style={styles.container}>
      <StatusBar style="dark"></StatusBar>
      <View
        style={{
          flex: 3.2,
        }}
      >
        <ScrollView
          horizontal
          contentContainerStyle={[styles.scrollView]}
          pagingEnabled
          //showsHorizontalScrollIndicator={false}
          // indicatorStyle='white' ios에서만 작동
        >
          {image}
        </ScrollView>
      </View>
      <View style={{ flex: 3 }}>
        <ScrollView
          contentContainerStyle={[styles.scrollViewContext]}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ paddingBottom: 0, paddingLeft: 20, paddingRight: 20 }}>
            <View style={{ backgroundColor: "lightgray", paddingBottom: 3 }}>
              <View style={[styles.nameAndPrice, { backgroundColor: "white" }]}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 15,
                  }}
                >
                  <Text style={[styles.productName]}>{productObject.name}</Text>
                  <Text
                    style={[
                      styles.productName,
                      { fontSize: 15, marginLeft: 5 },
                    ]}
                  >
                    ({productObject.category})
                  </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text
                    style={[
                      styles.productName,
                      { color: "green", fontSize: 35 },
                    ]}
                  >
                    {productObject.price}원
                  </Text>
                  <Text
                    style={[
                      styles.productName,
                      { fontSize: 16, marginLeft: 5 },
                    ]}
                  >
                    무료배송
                  </Text>
                </View>

                <Text
                  style={[
                    styles.productName,
                    { fontSize: 16, marginBottom: 10 },
                  ]}
                >
                  상품 사이즈: {productObject.size}
                </Text>
              </View>

              <View style={{ backgroundColor: "white", marginTop: 3 }}>
                <Text
                  style={[
                    styles.productName,
                    { fontSize: 25, marginTop: 10, marginBottom: 5 },
                  ]}
                >
                  상품 설명
                </Text>
                <Text
                  style={[
                    styles.productName,
                    { fontSize: 15, marginBottom: 10 },
                  ]}
                >
                  {productObject.description}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "white",
              marginTop: 3,
              marginBottom: 20,
            }}
          >
            <Text
              style={[
                styles.productName,
                {
                  fontSize: 20,
                  marginTop: 10,
                  marginBottom: 5,
                  paddingLeft: 20,
                },
              ]}
            >
              동일 카테고리 추천 상품
            </Text>
            <View style={{ flexDirection: "row" }}>
              <ScrollView
                horizontal
                contentContainerStyle={[styles.scrollView]}
                //pagingEnabled
                showsHorizontalScrollIndicator={false}
                // indicatorStyle='white' ios에서만 작동
              >
                {render}
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={[styles.footer, { flex: 0.6 }]}>
        <MyButton
          title="구매하기"
          onPress={() => buyPage(productObject)}
          style={styles.button}
        ></MyButton>
        <MyButton
          title="장바구니"
          onPress={() => {
            {
              page;
            }
          }}
          style={styles.button}
        ></MyButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  productName: {
    fontSize: 40,
    paddingBottom: 5,
  },
  product: {
    alignItems: "center",
    justifyContent: "center",
  },

  scrollView: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollViewContext: {},
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderColor: "lightgray",
    borderTopWidth: 1,
  },
  button: {
    width: SCREEN_WIDTH / 2.5,
    borderColor: "green",
    borderWidth: 1,
    margin: 6,
  },
});
export default ProductScreen;
