// import React, { useEffect, useState } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import * as Font from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
// import LoginScreen from "./screens/LoginScreen"; // Import LoginScreen component
// import MainTabs from "./MainTabs"; // Import MainTabs component

// const Stack = createStackNavigator();

// export default function App() {
//   const [fontsLoaded, setFontsLoaded] = useState(false);

//   useEffect(() => {
//     async function loadResourcesAndDataAsync() {
//       try {
//         SplashScreen.preventAutoHideAsync();

//         await Font.loadAsync({
//           "Poppins-Regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
//           "Poppins-Bold": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
//         });

//         setFontsLoaded(true);
//       } catch (e) {
//         console.warn(e);
//       } finally {
//         SplashScreen.hideAsync();
//       }
//     }

//     loadResourcesAndDataAsync();
//   }, []);

//   if (!fontsLoaded) {
//     return null;
//   }

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen
//           name="Main"
//           component={MainTabs}
//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }



import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import LoginScreen from "./screens/LoginScreen"; // Import LoginScreen component
import MainTabs from "./MainTabs"; // Import MainTabs component

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Prevent the splash screen from auto-hiding
        await SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          "Poppins-Regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
          "Poppins-Bold": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
        });

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