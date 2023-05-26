import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductScreen from "../screens/ProductScreen";
import Category from "../screens/Category";
import Cart from "../screens/Cart";
import List from "../screens/List";
import ListScreen from "../screens/ListScreen";
import cateScreen from "../screens/CateScreen";
import { getFonts } from "../constants/theme";

//MobileProject\src\screens\ProductScreen.js

const Stack = createStackNavigator();

const StaclNavigation = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="list"
        component={List}
        options={{ headerShown: false }}
      ></Stack.Screen> */}
      <Stack.Screen
        name="category"
        component={Category}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="상품 페이지"
        component={ProductScreen}
        //options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="장바구니"
        component={Cart}
        //options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="list"
        component={ListScreen}
        //options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="Cate"
        component={cateScreen}
        //options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
export default StaclNavigation;
