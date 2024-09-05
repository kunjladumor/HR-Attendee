import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, TouchableOpacity, Platform, Text } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TrackCheckInsScreen from "../screens/TrackCheckInsScreen";
import LeavesScreen from "../screens/LeavesScreen";
import { CommonStyles } from "../styles/style";
import HolidayListScreen from "../screens/HolidayListScreen";
import colors from "../styles/ColorStyles";

const Tab = createBottomTabNavigator();

function CustomTabBarButton({ children, onPress }) {
  return (
    <TouchableOpacity
      style={{
        top: -20,
        justifyContent: "center",
        alignItems: "center",
        ...CommonStyles.shadow,
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
}

export default function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home" // Set the default tab here
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          let label;

          if (route.name === "Home") {
            iconName = "home-outline";
            label = "Home";
          } else if (route.name === "CheckIn") {
            iconName = "leaf-outline";
            label = "CheckIn";
          } else if (route.name === "Profile") {
            iconName = "person-outline";
            label = "Profile";
          } else if (route.name === "LeavesList") {
            iconName = "list-outline";
            label = "Holiday List";
          } else if (route.name === "Leaves") {
            iconName = "calendar-outline";
            label = "Leaves";
          } else if (route.name === "TrackCheckIns") {
            iconName = "people-outline";
            label = "Team";
          }

          return (
            <View style={{ alignItems: "center" }}>
              <Ionicons name={iconName} size={size} color={color} />
              {focused && (
                <Text style={{ color: colors.primary, fontSize: 12 }}>
                  {label}
                </Text>
              )}
            </View>
          );
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.neutral50,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: colors.white,
          height: Platform.OS === "android" ? 60 : 70,
          paddingBottom: Platform.OS === "android" ? 5 : 15,
          ...CommonStyles.shadow,
        },
      })}
    >
      <Tab.Screen name="TrackCheckIns" component={TrackCheckInsScreen} />
      <Tab.Screen name="Leaves" component={LeavesScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="LeavesList" component={HolidayListScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
