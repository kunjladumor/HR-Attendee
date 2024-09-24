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
import ApplicationIDScreen from "@screens/ApplicationIDScreen";
import ChangePasswordScreen from "@screens/ChangePasswordScreen";
import AnnouncementScreen from "@screens/AnnouncementScreen";
import SelectMembersScreen from "@screens/SelectMembersScreen";
import CreateNotificationScreen from "@screens/CreateNotificationScreen";
import EditNotificationScreen from "@screens/EditNotificationScreen";
import UserAttendanceScreen from "@screens/UserAttendanceScreen";

const Stack = createStackNavigator();

const screenOptions = { headerShown: false };

const screens = [
  { name: "ApplicationID", component: ApplicationIDScreen },
  { name: "Login", component: LoginScreen },
  { name: "BottomTabs", component: BottomTabs },
  { name: "ApplyLeave", component: ApplyLeaveScreen },
  { name: "MyProfile", component: MyProfileScreen },
  { name: "ProfileScreen", component: ProfileScreen },
  { name: "LeaveDetails", component: LeaveDetailsScreen },
  { name: "Notifications", component: NotificationScreen },
  { name: "TermsConditions", component: TermsConditionsScreen },
  { name: "PrivacyPolicy", component: PrivacyPolicyScreen },
  { name: "EditProfile", component: EditProfileScreen },
  { name: "IDCard", component: IDCardScreen },
  { name: "ActivityScreen", component: ActivityScreen },
  { name: "Setup", component: SetupScreen },
  { name: "ForgotPassword", component: ForgotPasswordScreen },
  { name: "ChangePassword", component: ChangePasswordScreen },
  { name: "AnnouncementScreen", component: AnnouncementScreen },
  { name: "SelectMembers", component: SelectMembersScreen },
  { name: "CreateNotification", component: CreateNotificationScreen },
  { name: "EditNotification", component: EditNotificationScreen },
  { name: "UserAttendance", component: UserAttendanceScreen },
];

const checkInitialRoute = async (setInitialRoute) => {
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

const Navigation = () => {
  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    checkInitialRoute(setInitialRoute);
  }, []);

  if (initialRoute === null) {
    return null; // or a loading indicator
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        {screens.map(({ name, component }) => (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
            options={screenOptions}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
