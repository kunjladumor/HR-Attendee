import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import CustomButton from "../components/ButtonComponent";
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
const CheckIn = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
    gap: 10,
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    textAlign: "center",
    color: "#333",
  },
  checkInButton: {
    width: "100%",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#28a745",
    borderRadius: 5,
    alignItems: "center",
  },
  checkOutButton: {
    width: "100%",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#dc3545",
    borderRadius: 5,
    alignItems: "center",
  },
  trackCheckInsButton: {
    width: "100%",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
    alignItems: "center",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
});
