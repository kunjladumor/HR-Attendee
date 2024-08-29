import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomText from "../components/CustomText/CustomText"; // Import the CustomText component

const ProfileScreen = ({ navigation }) => {
  const handleLogout = () => {
    navigation.replace("Login");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={{ uri: "https://via.placeholder.com/150" }} // Replace with actual image URL
        />
        <CustomText style={styles.name}>John Doe</CustomText>
        <CustomText style={styles.username}>@johndoe</CustomText>
      </View>
      <View style={styles.body}>
        <Pressable
          style={({ pressed }) => [
            styles.option,
            pressed && styles.optionPressed,
          ]}
        >
          <Ionicons name="person-outline" size={24} color="#3185ff" />
          <CustomText style={styles.optionText}>Edit Profile</CustomText>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.option,
            pressed && styles.optionPressed,
          ]}
        >
          <Ionicons name="lock-closed-outline" size={24} color="#3185ff" />
          <CustomText style={styles.optionText}>Change Password</CustomText>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.option,
            pressed && styles.optionPressed,
          ]}
        >
          <Ionicons name="notifications-outline" size={24} color="#3185ff" />
          <CustomText style={styles.optionText}>
            Notification Settings
          </CustomText>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.option,
            pressed && styles.optionPressed,
          ]}
        >
          <Ionicons name="shield-outline" size={24} color="#3185ff" />
          <CustomText style={styles.optionText}>Privacy Settings</CustomText>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.option,
            pressed && styles.optionPressed,
          ]}
          onPress={handleLogout}
        >
          <Ionicons name="log-out-outline" size={24} color="#ff3b30" />
          <CustomText style={[styles.optionText, { color: "#ff3b30" }]}>
            Logout
          </CustomText>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#f8f8f8",
  },
  header: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  username: {
    fontSize: 18,
    color: "gray",
  },
  body: {
    padding: 20,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  optionPressed: {
    backgroundColor: "#e0e0e0",
  },
  optionText: {
    fontSize: 18,
    marginLeft: 10,
    color: "#3185ff",
  },
});

export default ProfileScreen;
