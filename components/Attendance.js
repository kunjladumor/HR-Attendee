import React from "react";
import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";
import { AttendanceStyles } from "../styles/style";
import colors from "./Colors/ColorStyles";
import CustomText from "./CustomText/CustomText";

const Attendance = ({
  attendanceData: {
    checkInTime = "N/A",
    checkOutTime = "N/A",
    breakTime = "N/A",
    totalDays = "N/A",
  },
}) => {
  const renderCard = (iconName, title, value, stat) => (
    <View style={AttendanceStyles.card}>
      <View style={AttendanceStyles.cardHeader}>
        <View style={AttendanceStyles.iconContainer}>
          <Ionicons name={iconName} size={20} color={colors.primary} />
        </View>
        <Text style={AttendanceStyles.cardTitle}>{title}</Text>
      </View>
      <CustomText style={AttendanceStyles.cardValue}>{value}</CustomText>
      <CustomText style={AttendanceStyles.stat}>{stat}</CustomText>
    </View>
  );

  return (
    <View style={AttendanceStyles.container}>
      <CustomText style={AttendanceStyles.title}>Today's Attendance</CustomText>
      <View style={AttendanceStyles.grid}>
        {renderCard("log-in-outline", "Check-In Time", checkInTime, "On-Time")}
        {renderCard(
          "log-out-outline",
          "Check-Out Time",
          checkOutTime,
          "Go Home"
        )}
        {renderCard("time-outline", "Break Time", breakTime, "Avg 30 min")}
        {renderCard(
          "calendar-outline",
          "Total Days",
          totalDays,
          "Working days"
        )}
      </View>
    </View>
  );
};

Attendance.propTypes = {
  attendanceData: PropTypes.shape({
    checkInTime: PropTypes.string,
    checkOutTime: PropTypes.string,
    breakTime: PropTypes.string,
    totalDays: PropTypes.string,
  }).isRequired,
};

export default Attendance;
