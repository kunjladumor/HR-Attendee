import React from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import icons from Expo
import CustomText from "../components/CustomText/CustomText"; // Import the CustomText component
import { CommonStyles } from "../styles/style"; // Import the CommonStyles component
import Button from "../components/Buttons/Button"; // Import the Button component
import ButtonStyles from "../components/Buttons/ButtonStyles";

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
        {/* <TouchableOpacity
          style={CommonStyles.button}
          onPress={() => navigation.navigate("CheckIn")}
        >
          <Ionicons name="checkmark-circle" size={24} color="#fff" />
          <CustomText style={CommonStyles.buttonText}>
            Go to Check-In
          </CustomText>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={CommonStyles.button}
          onPress={() => navigation.navigate("Profile")}
        >
          <Ionicons name="person" size={24} color="#fff" />
          <CustomText style={CommonStyles.buttonText}>View Profile</CustomText>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={CommonStyles.button}
          onPress={() => navigation.navigate("TrackCheckIns")}
        >
          <Ionicons name="list" size={24} color="#fff" />
          <CustomText style={CommonStyles.buttonText}>
            Track Check-Ins
          </CustomText>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={CommonStyles.logoutButton}
          onPress={handleLogout}
        >
          <Ionicons name="log-out" size={24} color="#fff" />
          <CustomText style={CommonStyles.buttonText}>Logout</CustomText>
        </TouchableOpacity> */}

        <Button
          title="Go to Check-In"
          onPress={() => navigation.navigate("CheckIn")}
          icon="checkmark-circle"
          buttonStyle={[ButtonStyles.button, ButtonStyles.outlinePrimary]}
          // textStyle={[CommonStyles.buttonText]}
          textStyle={[ButtonStyles.outlinePrimarytext]}
          iconStyle={{ color: "#fff" }}
        />
        <Button
          title="View Profile"
          onPress={() => navigation.navigate("Profile")}
          icon="person"
          buttonStyle={CommonStyles.button}
          textStyle={CommonStyles.buttonText}
          iconStyle={{ color: "#fff" }}
        />
        <Button
          title="Track Check-Ins"
          onPress={() => navigation.navigate("TrackCheckIns")}
          icon="list"
          buttonStyle={CommonStyles.button}
          textStyle={CommonStyles.buttonText}
          iconStyle={{ color: "#fff" }}
        />
        <Button
          title="Logout"
          onPress={handleLogout}
          icon="log-out"
          buttonStyle={[CommonStyles.Button, CommonStyles.logoutButton]}
          textStyle={CommonStyles.buttonText}
          iconStyle={{ color: "#fff" }}
        />
      </View>
    </View>
  );
}
