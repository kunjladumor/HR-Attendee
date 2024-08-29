import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, TouchableOpacity } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import CheckInScreen from "./screens/CheckInScreen";
import ProfileScreen from "./screens/ProfileScreen";
import TrackCheckInsScreen from "./screens/TrackCheckInsScreen";
import LeavesScreen from "./screens/LeavesScreen";
import { CommonStyles } from "./styles/style";

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
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home-outline";
          } else if (route.name === "CheckIn") {
            iconName = "calendar-outline";
          } else if (route.name === "Profile") {
            iconName = "person-outline";
          } else if (route.name === "TrackCheckIns") {
            iconName = "list-outline";
          } else if (route.name === "Leaves") {
            iconName = "leaf-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#3185ff",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: "#ffffff",
          height: 60,
          paddingBottom: 10,

          ...CommonStyles.shadow,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="CheckIn" component={CheckInScreen} />
      <Tab.Screen
        name="TrackCheckIns"
        component={TrackCheckInsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={CommonStyles.centerIcon}>
              <Ionicons name="people-outline" size={30} color={"white"} />
            </View>
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen name="Leaves" component={LeavesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
