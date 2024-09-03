import React, { useState } from "react";

import { View, StyleSheet, ScrollView } from "react-native";
import CustomText from "../components/CustomText"; // Import the CustomText component
import Inputs from "../components/Inputs"; // Import the Inputs component
import { statusBarHeight } from "../styles/style";
export default function TrackCheckInsScreen() {
  const [textValue, setTextValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [pickerValue, setPickerValue] = useState("");

  const pickerOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <CustomText style={styles.text}>Track Check-Ins</CustomText>

        <Inputs
          type="text"
          placeholder="Enter text"
          value={textValue}
          onChangeText={setTextValue}
          error={textValue === "" ? "This field is required" : ""}
        />

        <Inputs
          type="textarea"
          placeholder="Enter multiline text"
          value={textareaValue}
          onChangeText={setTextareaValue}
          error={textareaValue === "" ? "This field is required" : ""}
        />

        <Inputs
          type="date"
          placeholder="Select a date"
          value={dateValue}
          onChangeText={setDateValue}
          error={dateValue === "" ? "This field is required" : ""}
        />

        <Inputs
          type="number"
          placeholder="Enter a number"
          value={numberValue}
          onChangeText={setNumberValue}
          error={numberValue === "" ? "This field is required" : ""}
        />

        <Inputs
          type="picker"
          placeholder="Select an option"
          value={pickerValue}
          onChangeText={setPickerValue}
          options={pickerOptions}
          error={pickerValue === "" ? "This field is required" : ""}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: statusBarHeight + 20,
    paddingBottom: 120,
    gap: 10,
    backgroundColor: "#fff",
    minHeight: "100%",
  },
  text: {
    fontSize: 24,
  },
  scrollView: {
    flex: 1,
    justifyContent: "center", // This should be moved
  },
});
