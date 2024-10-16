import React, { useState } from "react";
import { View, ScrollView, Alert } from "react-native";
import { CommonStyles } from "@styles/style";
import Inputs from "@components/Inputs";
import CustomText from "@components/CustomText";
import CustomButton from "@components/ButtonComponent";
import SuccessModal from "@components/LeaveApplied";
import { Ionicons } from "@expo/vector-icons";
import colors from "../styles/ColorStyles";

const ApplyLeaveScreen = ({ navigation }) => {
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
      profileImage: require("@assets/images/user.png"),
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
    <View style={CommonStyles.container}>
      <View
        style={[
          CommonStyles.row,
          {
            paddingHorizontal: 20,
            gap: 10,
          },
        ]}
      >
        <Ionicons
          name="chevron-back-outline"
          size={24}
          color={colors.text}
          onPress={() => navigation.goBack()}
        />
        <CustomText style={[CommonStyles.header, { fontSize: 24 }]}>
          Apply Leave
        </CustomText>
      </View>
      <ScrollView contentContainerStyle={CommonStyles.content}>
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
        />

        <Inputs
          type="number"
          placeholder="Contact Number"
          value={numberValue}
          onChangeText={setNumberValue}
        />

        <Inputs
          type="date"
          placeholder="Start date"
          value={startDate}
          onChangeText={setStartDate}
        />

        <Inputs
          type="date"
          placeholder="End date"
          value={endDate}
          onChangeText={setEndDate}
        />

        <Inputs
          type="textarea"
          placeholder="Reason for Leave"
          value={textareaValue}
          onChangeText={setTextareaValue}
        />

        <View style={CommonStyles.footer}>
          <CustomButton
            title="Apply Leave"
            color={"primary"}
            onPress={handleButtonClick}
          />
          <SuccessModal isVisible={isModalVisible} onClose={handleCloseModal} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ApplyLeaveScreen;
