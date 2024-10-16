import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Inputs from "../components/Inputs";
import colors from "../styles/ColorStyles";
import { CommonStyles } from "../styles/style";
import CustomText from "../components/CustomText";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "../components/ButtonComponent";
import DropdownModal from "../components/DropdownModal";

const CreateNotificationScreen = ({ navigation }) => {
  const [type, setType] = useState("");
  const notificationTypes = [
    { label: "Warning", value: "Warning", icon: "warning-amber" },
    { label: "Notice", value: "Notice", icon: "info-outline" },
    { label: "Reminder", value: "Reminder", icon: "notifications-none" },
  ];

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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={24} color={colors.text} />
        </TouchableOpacity>
        <CustomText style={CommonStyles.header}>Create Notification</CustomText>
      </View>
      <View style={CommonStyles.content}>
        <Inputs label="Title" placeholder="Enter title" />
        <DropdownModal
          data={notificationTypes}
          labelField="label"
          valueField="value"
          iconField="icon" // Pass the iconField prop
          placeholder="Select Type"
          selectedValue={type}
          onValueChange={(item) => setType(item.value)}
        />

        <Inputs label="Content" placeholder="Enter content" />
        <Inputs
          type="textarea"
          label="Subcontent"
          placeholder="Enter subcontent"
        />
        <CustomButton
          title="Create Notification"
          iconName={"add-circle-outline"}
          iconSize={24}
          iconColor={colors.white}
          color="primary"
        />
      </View>
    </View>
  );
};

export default CreateNotificationScreen;
