import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LeavesCard } from "../styles/style";

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

export default LeaveCard;
