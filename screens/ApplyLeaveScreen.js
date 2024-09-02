import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { CommonStyles } from "../styles/style";
import AnimatedTextInput from "../components/AnimatedTextInput"; // Adjust the import path as needed

const ApplyLeaveScreen = () => {
  const [title, setTitle] = useState("");
  const [leaveType, setLeaveType] = useState("Sick Leave");
  const [contactNumber, setContactNumber] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [reason, setReason] = useState("");

  const leaveTypeOptions = [
    { placeholder: "Sick Leave", value: "Sick Leave" },
    { placeholder: "Casual Leave", value: "Casual Leave" },
    { placeholder: "Annual Leave", value: "Annual Leave" },
  ];

  return (
    <ScrollView contentContainerStyle={CommonStyles.container}>
      <View style={CommonStyles.content}>
        <AnimatedTextInput
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
          type="text"
        />

        <AnimatedTextInput
          placeholder="Leave Type"
          value={leaveType}
          onChangeText={setLeaveType}
          type="dropdown"
          options={leaveTypeOptions}
        />

        <AnimatedTextInput
          placeholder="Contact Number"
          value={contactNumber}
          onChangeText={setContactNumber}
          type="text"
          keyboardType="phone-pad"
        />

        <AnimatedTextInput
          placeholder="Start Date"
          dateValue={startDate}
          setDateValue={setStartDate}
          type="date"
        />

        <AnimatedTextInput
          placeholder="End Date"
          dateValue={endDate}
          setDateValue={setEndDate}
          type="date"
        />

        <AnimatedTextInput
          placeholder="Reason for Leave"
          value={reason}
          onChangeText={setReason}
          type="text"
          multiline
          style={{ height: 100 }}
        />
      </View>
    </ScrollView>
  );
};

export default ApplyLeaveScreen;
