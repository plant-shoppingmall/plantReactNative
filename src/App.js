import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigations/Stack";
import * as Font from 'expo-font'
async function loadFonts() {
  await Font.loadAsync({
    "playfair-bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "roboto-regular": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Black": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Bold.ttf"),
   });
}
const App = () => {
  useEffect(() => {
    loadFonts();
  }, []);
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};
export default App;
