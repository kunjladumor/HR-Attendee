import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginScreen from "@screens/LoginScreen";
import ApplyLeaveScreen from "@screens/ApplyLeaveScreen";
import LeaveDetailsScreen from "@screens/LeaveDetailScreen";
import MyProfileScreen from "@screens/MyProfileScreen";
import NotificationScreen from "@screens/NotificationScreen";
import TermsConditionsScreen from "@screens/TermsConditionsScreen";
import PrivacyPolicyScreen from "@screens/PrivacyPolicyScreen";
import BottomTabs from "@components/BottomTabs";
import EditProfileScreen from "@screens/EditProfileScreen";
import IDCardScreen from "@screens/IDCardScreen";
import ProfileScreen from "@screens/ProfileScreen";
import ActivityScreen from "@screens/ActivityScreen";
import SetupScreen from "@screens/SetupScreen";
import ForgotPasswordScreen from "@screens/ForgotPasswordScreen";
import ApplicationIDScreen from "@screens/ApplicationIDScreen"; // Import the new screen

const Stack = createStackNavigator();

const Navigation = () => {
  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    const checkInitialRoute = async () => {
      const isApplicationIDEntered = await AsyncStorage.getItem(
        "isApplicationIDEntered"
      );
      const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");

      if (isApplicationIDEntered !== "true") {
        setInitialRoute("ApplicationID");
      } else {
        setInitialRoute(isLoggedIn === "true" ? "BottomTabs" : "Login");
      }
    };

    checkInitialRoute();
  }, []);

  if (initialRoute === null) {
    return null; // or a loading indicator
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen
          name="ApplicationID"
          component={ApplicationIDScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ApplyLeave"
          component={ApplyLeaveScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyProfile"
          component={MyProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LeaveDetails"
          component={LeaveDetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notifications"
          component={NotificationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TermsConditions"
          component={TermsConditionsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="IDCard"
          component={IDCardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ActivityScreen"
          component={ActivityScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Setup"
          component={SetupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
