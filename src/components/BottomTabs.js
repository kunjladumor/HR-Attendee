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
  { name: ROUTES.HOME, component: HomeScreen },
  { name: ROUTES.LEAVES, component: LeavesScreen },
  { name: ROUTES.LEAVES_LIST, component: HolidayListScreen },
  { name: ROUTES.TEAM, component: TeamScreen },
  { name: ROUTES.PROFILE, component: ProfileScreen },
];

const getTabIconAndLabel = (routeName, focused) => {
  const icons = {
    [ROUTES.HOME]: "home",
    [ROUTES.CHECK_IN]: "leaf",
    [ROUTES.PROFILE]: "person",
    [ROUTES.LEAVES_LIST]: "list",
    [ROUTES.LEAVES]: "calendar",
    [ROUTES.TEAM]: "people",
  };

  return {
    iconName: focused ? icons[routeName] : `${icons[routeName]}-outline`,
    label: routeName,
  };
};

const AnimatedTabButton = ({ children, onPress, focused }) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: withSpring(focused ? 1.1 : 1, { damping: 20, stiffness: 90 }) },
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
    opacity: withSpring(opacity.value, { damping: 20, stiffness: 90 }),
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
        return (
          <Ionicons
            name={iconName}
            size={focused ? 28 : 24}
            color={focused ? colors.primary : colors.neutral50}
            style={{ marginBottom: focused ? 0 : -10 }}
          />
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
});

export default BottomTabs;
