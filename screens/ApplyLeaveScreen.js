import React, { useState } from "react";
import { View, ScrollView, Alert } from "react-native";
import { CommonStyles } from "../styles/style";
import Inputs from "../components/Inputs";
import CustomText from "../components/CustomText";
import CustomButton from "../components/ButtonComponent";
import SuccessModal from "../components/LeaveApplied";

const ApplyLeaveScreen = () => {
  const [textValue, setTextValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [pickerValue, setPickerValue] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const pickerOptions = [
    { label: "Sick Leave", value: "Sick Leave" },
    { label: "Personal Leave", value: "Personal Leave" },
    { label: "Vacation Leave", value: "Vacation Leave" },
    { label: "Work From Home", value: "Work From Home" },
    { label: "Leave Early", value: "Leave Early" },
    { label: "Working Holiday", value: "Working Holiday" },
    { label: "Compensation Off", value: "Compensation Off" },
  ];

  const handleButtonClick = () => {
    if (!startDate || !endDate || !textareaValue) {
      Alert.alert("Validation Error", "All fields are required.");
      return;
    }

    if (new Date(endDate) < new Date(startDate)) {
      Alert.alert("Validation Error", "End date cannot be before start date.");
      return;
    }

    const newLeaveRequest = {
      profileImage: require("../assets/images/user.png"),
      name: "John Doe", // Replace with actual user name
      startDate: startDate,
      endDate: endDate,
      leaveDates: `${startDate} to ${endDate}`,
      title: textValue,
      leaveType: pickerValue,
      contactNumber: numberValue,
      reason: textareaValue,
    };

    // Handle button click logic here
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={CommonStyles.container}>
      <View style={CommonStyles.content}>
        <View style={CommonStyles.header}>
          <CustomText style={{ fontSize: 24 }}>Apply Leave</CustomText>
        </View>
        <Inputs
          type="text"
          placeholder="Title"
          value={textValue}
          onChangeText={setTextValue}
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
          value={startDate}
          onChangeText={setStartDate}
          error={startDate === "" ? "This field is required" : ""}
        />
        <Inputs
          type="date"
          placeholder="End date"
          value={endDate}
          onChangeText={setEndDate}
          error={endDate === "" ? "This field is required" : ""}
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
            onPress={handleButtonClick}
          />
          <SuccessModal isVisible={isModalVisible} onClose={handleCloseModal} />
        </View>
      </View>
    </ScrollView>
  );
};

export default ApplyLeaveScreen;
