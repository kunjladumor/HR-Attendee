import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "@components/ButtonComponent";
import colors from "@styles/ColorStyles";

const LeaveRequest = ({ leaveRequests, onApprove, onReject }) => {
  const navigation = useNavigation();

  const handlePress = (leaveRequest) => {
    navigation.navigate("LeaveDetails", { leaveRequest });
  };

  return (
    <View>
      {leaveRequests.map((request, index) => (
        <TouchableOpacity
          key={index}
          style={LeaveRequestStyles.leaveRequestContainer}
          onPress={() => handlePress(request)}
        >
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
              onPress={() => onApprove(index)}
              style={{ flex: 1 }}
            />
            <CustomButton
              title="Reject"
              color="secondary"
              padding={8}
              borderRadius={10}
              iconName={"close-circle-outline"}
              iconSize={20}
              iconColor={colors.white}
              gap={5}
              onPress={() => onReject(index)}
              style={{ flex: 1 }}
            />
          </View>
        </TouchableOpacity>
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
    borderWidth: 1,
    borderColor: colors.neutral10,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
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
});

export default LeaveRequest;
