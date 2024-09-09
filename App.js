import React, { useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import Navigation from "@utils/Navigation";

import { Client, Account, ID } from "react-native-appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66de9688000ac9677f37")
  .setPlatform("com.cyberax.hrattendee");

const fetchFonts = () => {
  return Font.loadAsync({
    PoppinsBold: require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
    PoppinsExtraBold: require("./assets/fonts/Poppins/Poppins-ExtraBold.ttf"),
    PoppinsMedium: require("./assets/fonts/Poppins/Poppins-Medium.ttf"),
    Poppins: require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("./assets/fonts/Poppins/Poppins-SemiBold.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        await fetchFonts();
        setFontsLoaded(true);
      } catch (e) {
        console.warn(e);
      } finally {
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!fontsLoaded) {
    return null; // Render nothing while waiting for fonts to load
  }

  return <Navigation />;
}
