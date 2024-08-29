import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CustomText from "../components/CustomText/CustomText";
import { CheckIn } from "../styles/style";

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
      {/* <CustomText style={CheckIn.title}>Check In</CustomText> */}
      {isCheckedIn ? (
        <TouchableOpacity
          style={CheckIn.checkOutButton}
          onPress={handleCheckOut}
        >
          <View style={CheckIn.buttonContent}>
            <Ionicons name="log-out-outline" size={20} color="#fff" />
            <CustomText style={CheckIn.buttonText}>Check Out</CustomText>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={CheckIn.checkInButton} onPress={handleCheckIn}>
          <View style={CheckIn.buttonContent}>
            <Ionicons name="log-in-outline" size={20} color="#fff" />
            <CustomText style={CheckIn.buttonText}>Check In</CustomText>
          </View>
        </TouchableOpacity>
      )}
      <TouchableOpacity style={CheckIn.trackCheckInsButton}>
        <View style={CheckIn.buttonContent}>
          <Ionicons name="list-outline" size={20} color="#fff" />
          <CustomText style={CheckIn.buttonText}>Track Check-Ins</CustomText>
        </View>
      </TouchableOpacity>
    </View>
  );
}
