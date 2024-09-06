import React from "react";
import { Text, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TeamScreen from "../screens/TeamScreen";
import LeavesScreen from "../screens/LeavesScreen";
import HolidayListScreen from "../screens/HolidayListScreen";
import { Ionicons } from "@expo/vector-icons"; // or any other icon library

const Tab = createBottomTabNavigator();

const ROUTES = {
  HOME: "Home",
  CHECK_IN: "CheckIn",
  PROFILE: "Profile",
  LEAVES_LIST: "LeavesList",
  LEAVES: "Leaves",
  TEAM: "Team",
};

const getTabIconAndLabel = (routeName, focused) => {
  let iconName;
  let label;

  switch (routeName) {
    case ROUTES.HOME:
      iconName = focused ? "home" : "home-outline";
      label = "Home";
      break;
    case ROUTES.CHECK_IN:
      iconName = focused ? "leaf" : "leaf-outline";
      label = "CheckIn";
      break;
    case ROUTES.PROFILE:
      iconName = focused ? "person" : "person-outline";
      label = "Profile";
      break;
    case ROUTES.LEAVES_LIST:
      iconName = focused ? "list" : "list-outline";
      label = "Holiday";
      break;
    case ROUTES.LEAVES:
      iconName = focused ? "calendar" : "calendar-outline";
      label = "Leaves";
      break;
    case ROUTES.TEAM:
      iconName = focused ? "people" : "people-outline";
      label = "Team";
      break;
    default:
      iconName = focused ? "default" : "default-icon"; // Optional: handle default case
      label = "Default";
      break;
  }

  return { iconName, label };
};

const AnimatedTabButton = ({ children, onPress, focused }) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(focused ? 1.15 : 1) }],
  }));

  const borderStyle = focused
    ? {
        borderTopWidth: 2,
        borderTopColor: "#2196F3",
      }
    : {};

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.tabButton, borderStyle]}
      accessibilityRole="button"
      accessibilityState={focused ? { selected: true } : {}}
    >
      <Animated.View style={[styles.tabIcon, animatedStyle]}>
        {children}
      </Animated.View>
    </TouchableOpacity>
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBar,
        tabBarButton: (props) => (
          <AnimatedTabButton
            {...props}
            focused={props.accessibilityState.selected}
          />
        ),
        tabBarIcon: ({ focused, color, size }) => {
          const { iconName } = getTabIconAndLabel(route.name, focused);
          return (
            <Ionicons
              name={iconName}
              size={24}
              color={focused ? "#2196F3" : "black"}
            />
          );
        },
        tabBarLabel: ({ focused }) => {
          const { label } = getTabIconAndLabel(route.name, focused);
          if (focused) {
            return <Text style={styles.tabLabel}>{label}</Text>;
          }
          return null;
        },
        headerShown: false, // Hide the header
      })}
    >
      <Tab.Screen name={ROUTES.TEAM} component={TeamScreen} />
      <Tab.Screen name={ROUTES.LEAVES} component={LeavesScreen} />
      <Tab.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Tab.Screen name={ROUTES.LEAVES_LIST} component={HolidayListScreen} />
      <Tab.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#ffffff",
    height: Platform.OS === "android" ? 60 : 80,
    paddingHorizontal: 10,
  },
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabIcon: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabLabel: {
    fontSize: 10,
    color: "#2196F3",
    marginTop: Platform.OS === "android" ? -5 : -10,
    marginBottom: Platform.OS === "android" ? 5 : 0,
    textAlign: "center",
    fontFamily: "Poppins",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BottomTabs;
