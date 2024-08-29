import React from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import icons from Expo
import CustomText from "../components/CustomText/CustomText"; // Import the CustomText component
import { CommonStyles } from "../styles/style"; // Import the CommonStyles component
import Button from "../components/Buttons/Button"; // Import the Button component
import ButtonStyles from "../components/Buttons/ButtonStyles";
import CustomButton, {colors} from "../components/Buttons/ButtonComponent"; // Import the CustomButton component


export default function HomeScreen({ navigation }) {
  const handleLogout = () => {
    navigation.replace("Login");
  };

  return (
    <View style={CommonStyles.container}>
      <View style={CommonStyles.header}>
        <Image
          source={{ uri: "https://example.com/logo.png" }} // Replace with your logo URL
          style={CommonStyles.logo}
        />
        <CustomText style={CommonStyles.headerText}>
          Welcome to HR Attendance App
        </CustomText>
      </View>
      <View style={CommonStyles.content}>
        <CustomText style={CommonStyles.welcomeText}>Hello, User!</CustomText>
        <CustomText style={CommonStyles.description}>
          Manage your attendance and profile with ease.
        </CustomText>
        <CustomButton
          title="Go to Check-In"
          iconName="checkmark-circle"
          iconSize={24}
          iconColor="#fff"
          onPress={() => navigation.navigate("CheckIn")}
          color="primary"
        />
        <CustomButton
          title="View Profile"
          iconName="person"
          iconSize={24}
          iconColor="#fff"
          onPress={() => navigation.navigate("Profile")}
          color="primary"
        />
        <CustomButton
          title="Track Check-Ins"
          iconName="list"
          iconSize={24}
          iconColor="#fff"
          onPress={() => navigation.navigate("TrackCheckIns")}
          color="primary"
        />
        <CustomButton
          title="Logout"
          iconName="log-out"
          iconSize={24}
          iconColor="#fff"
          onPress={handleLogout}
          color="primary"
        />

      </View>

    </View>

  );
}
