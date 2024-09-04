import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import MainTabs from "../components/MainTabs";
import ApplyLeaveScreen from "../screens/ApplyLeaveScreen";
import LeaveDetailsScreen from "../screens/LeaveDetailScreen";
import MyProfileScreen from "../screens/MyProfileScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ApplyLeave"
          component={ApplyLeaveScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LeaveDetails"
          component={LeaveDetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyProfile"
          component={MyProfileScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
