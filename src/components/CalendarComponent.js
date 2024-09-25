import React, { useState, useEffect } from "react";
import { View, StyleSheet, useColorScheme } from "react-native";
import { Calendar } from "react-native-calendars";
import CustomText from "@components/CustomText"; // Adjust the import path as needed
import moment from "moment"; // Import moment for date formatting
import colors from "@styles/ColorStyles"; // Import custom colors
import { TouchableOpacity } from "react-native-gesture-handler";
import { activities } from "../screens/HomeScreen";

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

const fetchAttendanceData = () => {
  // Fetch and set attendance data for the month
  // This is just a placeholder, replace with actual data fetching logic
  return {
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
    "2024-09-07": {
      checkInTime: "09:00 AM",
      breakTime: "01:00 PM - 02:00 PM",
      checkOutTime: "06:00 PM",
    },
    "2024-09-09": {
      checkInTime: "09:00 AM",
      breakTime: "01:00 PM - 02:00 PM",
      checkOutTime: "06:00 PM",
    },
    "2024-09-10": {
      checkInTime: "09:00 AM",
      breakTime: "01:00 PM - 02:00 PM",
      checkOutTime: "06:00 PM",
    },
    "2024-09-11": {
      checkInTime: "09:00 AM",
      breakTime: "01:00 PM - 02:00 PM",
      checkOutTime: "06:00 PM",
    },
    "2024-09-12": {
      checkInTime: "09:00 AM",
      breakTime: "01:00 PM - 02:00 PM",
      checkOutTime: "06:00 PM",
    },
    "2024-09-13": {
      checkInTime: "09:00 AM",
      breakTime: "01:00 PM - 02:00 PM",
      checkOutTime: "06:00 PM",
    },
    "2024-09-16": {
      checkInTime: "09:00 AM",
      breakTime: "01:00 PM - 02:00 PM",
      checkOutTime: "06:00 PM",
    },
    "2024-09-17": {
      checkInTime: "09:00 AM",
      breakTime: "01:00 PM - 02:00 PM",
      checkOutTime: "06:00 PM",
    },
    "2024-09-18": {
      checkInTime: "09:00 AM",
      breakTime: "01:00 PM - 02:00 PM",
      checkOutTime: "06:00 PM",
    },
    "2024-09-19": {
      checkInTime: "09:00 AM",
      breakTime: "01:00 PM - 02:00 PM",
      checkOutTime: "06:00 PM",
    },
    "2024-09-20": {
      checkInTime: "09:00 AM",
      breakTime: "01:00 PM - 02:00 PM",
      checkOutTime: "06:00 PM",
    },
    "2024-09-21": {
      checkInTime: "09:00 AM",
      breakTime: "01:00 PM - 02:00 PM",
      checkOutTime: "06:00 PM",
    },
    "2024-09-23": {
      checkInTime: "09:00 AM",
      breakTime: "01:00 PM - 02:00 PM",
      checkOutTime: "06:00 PM",
    },
    "2024-09-24": {
      checkInTime: "09:00 AM",
      breakTime: "01:00 PM - 02:00 PM",
      checkOutTime: "06:00 PM",
    },
    "2024-10-02": {
      checkInTime: "09:00 AM",
      breakTime: "01:00 PM - 02:00 PM",
      checkOutTime: "06:00 PM",
    },
    // Add more data as needed
  };
};

const mergeData = (holidays, attendanceData, leaveData) => {
  const markedDates = holidays.reduce((acc, holiday) => {
    acc[holiday.date] = {
      dots: [{ key: "holiday", color: colors.warning }],
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
      markedDates[date].dots.push({ key: "present", color: colors.secondary2 });
    } else {
      markedDates[date] = {
        dots: [{ key: "present", color: colors.secondary2 }],
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
      markedDates[date].dots.push({ key: "leave", color: colors.secondary });
    } else {
      markedDates[date] = {
        dots: [{ key: "leave", color: colors.secondary }],
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

  return markedDates;
};

const DateInfo = ({ date }) => (
  <View style={styles.dateInfo}>
    <CustomText style={styles.dateText}>{moment(date).format("DD")}</CustomText>
    <CustomText style={styles.monthText}>
      {moment(date).format("MMM")}
    </CustomText>
  </View>
);

const AttendanceDetails = ({ attendance }) => (
  <View style={styles.details}>
    <CustomText style={styles.detailText}>
      Check-in: {attendance.checkInTime}
    </CustomText>
    <CustomText style={styles.detailText}>
      Break: {attendance.breakTime}
    </CustomText>
    <CustomText style={styles.detailText}>
      Check-out: {attendance.checkOutTime}
    </CustomText>
  </View>
);

const StatCard = ({ title, value, color }) => (
  <View
    style={[
      styles.statCard,
      { backgroundColor: color + "33", borderColor: color },
    ]}
  >
    <CustomText style={[styles.statTitle, { color }]}>{title}</CustomText>
    <CustomText style={[styles.statValue, { color: color + "CC" }]}>
      {value}
    </CustomText>
  </View>
);

const CalendarComponent = ({ navigation }) => {
  const [attendanceData, setAttendanceData] = useState({});
  const colorScheme = useColorScheme();

  useEffect(() => {
    setAttendanceData(fetchAttendanceData());
  }, []);

  const leaveData = {
    "2024-09-05": true,
    "2024-09-06": true,
  };

  const markedDates = mergeData(holidays, attendanceData, leaveData);

  return (
    <View style={styles.container}>
      <Calendar
        markedDates={markedDates}
        markingType={"multi-dot"}
        theme={colorScheme === "dark" ? darkTheme : lightTheme}
        style={styles.calendar}
        enableSwipeMonths={true}
      />
      <View style={styles.row}>
        <CustomText style={[styles.legendText, { color: colors.secondary2 }]}>
          ● Present
        </CustomText>
        <CustomText style={[styles.legendText, { color: colors.secondary }]}>
          ● Leave
        </CustomText>
        <CustomText style={[styles.legendText, { color: colors.warning }]}>
          ● Holiday
        </CustomText>
      </View>
      <View style={styles.statContainer}>
        <View style={styles.statColumn}>
          <StatCard title="Working Days" value="20" color={colors.secondary2} />
          <StatCard title="Late" value="20" color={colors.primary} />
          <StatCard title="Work From Home" value="20" color={colors.success} />
        </View>
        <View style={styles.statColumn}>
          <StatCard title="Leaves" value="20" color={colors.secondary} />
          <StatCard title="Early Leaves" value="20" color={colors.primary2} />
          <StatCard title="Unapproved Leave" value="20" color={colors.info} />
        </View>
      </View>
      {Object.keys(attendanceData).map((date) => (
        <TouchableOpacity
          key={date}
          style={styles.selectedDateContainer}
          onPress={() => navigation.navigate("ActivityScreen", { activities })}
        >
          <View style={styles.selectedDateHeader}>
            <DateInfo date={date} />
            <AttendanceDetails attendance={attendanceData[date]} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: 10,
  },
  legendText: {
    fontFamily: "PoppinsMedium",
  },
  statContainer: {
    flexDirection: "row",
    width: "100%",
    gap: 15,
    marginVertical: 10,
  },
  statColumn: {
    flexDirection: "column",
    flex: 1,
    gap: 15,
  },
  statCard: {
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
  },
  statTitle: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 16,
  },
  statValue: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 20,
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
