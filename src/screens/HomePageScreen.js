
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList, ScrollView
} from "react-native";

import { images, icons, COLORS, FONTS, SIZES } from '../constants';
import { airPurifyPlantes,cactus,flower } from "../object/Object";


const Home = ({ navigation }) => {

  // Dummy Data
  const [newPlants, setNewPlants] = React.useState([
    {
      id: 0,
      name: "Plant 1",
      img: images.plant1,
      favourite: false,
    },
    {
      id: 1,
      name: "Plant 2",
      img: images.plant2,
      favourite: true,
    },
    {
      id: 2,
      name: "Plant 3",
      img: images.plant3,
      favourite: false,
    },
    {
      id: 3,
      name: "Plant 4",
      img: images.plant4,
      favourite: false,
    },
    {
      id: 4,
      name: "Plant 5",
      img: images.plant5,
      favourite: false,
    },
    {
      id: 5,
      name: "Plant 6",
      img: images.plant6,
      favourite: false,
    },
  ]);

  const [friendList, setFriendList] = React.useState([
    {
      id: 0,
      img: images.plant3,
    },
    {
      id: 1,
      img: images.plant3,
    },
    {
      id: 2,
      img: images.plant3,
    },
    {
      id: 3,
      img: images.plant3,
    },
    {
      id: 4,
      img: images.plant3,
    },
  ]);

  React.useEffect(() => {
  }, []);

  // Render

  function renderNewPlants(item, index) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: SIZES.base }}>
        <Image
          source={item.img}
          resizeMode="cover"
          style={{
            width: SIZES.width * 0.23,
            height: '82%',
            borderRadius: 15
          }}
        />

        <View
          style={{
            position: 'absolute',
            bottom: '17%',
            right: 0,
            backgroundColor: COLORS.primary,
            paddingHorizontal: SIZES.base,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        >
          <Text style={{ color: COLORS.white, ...FONTS.body4 }}>{item.name}</Text>
        </View>

        <TouchableOpacity
          style={{
            position: 'absolute',
            top: '15%',
            left: 7,
          }}
          onPress={() => { console.log("Focus on pressed") }}
        >
          <Image
            source={item.favourite ? icons.heartRed : icons.heartGreenOutline}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20
            }}
          />
        </TouchableOpacity>
      </View>
    )
  }

  function renderFriendsComponent() {
    if (friendList.length == 0) {
      return (
        <View></View>
      )
    } else if (friendList.length <= 3) {
      return (
        friendList.map((item, index) => (
          <View
            key={`friend-${index}`}
            style={index == 0 ? { flexDirection: 'row' } : { flexDirection: 'row', marginLeft: -20 }}
          >
            <Image
              source={item.img}
              resizeMode="cover"
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                borderWidth: 3,
                borderColor: COLORS.primary
              }}
            />
          </View>
        ))
      )
    } else {
      return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {friendList.map((item, index) => {
            if (index <= 2) {
              return (
                <View
                  key={`friend-${index}`}
                  style={index == 0 ? {} : { marginLeft: -20 }}
                >
                  <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      borderWidth: 3,
                      borderColor: COLORS.primary
                    }}
                  />
                </View>
              )
            }
          })}

          <Text style={{ marginLeft: 5, color: COLORS.secondary, ...FONTS.body3 }}>+{friendList.length - 3} More</Text>
        </View>
      )
    }
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        marginVertical: SIZES.base,
        width: SIZES.width / 2.5
      }}
      onPress={() => console.log(item.title)}
    >
      <View
        style={{
          height: 80,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: COLORS.primary
        }}
      >
        <Image
          source={item.img}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20
          }}
        />
      </View>

      <View
        style={{
          padding: SIZES.padding,
          backgroundColor: COLORS.lightGray,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20
        }}
      >
        <Text style={{ ...FONTS.h4 }}>{item.title}</Text>
        <Text style={{ ...FONTS.body4 }}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  )

  return (

    <View style={styles.container}>
      {/* New Plants */}
      <View style={{ height: "30%", backgroundColor: COLORS.white }}>
        <View style={{
          flex: 1,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          backgroundColor: COLORS.primary
        }}>

          <View style={{ marginTop: SIZES.padding * 2, marginHorizontal: SIZES.padding }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ color: COLORS.white, ...FONTS.h2, }}>새로운 식물</Text>
              <TouchableOpacity
                onPress={() => { console.log("Focus on pressed") }}
              >
                <Image
                  source={icons.focus}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20
                  }}
                />
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: SIZES.base }}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={newPlants}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => renderNewPlants(item, index)}
              />
            </View>
          </View>
        </View>
      </View>

      {/* Today's Share */}
      <ScrollView>
        <View style={{ height: 300, backgroundColor: COLORS.lightGray }}>
          <View style={{
            height: 250,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.white
          }}>
            <View style={{ marginTop: SIZES.font, marginHorizontal: SIZES.padding }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ color: COLORS.secondary, ...FONTS.h2, }}>오늘의 추천상품</Text>

                <TouchableOpacity
                  onPress={() => { console.log("See All on pressed") }}
                >
                  <Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>See All</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', height: "88%", marginTop: SIZES.base }}>
                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => { navigation.navigate("상품 페이지"),{
                      object: flower[2],
                    } }}
                  >
                    <Image
                      source={flower[2].image[0]}
                      resizeMode="cover"
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 20,
                        borderColor: COLORS.green,
                        borderWidth: 2
                      }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{ flex: 1, marginTop: SIZES.font }}
                    onPress={() => {
                      navigation.navigate("상품 페이지") ,{
                        object: cactus[2],
                      }}}
                  >
                    <Image
                      source={cactus[2].image[0]}
                      resizeMode="cover"
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 20,
                        borderColor: COLORS.green,
                        borderWidth: 2
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1.3 }}>
                  <TouchableOpacity
                    style={{ flex: 1, marginLeft: SIZES.font }}
                    onPress={() => { navigation.navigate("상품 페이지") ,{
                      object: airPurifyPlantes[2],
                    }}}
                  >
                    <Image
                      source={airPurifyPlantes[2].image[0]}
                      resizeMode="cover"
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 20,
                        borderColor: COLORS.green,
                        borderWidth: 2
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>

            </View>
          </View>
        </View>
        <View style={{ height: 300, backgroundColor: COLORS.lightGray }}>
          <View style={{
            height: 300,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.white
          }}>
            <View style={{ marginTop: SIZES.font, marginHorizontal: SIZES.padding }}>
              <View style={{ flexDirection: 'row', height: "88%", marginTop: SIZES.base }}>
                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => { navigation.navigate("상품 페이지"),{
                      object: flower[2],
                    } }}
                  >
                    <Image
                      source={flower[2].image[0]}
                      resizeMode="cover"
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 20,
                        borderColor: COLORS.green,
                        borderWidth: 2
                      }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{ flex: 1, marginTop: SIZES.font }}
                    onPress={() => {
                      navigation.navigate("상품 페이지") ,{
                        object: cactus[2],
                      }}}
                  >
                    <Image
                      source={cactus[2].image[0]}
                      resizeMode="cover"
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 20,
                        borderColor: COLORS.green,
                        borderWidth: 2
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1.3 }}>
                  <TouchableOpacity
                    style={{ flex: 1, marginLeft: SIZES.font }}
                    onPress={() => { navigation.navigate("상품 페이지") ,{
                      object: airPurifyPlantes[2],
                    }}}
                  >
                    <Image
                      source={airPurifyPlantes[2].image[0]}
                      resizeMode="cover"
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 20,
                        borderColor: COLORS.green,
                        borderWidth: 2
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={{ height: 300, backgroundColor: COLORS.lightGray }}>
          <View style={{
            height: 250,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.white
          }}>
            <View style={{ marginTop: SIZES.font, marginHorizontal: SIZES.padding }}>
              <View style={{ flexDirection: 'row', height: "88%", marginTop: SIZES.base }}>
                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => { navigation.navigate("상품 페이지"),{
                      object: flower[2],
                    } }}
                  >
                    <Image
                      source={flower[2].image[0]}
                      resizeMode="cover"
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 20,
                        borderColor: COLORS.green,
                        borderWidth: 2
                      }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{ flex: 1, marginTop: SIZES.font }}
                    onPress={() => {
                      navigation.navigate("상품 페이지") ,{
                        object: cactus[2],
                      }}}
                  >
                    <Image
                      source={cactus[2].image[0]}
                      resizeMode="cover"
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 20,
                        borderColor: COLORS.green,
                        borderWidth: 2
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1.3 }}>
                  <TouchableOpacity
                    style={{ flex: 1, marginLeft: SIZES.font }}
                    onPress={() => { navigation.navigate("상품 페이지") ,{
                      object: airPurifyPlantes[2],
                    }}}
                  >
                    <Image
                      source={airPurifyPlantes[2].image[0]}
                      resizeMode="cover"
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 20,
                        borderColor: COLORS.green,
                        borderWidth: 2
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

        </View>


      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});

export default Home;
