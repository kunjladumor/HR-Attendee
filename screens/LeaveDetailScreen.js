import React from "react";
import { View, Image, StyleSheet, Text, ScrollView } from "react-native";
import CustomButton from "../components/ButtonComponent";
import colors from "../styles/ColorStyles";
import CustomText from "../components/CustomText";
import { statusBarHeight } from "../styles/style";
import { Ionicons } from "@expo/vector-icons";

const LeaveDetailsScreen = ({ route, navigation }) => {
  const { leaveRequest } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="chevron-back-outline"
          size={24}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            fontSize: 24,
          }}
        >
          Leave Details
        </Text>
      </View>
      <View style={styles.profile}>
        <Image source={leaveRequest.profileImage} style={styles.profileImage} />
        <View style={styles.infoContainer}>
          <CustomText style={styles.name}>{leaveRequest.name}</CustomText>
          <CustomText style={styles.leaveDates}>
            {leaveRequest.leaveDates}
          </CustomText>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <CustomText style={styles.detailLabel}>Title:</CustomText>
        <CustomText style={styles.detailValue}>{leaveRequest.title}</CustomText>
        <CustomText style={styles.detailLabel}>Leave Type:</CustomText>
        <CustomText style={styles.detailValue}>
          {leaveRequest.leaveType}
        </CustomText>
        <CustomText style={styles.detailLabel}>Start Date:</CustomText>
        <CustomText style={styles.detailValue}>
          {leaveRequest.startDate}
        </CustomText>
        <CustomText style={styles.detailLabel}>End Date:</CustomText>
        <CustomText style={styles.detailValue}>
          {leaveRequest.endDate}
        </CustomText>
        <CustomText style={styles.detailLabel}>Reason for Leave:</CustomText>
        <CustomText style={styles.detailValue}>
          {leaveRequest.reason}
        </CustomText>
        <CustomText style={styles.detailLabel}>Applied On:</CustomText>
        <CustomText style={styles.detailValue}>
          {leaveRequest.leaveApplied}
        </CustomText>
        <CustomText style={styles.detailLabel}>Contact Number:</CustomText>
        <CustomText style={styles.detailValue}>
          {leaveRequest.contactNumber}
        </CustomText>
        <CustomText style={styles.detailLabel}>Status:</CustomText>
        <CustomText style={styles.detailValue}>
          {leaveRequest.leaveStatus}
        </CustomText>
        <CustomText style={styles.detailLabel}>Approved By:</CustomText>
        <CustomText style={styles.detailValue}>
          {leaveRequest.approvedBy}
        </CustomText>
      </View>
      <View style={styles.actionsContainer}>
        <CustomButton
          title="Approve"
          color="secondary2"
          padding={8}
          borderRadius={10}
          iconName={"checkmark-circle-outline"}
          iconSize={20}
          iconColor={colors.white}
          gap={5}
          onPress={() => console.log("Approved")}
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
          onPress={() => console.log("Rejected")}
          style={{ flex: 1 }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: statusBarHeight + 20,
  },
  header: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },

  profile: {
    flexDirection: "row",
    alignContent: "center",
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 0,
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "PoppinsMedium",
  },
  leaveDates: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: colors.neutral90,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  detailLabel: {
    fontSize: 16,
    fontFamily: "PoppinsMedium",
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: colors.neutral20,
  },
  detailValue: {
    fontSize: 16,
    fontFamily: "Poppins",
    paddingBottom: 10,
  },
  actionsContainer: {
    flexDirection: "row",
    gap: 10,
  },
});

export default LeaveDetailsScreen;
