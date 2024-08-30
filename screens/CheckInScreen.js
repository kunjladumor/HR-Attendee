import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import CustomButton from "../components/Buttons/ButtonComponent";
import { CheckIn } from "../styles/style";
import SwipeButton from "../components/SwipeButton";

export default function CheckInScreen() {
  const [isCheckedIn, setIsCheckedIn] = useState(false);

  const handleCheckIn = () => {
    setIsCheckedIn(true);
    Alert.alert("Success", "You have checked in successfully!");
    // Add your check-in logic here
  };

  const handleCheckOut = () => {
    setIsCheckedIn(false);
    Alert.alert("Success", "You have checked out successfully!");
    // Add your check-out logic here
  };

  return (
    <View style={CheckIn.container}>
      <SwipeButton />
      <CustomButton
        title="Track Check-Ins"
        iconName="list"
        iconSize={24}
        iconColor="#fff"
        onPress={() => navigation.navigate("TrackCheckIns")}
        color="primary"
      />
    </View>
  );
}
