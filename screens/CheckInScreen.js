import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import CustomButton from "../components/Buttons/ButtonComponent";
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
        <CustomButton
          color={"secondary"}
          iconName="log-out-outline"
          iconSize={20}
          iconColor="#fff"
          iconStyle={CheckIn.iconStyle} // Optional: Add any custom styles for the icon
          onPress={handleCheckOut}
          title="Check Out"
          buttonStyle={CheckIn.checkOutButton}
          textStyle={CheckIn.buttonText}
        />
      ) : (
        <CustomButton
          color={"primary"}
          iconName="log-in-outline"
          iconSize={20}
          iconColor="#fff"
          iconStyle={CheckIn.iconStyle} // Optional: Add any custom styles for the icon
          onPress={handleCheckIn}
          title="Check In"
          buttonStyle={CheckIn.checkInButton}
          textStyle={CheckIn.buttonText}
        />
      )}
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
