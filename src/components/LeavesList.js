import React from "react";
import { ScrollView } from "react-native";
import LeaveCard from "./LeaveCard";

const LeavesList = ({ leaves }) => {
  return (
    <ScrollView>
      {leaves.map((leave, index) => (
        <LeaveCard
          key={index}
          date={leave.date}
          dateRange={leave.dateRange}
          status={leave.status}
          applyDays={leave.applyDays}
          leaveBalance={leave.leaveBalance}
          approvedBy={leave.approvedBy}
        />
      ))}
    </ScrollView>
  );
};

export default LeavesList;
