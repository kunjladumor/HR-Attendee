import React, { useState, useEffect } from "react";
import { View, StyleSheet, useColorScheme } from "react-native";
import { Calendar } from "react-native-calendars";
import CustomText from "@components/CustomText"; // Adjust the import path as needed
import moment from "moment"; // Import moment for date formatting
import colors from "@styles/ColorStyles"; // Import custom colors

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

const lightTheme = {
  backgroundColor: colors.background,
  calendarBackground: colors.surface,
  textSectionTitleColor: colors.neutral60,
  textSectionTitleDisabledColor: colors.neutral40,
  selectedDayBackgroundColor: colors.primary,
  selectedDayTextColor: colors.white,
  todayTextColor: colors.primary,
  dayTextColor: colors.text,
  textDisabledColor: colors.neutral40,
  dotColor: colors.primary,
  selectedDotColor: colors.white,
  arrowColor: colors.primary,
  monthTextColor: colors.primary,
  indicatorColor: colors.primary,
  textDayFontFamily: "Poppins",
  textMonthFontFamily: "PoppinsSemiBold",
  textDayHeaderFontFamily: "PoppinsMedium",
  textDayFontSize: 16,
  textMonthFontSize: 18,
  textDayHeaderFontSize: 16,
};

const darkTheme = {
  backgroundColor: colors.background,
  calendarBackground: colors.surface,
  textSectionTitleColor: colors.neutral60,
  textSectionTitleDisabledColor: colors.neutral40,
  selectedDayBackgroundColor: colors.primary,
  selectedDayTextColor: colors.white,
  todayTextColor: colors.primary,
  dayTextColor: colors.text,
  textDisabledColor: colors.neutral40,
  dotColor: colors.primary,
  selectedDotColor: colors.white,
  arrowColor: colors.primary,
  monthTextColor: colors.primary,
  indicatorColor: colors.primary,
  textDayFontFamily: "Poppins",
  textMonthFontFamily: "PoppinsSemiBold",
  textDayHeaderFontFamily: "PoppinsMedium",
  textDayFontSize: 16,
  textMonthFontSize: 16,
  textDayHeaderFontSize: 16,
};

const CalendarComponent = () => {
  const [attendanceData, setAttendanceData] = useState({}); // State to hold attendance data for the month
  const colorScheme = useColorScheme(); // Get the current color scheme (light or dark)

  useEffect(() => {
    // Fetch and set attendance data for the month
    // This is just a placeholder, replace with actual data fetching logic
    const data = {
      "2024-09-09": {
        checkInTime: "09:00 AM",
        breakTime: "01:00 PM - 02:00 PM",
        checkOutTime: "06:00 PM",
      },
      "2024-09-02": {
        checkInTime: "09:15 AM",
        breakTime: "01:00 PM - 02:00 PM",
        checkOutTime: "06:15 PM",
      },
      "2024-09-03": {
        checkInTime: "09:00 AM",
        breakTime: "01:00 PM - 02:00 PM",
        checkOutTime: "06:00 PM",
      },
      "2024-09-04": {
        checkInTime: "09:00 AM",
        breakTime: "01:00 PM - 02:00 PM",
        checkOutTime: "06:00 PM",
      },
      // Add more data as needed
    };
    setAttendanceData(data);
  }, []);

  // Example leave data
  const leaveData = {
    "2024-09-05": true,
    "2024-09-06": true,
  };

  // Merge holidays, attendance data, and leave data into markedDates
  const markedDates = holidays.reduce((acc, holiday) => {
    acc[holiday.date] = {
      dots: [{ key: "holiday", color: colors.secondary }],
      customStyles: {
        container: {
          backgroundColor: colors.lightPrimary,
        },
        text: {
          color: colors.primary,
          fontFamily: "PoppinsSemiBold",
        },
      },
    };
    return acc;
  }, {});

  Object.keys(attendanceData).forEach((date) => {
    if (markedDates[date]) {
      // If the date is already marked as a holiday, add attendance info
      markedDates[date].dots.push({ key: "present", color: colors.primary });
    } else {
      // Otherwise, mark it as a regular attendance day
      markedDates[date] = {
        dots: [{ key: "present", color: colors.primary }],
        customStyles: {
          container: {
            backgroundColor: colors.lightPrimary,
          },
          text: {
            color: colors.primary,
            fontFamily: "PoppinsSemiBold",
          },
        },
      };
    }
  });

  Object.keys(leaveData).forEach((date) => {
    if (markedDates[date]) {
      // If the date is already marked, add leave info
      markedDates[date].dots.push({ key: "leave", color: colors.secondary2 });
    } else {
      // Otherwise, mark it as a leave day
      markedDates[date] = {
        dots: [{ key: "leave", color: colors.secondary2 }],
        customStyles: {
          container: {
            backgroundColor: colors.lightPrimary,
          },
          text: {
            color: colors.primary,
            fontFamily: "PoppinsSemiBold",
          },
        },
      };
    }
  });

  return (
    <View style={styles.container}>
      <Calendar
        markedDates={markedDates}
        markingType={"multi-dot"}
        theme={colorScheme === "dark" ? darkTheme : lightTheme} // Apply the theme based on the color scheme
        style={styles.calendar}
        enableSwipeMonths={true}
      />
      {Object.keys(attendanceData).map((date) => (
        <View key={date} style={styles.selectedDateContainer}>
          <View style={styles.selectedDateHeader}>
            <View style={styles.dateInfo}>
              <CustomText style={styles.dateText}>
                {moment(date).format("DD")}
              </CustomText>
              <CustomText style={styles.monthText}>
                {moment(date).format("MMM")}
              </CustomText>
            </View>
            <View style={styles.details}>
              <CustomText style={styles.detailText}>
                Check-in: {attendanceData[date].checkInTime}
              </CustomText>
              <CustomText style={styles.detailText}>
                Break: {attendanceData[date].breakTime}
              </CustomText>
              <CustomText style={styles.detailText}>
                Check-out: {attendanceData[date].checkOutTime}
              </CustomText>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  calendar: {
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    overflow: "hidden",
    elevation: 4,
  },
  selectedDateContainer: {
    padding: 15,
    backgroundColor: colors.surface,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: colors.neutral90,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  selectedDateHeader: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  dateInfo: {
    flexDirection: "column",
    alignItems: "center",
  },
  dateText: {
    fontSize: 32,
    fontFamily: "PoppinsSemiBold",
    width: 50,
    color: colors.text,
    textAlign: "center",
  },
  monthText: {
    fontSize: 16,
    color: colors.neutral60,
    width: 50,
    textAlign: "center",
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  detailText: {
    fontSize: 16,
    color: colors.text,
  },
});

export default CalendarComponent;
