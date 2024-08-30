import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import * as Device from "expo-device";
import LoginScreen from "./screens/LoginScreen";
import MainTabs from "./MainTabs";
import { StatusBar } from "react-native";
import { CommonStyles } from "./styles/style";
const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [hasNotch, setHasNotch] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts and other resources
        // Example: await Font.loadAsync({ ... });

        // Check if the device has a notch
        const notchStatus =
          Device.modelName.includes("iPhone X") ||
          Device.modelName.includes("iPhone 11") ||
          Device.modelName.includes("iPhone 12") ||
          Device.modelName.includes("iPhone 13") ||
          Device.modelName.includes("iPhone 14") ||
          Device.modelName.includes("Pixel 3 XL") ||
          Device.modelName.includes("Pixel 4 XL") ||
          Device.modelName.includes("Pixel 5") ||
          Device.modelName.includes("Pixel 6");
        setHasNotch(notchStatus);

        // Set fonts loaded state to true
        setFontsLoaded(true);
      } catch (e) {
        console.warn(e);
      } finally {
        // Hide the splash screen
        await SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!fontsLoaded) {
    return null; // Render nothing while fonts are loading
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
