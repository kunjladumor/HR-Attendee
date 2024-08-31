import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import CustomButton from "../components/ButtonComponent";
import colors from "./ColorStyles";
import { LeaveRequestStyles } from "../styles/style";

const LeaveRequest = ({ leaveRequests, onApprove, onReject }) => {
  return (
    <View>
      {leaveRequests.map((request, index) => (
        <View key={index} style={LeaveRequestStyles.leaveRequestContainer}>
          <View style={LeaveRequestStyles.header}>
            <Image
              source={request.profileImage}
              style={LeaveRequestStyles.profileImage}
            />
            <View style={LeaveRequestStyles.infoContainer}>
              <Text style={LeaveRequestStyles.name}>{request.name}</Text>
              <Text style={LeaveRequestStyles.leaveDates}>
                {request.leaveDates}
              </Text>
            </View>
          </View>
          <View style={LeaveRequestStyles.actionsContainer}>
            <CustomButton
              title="Approve"
              color="secondary2"
              padding={8}
              borderRadius={10}
              iconName={"checkmark"}
              iconSize={16}
              iconColor={colors.white}
              style={{ flex: 1 }}
            ></CustomButton>
            <CustomButton
              title="Reject"
              color="secondary"
              padding={8}
              borderRadius={10}
              iconName={"close"}
              iconSize={16}
              iconColor={colors.white}
              style={{ flex: 1 }}
            ></CustomButton>
          </View>
        </View>
      ))}
    </View>
  );
};

export default LeaveRequest;
