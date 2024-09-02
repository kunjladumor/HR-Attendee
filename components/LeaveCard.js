import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../styles/ColorStyles";

const LeaveCard = ({
  date,
  dateRange,
  status,
  applyDays,
  leaveBalance,
  approvedBy,
}) => {
  return (
    <View style={LeavesCard.card}>
      <View style={LeavesCard.header}>
        <View style={LeavesCard.row}>
          <Text style={LeavesCard.label}>Date</Text>
          <Text style={LeavesCard.value}>{dateRange}</Text>
        </View>
        <Text
          style={[
            LeavesCard.status,
            status === "Approved" ? LeavesCard.approved : LeavesCard.rejected,
          ]}
        >
          {status}
        </Text>
      </View>
      <View style={LeavesCard.content}>
        <View style={LeavesCard.row}>
          <Text style={LeavesCard.label}>Apply Days:</Text>
          <Text style={LeavesCard.value}>{applyDays}</Text>
        </View>
        <View style={LeavesCard.row}>
          <Text style={LeavesCard.label}>Leave Balance:</Text>
          <Text style={LeavesCard.value}>{leaveBalance}</Text>
        </View>
        <View style={LeavesCard.row}>
          <Text style={LeavesCard.label}>Approved By:</Text>
          <Text style={LeavesCard.value}>{approvedBy}</Text>
        </View>
      </View>
    </View>
  );
};

const LeavesCard = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    shadowColor: "rgba(0, 0, 0, 0.2)", // Light black shadow color with reduced opacity
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2, // Increase opacity slightly to make the shadow more visible
    shadowRadius: 6, // Increase the radius to make the shadow softer
    elevation: 3, // Increase elevation for a more pronounced shadow on Android
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  status: {
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Poppins",
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: "center",
    borderRadius: 10,
  },
  approved: {
    color: colors.secondary2,
    backgroundColor: "#e6f4ea",
  },
  rejected: {
    color: colors.secondary,
    backgroundColor: "#fde8e8",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 16,
  },
  row: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    color: colors.neutral70,
  },
  value: {
    fontSize: 16,
    fontFamily: "Poppins",
    fontWeight: "500",
  },
});

export default LeaveCard;
