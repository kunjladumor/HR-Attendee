import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomText from "../components/CustomText"; // Import the CustomText component

export default function TrackCheckInsScreen() {
  return (
    <ScrollView style={styles.container}>
      <CustomText style={styles.text}>Track Check-Ins</CustomText>
      {/* Add your tracking check-ins logic here */}
    </ScrollView>
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
