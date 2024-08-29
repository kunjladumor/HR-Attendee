import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomText from "../components/CustomText/CustomText"; // Import the CustomText component

export default function TrackCheckInsScreen() {
  return (
    <View style={styles.container}>
      <CustomText style={styles.text}>Track Check-Ins</CustomText>
      {/* Add your tracking check-ins logic here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});
