import React from "react";
import { StyleSheet, TouchableOpacity, Platform, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import HomeScreen from "@screens/HomeScreen";
import ProfileScreen from "@screens/ProfileScreen";
import TeamScreen from "@screens/TeamScreen";
import LeavesScreen from "@screens/LeavesScreen";
import HolidayListScreen from "@screens/HolidayListScreen";
import colors from "@styles/ColorStyles";

const Tab = createBottomTabNavigator();

const ROUTES = {
  HOME: "Home",
  CHECK_IN: "CheckIn",
  PROFILE: "Profile",
  LEAVES_LIST: "LeavesList",
  LEAVES: "Leaves",
  TEAM: "Team",
};

const tabs = [
  { name: ROUTES.TEAM, component: TeamScreen },
  { name: ROUTES.LEAVES, component: LeavesScreen },
  { name: ROUTES.HOME, component: HomeScreen },
  { name: ROUTES.LEAVES_LIST, component: HolidayListScreen },
  { name: ROUTES.PROFILE, component: ProfileScreen },
];

const getTabIconAndLabel = (routeName, focused) => {
  const icons = {
    [ROUTES.HOME]: focused ? "home" : "home-outline",
    [ROUTES.CHECK_IN]: focused ? "leaf" : "leaf-outline",
    [ROUTES.PROFILE]: focused ? "person" : "person-outline",
    [ROUTES.LEAVES_LIST]: focused ? "list" : "list-outline",
    [ROUTES.LEAVES]: focused ? "calendar" : "calendar-outline",
    [ROUTES.TEAM]: focused ? "people" : "people-outline",
  };

  const labels = {
    [ROUTES.HOME]: "Home",
    [ROUTES.CHECK_IN]: "CheckIn",
    [ROUTES.PROFILE]: "Profile",
    [ROUTES.LEAVES_LIST]: "Holiday",
    [ROUTES.LEAVES]: "Leaves",
    [ROUTES.TEAM]: "Team",
  };

  return { iconName: icons[routeName], label: labels[routeName] };
};

const AnimatedTabButton = ({ children, onPress, focused }) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withSpring(focused ? 1.1 : 1, {
          damping: 20, // Increase damping to slow down the animation
          stiffness: 90, // Decrease stiffness to make the animation smoother
        }),
      },
    ],
  }));

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.tabButton}
      accessibilityRole="button"
      accessibilityState={focused ? { selected: true } : {}}
    >
      <Animated.View style={[styles.tabIcon, animatedStyle]}>
        {children}
      </Animated.View>
    </TouchableOpacity>
  );
};

const AnimatedTabLabel = ({ label, focused }) => {
  const opacity = useSharedValue(focused ? 1 : 0);
  const translateY = useSharedValue(focused ? 0 : -10);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: withSpring(opacity.value, {
      damping: 20,
      stiffness: 90,
    }),
    transform: [
      {
        translateY: withSpring(translateY.value, {
          damping: 20,
          stiffness: 90,
        }),
      },
    ],
  }));

  React.useEffect(() => {
    opacity.value = focused ? 1 : 0;
    translateY.value = focused ? -8 : 0;
  }, [focused]);

  return (
    <Animated.Text style={[styles.tabLabel, animatedStyle]}>
      {label}
    </Animated.Text>
  );
};

const BottomTabs = () => (
  <Tab.Navigator
    initialRouteName={ROUTES.HOME}
    screenOptions={({ route }) => ({
      tabBarShowLabel: true,
      tabBarStyle: styles.tabBar,
      tabBarButton: (props) => (
        <AnimatedTabButton
          {...props}
          focused={props.accessibilityState.selected}
        />
      ),
      tabBarIcon: ({ focused }) => {
        const { iconName } = getTabIconAndLabel(route.name, focused);
        const tab = tabs.find((tab) => tab.name === route.name);

        return (
          <View>
            <Ionicons
              name={iconName}
              size={focused ? 28 : 24} // Increase icon size when focused
              color={focused ? colors.primary : colors.neutral50}
            />
          </View>
        );
      },
      tabBarLabel: ({ focused }) => {
        const { label } = getTabIconAndLabel(route.name, focused);
        return <AnimatedTabLabel label={label} focused={focused} />;
      },
      headerShown: false,
    })}
  >
    {tabs.map((tab) => (
      <Tab.Screen key={tab.name} name={tab.name} component={tab.component} />
    ))}
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.surface,
    height: Platform.OS === "android" ? 60 : 80,
    paddingHorizontal: 10,
  },
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -1,
  },
  tabIcon: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabLabel: {
    fontSize: 10,
    color: colors.primary,
    textAlign: "center",
    fontFamily: "Poppins",
  },
  badgeContainer: {
    position: "absolute",
    right: -6,
    top: -3,
    backgroundColor: colors.secondary,
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: colors.white,
    fontSize: 10,
    lineHeight: 16,
    fontFamily: "PoppinsSemiBold",
  },
});

export default BottomTabs;
