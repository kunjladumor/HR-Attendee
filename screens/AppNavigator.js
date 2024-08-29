import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen"; // Adjust the import path as necessary
import CheckInScreen from "./screens/CheckInScreen"; // Adjust the import path as necessary
import LoginScreen from "./screens/LoginScreen"; // Adjust the import path as necessary

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CheckInScreen"
        component={CheckInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
