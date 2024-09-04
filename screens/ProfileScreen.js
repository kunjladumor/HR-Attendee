import React, { useState } from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import CustomText from "../components/CustomText"; // Import the CustomText component
import { CommonStyles } from "../styles/style"; // Import the common styles
import CustomButton from "../components/ButtonComponent";
import colors from "../styles/ColorStyles";
import ProfileButtonTab from "../components/ProfileButton";

const ProfileScreen = ({ navigation }) => {
  const handleLogout = () => {
    navigation.replace("Login");
  };

  return (
    <ScrollView contentContainerStyle={CommonStyles.container}>
      <View style={CommonStyles.content}>
        <View style={CommonStyles.header}>
          <CustomText
            style={{
              fontSize: 24,
            }}
          >
            Profile
          </CustomText>
        </View>
        <View style={ProfileStyles.header}>
          <Image
            style={ProfileStyles.profileImage}
            source={require("../assets/images/user.png")} // Replace with actual image URL
          />
          <CustomText style={ProfileStyles.name}>John Doe</CustomText>
          <CustomText style={ProfileStyles.username}>@johndoe</CustomText>
          <CustomButton
            title="Edit Profile"
            onPress={() => navigation.navigate("EditProfile")}
            color="primary"
            padding={10}
            margin={10}
            iconName={"person-outline"}
            iconSize={20}
            iconColor={colors.white}
            style={[
              {
                alignSelf: "stretch",
              },
            ]}
          />
        </View>
        <View style={ProfileStyles.options}>
          <ProfileButtonTab
            iconName="person-outline"
            text="My Profile"
            onPress={() => {
              console.log("My Profile Pressed");
              navigation.replace("MyProfile");
            }}
          />
          <ProfileButtonTab
            iconName="settings-outline"
            text="Settings"
            onPress={() => console.log("Settings Pressed")}
          />
          <ProfileButtonTab
            iconName="document-text-outline"
            text="Terms & Conditions"
            onPress={() => console.log("Terms & Conditions Pressed")}
          />
          <ProfileButtonTab
            iconName="shield-checkmark-outline"
            text="Privacy Policy"
            onPress={() => console.log("Privacy Policy Pressed")}
          />
          <ProfileButtonTab
            iconName="log-out-outline"
            text="Log out"
            onPress={() => handleLogout()}
            color={colors.secondary}
            textColor={colors.secondary}
            iconView
          />
        </View>
      </View>
    </ScrollView>
  );
};

const ProfileStyles = StyleSheet.create({
  header: {
    alignItems: "center",
  },
  profileImage: {
    width: 125,
    height: 125,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
  },
  username: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  option: {
    marginVertical: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000000CC",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.125,
    shadowRadius: 3.84,
    elevation: 2,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
    color: colors.primary,
  },
});

export default ProfileScreen;
