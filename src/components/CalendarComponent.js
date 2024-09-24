import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomText from "@components/CustomText"; // Adjust the import path as needed
import moment from "moment"; // Import moment for date formatting
import { colors } from "react-native-elements"; // Import colors

const holidays = [
  { date: "2024-01-26", occasion: "Republic Day" },
  { date: "2024-03-08", occasion: "Maha Shivaratri" },
  { date: "2024-03-25", occasion: "Holi" },
  { date: "2024-04-14", occasion: "Dr. Ambedkar Jayanti" },
  { date: "2024-04-17", occasion: "Mahavir Jayanti" },
  { date: "2024-05-23", occasion: "Buddha Purnima" },
  { date: "2024-08-15", occasion: "Independence Day" },
  { date: "2024-08-28", occasion: "Janmashtami" },
  { date: "2024-10-02", occasion: "Gandhi Jayanti" },
  { date: "2024-10-13", occasion: "Dussehra" },
  { date: "2024-11-01", occasion: "Diwali" },
  { date: "2024-12-25", occasion: "Christmas" },
];

// Create marked dates object for the calendar with custom styles
const markedDates = holidays.reduce((acc, holiday) => {
  acc[holiday.date] = {
    marked: true,
    dotColor: "red",
    customStyles: {
      container: {
        backgroundColor: "lightblue",
      },
      text: {
        color: "blue",
        fontWeight: "bold",
      },
    },
  };
  return acc;
}, {});

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedOccasion, setSelectedOccasion] = useState(null);
  const [checkInTime, setCheckInTime] = useState(null);
  const [breakTime, setBreakTime] = useState(null);
  const [checkOutTime, setCheckOutTime] = useState(null);

  const handleDayPress = (day) => {
    const holiday = holidays.find((h) => h.date === day.dateString);
    if (holiday) {
      setSelectedDate(day.dateString);
      setSelectedOccasion(holiday.occasion);
      setCheckInTime(null);
      setBreakTime(null);
      setCheckOutTime(null);
    } else {
      setSelectedDate(day.dateString);
      setSelectedOccasion(null);
      // Example times, replace with actual data if available
      setCheckInTime("09:00 AM");
      setBreakTime("01:00 PM - 02:00 PM");
      setCheckOutTime("06:00 PM");
    }
  };

  const handleClose = () => {
    setSelectedDate(null);
    setSelectedOccasion(null);
    setCheckInTime(null);
    setBreakTime(null);
    setCheckOutTime(null);
  };

  return (
    <View>
      <Calendar
        markedDates={markedDates}
        markingType={"custom"}
        onDayPress={handleDayPress}
        theme={{
          selectedDayBackgroundColor: "blue",
          todayTextColor: "blue",
          arrowColor: "blue",
        }}
        style={styles.calendar}
      />
      {selectedDate && (
        <View style={styles.selectedDateContainer}>
          <View style={styles.selectedDateHeader}>
            <View style={styles.dateInfo}>
              <CustomText style={styles.dateText}>
                {moment(selectedDate).format("DD")}
              </CustomText>
              <CustomText style={styles.monthText}>
                {moment(selectedDate).format("MMM")}
              </CustomText>
            </View>
            <View style={styles.details}>
              {selectedOccasion ? (
                <CustomText style={styles.detailText}>
                  Holiday: {selectedOccasion}
                </CustomText>
              ) : (
                <>
                  <CustomText style={styles.detailText}>
                    Check-in: {checkInTime}
                  </CustomText>
                  <CustomText style={styles.detailText}>
                    Break: {breakTime}
                  </CustomText>
                  <CustomText style={styles.detailText}>
                    Check-out: {checkOutTime}
                  </CustomText>
                </>
              )}
            </View>
            <TouchableOpacity
              onPress={handleClose}
              style={{ alignSelf: "flex-start" }}
            >
              <Ionicons
                name="close-circle-outline"
                size={24}
                color={colors.secondary}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  calendar: {
    marginBottom: 20,
  },
  selectedDateContainer: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  selectedDateHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateInfo: {
    flexDirection: "column",
    alignItems: "center",
  },
  dateText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  monthText: {
    fontSize: 16,
    color: "gray",
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  detailText: {
    fontSize: 16,
  },
});

export default CalendarComponent;
