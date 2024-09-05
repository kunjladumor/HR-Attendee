import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";
import colors from "../styles/ColorStyles";
import CustomText from "./CustomText";

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

const AttendanceStyles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: "Poppins",
    marginBottom: 10,
    fontWeight: "500",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%", // Adjust width to fit 2 cards per row
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 36,
    backgroundColor: "#007bff1A",
    justifyContent: "center",
    alignItems: "center",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  cardTitle: {
    paddingHorizontal: 8,
    fontSize: 14,
    color: colors.neutral60,
    flexWrap: "wrap",
    fontFamily: "Poppins",
  },
  cardValue: {
    fontSize: 20,
    fontFamily: "PoppinsSemiBold",
  },
  stat: {
    fontSize: 14,
    fontFamily: "Poppins",
  },
});

Attendance.propTypes = {
  attendanceData: PropTypes.shape({
    checkInTime: PropTypes.string,
    checkOutTime: PropTypes.string,
    breakTime: PropTypes.string,
    totalDays: PropTypes.string,
  }).isRequired,
};

export default Attendance;
