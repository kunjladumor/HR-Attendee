import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import CustomButton from "../components/ButtonComponent";
import colors from "../styles/ColorStyles";

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
              iconName={"checkmark-circle-outline"}
              iconSize={20}
              iconColor={colors.white}
              gap={5}
              style={{ flex: 1 }}
            ></CustomButton>
            <CustomButton
              title="Reject"
              color="secondary"
              padding={8}
              borderRadius={10}
              iconName={"close-circle-outline"}
              iconSize={20}
              iconColor={colors.white}
              gap={5}
              style={{ flex: 1 }}
            ></CustomButton>
          </View>
        </View>
      ))}
    </View>
  );
};

const LeaveRequestStyles = StyleSheet.create({
  leaveRequestContainer: {
    flexDirection: "column",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 8,
    shadowColor: "rgba(0, 0, 0, 0.2)", // Light black shadow color with reduced opacity
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2, // Increase opacity slightly to make the shadow more visible
    shadowRadius: 6, // Increase the radius to make the shadow softer
    elevation: 3, // Increase elevation for a more pronounced shadow on Android
    gap: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  header: {
    flexDirection: "row",
  },
  infoContainer: {
    flexDirection: "column",
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Poppins",
  },
  leaveDates: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: colors.neutral90,
  },
  actionsContainer: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#4CAF50",
    marginHorizontal: 5,
  },
  rejectButton: {
    backgroundColor: "#F44336",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default LeaveRequest;
