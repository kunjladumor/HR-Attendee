import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { CommonStyles } from "../styles/style";
import Inputs from "../components/Inputs";
import CustomText from "../components/CustomText";
import CustomButton from "../components/ButtonComponent";

const ApplyLeaveScreen = () => {
  const [textValue, setTextValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  0;
  const [dateValue, setDateValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [pickerValue, setPickerValue] = useState("");

  const pickerOptions = [
    { label: "Sick Leave", value: "Sick Leave" },
    { label: "Personal Leave", value: "Personal Leave" },
    { label: "Vacation Leave", value: "Vacation Leave" },
    { label: "Work From Home", value: "Work From Home" },
    { label: "Leave Early", value: "Leave Early" },
    { label: "Working Holiday", value: "Working Holiday" },
    { label: "Compensation Off", value: "Compensation Off" },
  ];
  return (
    <ScrollView contentContainerStyle={CommonStyles.container}>
      <View style={CommonStyles.content}>
        <View style={CommonStyles.header}>
          <CustomText
            style={{
              fontSize: 24,
            }}
          >
            Apply Leave
          </CustomText>
        </View>
        <Inputs
          type="text"
          placeholder="Title"
          value={textValue}
          onChangeText={setTextValue}
          error={textValue === "" ? "This field is required" : ""}
        />

        <Inputs
          type="picker"
          placeholder="Leave Type"
          value={pickerValue}
          onChangeText={setPickerValue}
          options={pickerOptions}
          error={pickerValue === "" ? "This field is required" : ""}
        />

        <Inputs
          type="number"
          placeholder="Contact Number"
          value={numberValue}
          onChangeText={setNumberValue}
          error={numberValue === "" ? "This field is required" : ""}
        />

        <Inputs
          type="date"
          placeholder="Start date"
          value={dateValue}
          onChangeText={setDateValue}
          error={dateValue === "" ? "This field is required" : ""}
        />

        <Inputs
          type="date"
          placeholder="End date"
          value={dateValue}
          onChangeText={setDateValue}
          error={dateValue === "" ? "This field is required" : ""}
        />

        <Inputs
          type="textarea"
          placeholder="Reason for Leave"
          value={textareaValue}
          onChangeText={setTextareaValue}
          error={textareaValue === "" ? "This field is required" : ""}
        />
        <View style={CommonStyles.footer}>
          <CustomButton
            title="Apply Leave"
            color={"primary"}
            onPress={() => {
              alert("Leave applied successfully");
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ApplyLeaveScreen;
