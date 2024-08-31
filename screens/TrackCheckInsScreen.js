import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomText from "../components/CustomText"; // Import the CustomText component

export default function TrackCheckInsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <CustomText style={styles.text}>Track Check-Ins</CustomText>
        {/* Add your tracking check-ins logic here */}
      </View>
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
  scrollView: {
    flex: 1,
    alignItems: "center", // This should be moved
    justifyContent: "center", // This should be moved
  },
});
