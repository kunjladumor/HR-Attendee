import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { CommonStyles } from "@styles/style";
import CustomText from "@components/CustomText";
import CalendarComponent from "@components/CalendarComponent"; // Import the CalendarComponent
import { Ionicons } from "@expo/vector-icons";
import colors from "@styles/ColorStyles";

const UserAttendanceScreen = ({ navigation, route }) => {
  const { profilePicture, name, designation } = route.params; // Get user details from route params
  const [selectedFilter, setSelectedFilter] = useState("month"); // Default filter is month
  const [attendanceData, setAttendanceData] = useState([]); // State to hold attendance data

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    // Fetch and set attendance data based on the selected filter
    // This is just a placeholder, replace with actual data fetching logic
    setAttendanceData([
      { date: "2024-01-01", status: "Present" },
      { date: "2024-01-02", status: "Absent" },
      { date: "2024-01-03", status: "Present" },
      { date: "2024-01-04", status: "Present" },
      { date: "2024-01-05", status: "Absent" },
      { date: "2024-01-06", status: "Present" },
      { date: "2024-01-07", status: "Present" },
      { date: "2024-01-08", status: "Absent" },
      { date: "2024-01-09", status: "Present" },
      { date: "2024-01-10", status: "Present" },
      { date: "2024-01-11", status: "Absent" },
      { date: "2024-01-12", status: "Present" },
      // Add more data as needed
    ]);
  };

  return (
    <ScrollView contentContainerStyle={CommonStyles.container}>
      <View style={CommonStyles.content}>
        <View style={CommonStyles.row}>
          <Ionicons
            name="chevron-back-outline"
            size={24}
            color={colors.neutral90}
            style={{ marginRight: 10 }}
            onPress={() => navigation.goBack()}
          />
          <CustomText style={CommonStyles.header}>Attendance</CustomText>
        </View>
        {profilePicture && name && designation && (
          <View style={styles.userInfoContainer}>
            <Image source={profilePicture} style={styles.profilePicture} />
            <View style={styles.userInfo}>
              <CustomText style={styles.userName}>{name}</CustomText>
              <CustomText style={styles.userDesignation}>
                {designation}
              </CustomText>
            </View>
          </View>
        )}
        {/* <View style={styles.filterContainer}>
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedFilter === "month" && styles.selectedFilterButton,
            ]}
            onPress={() => handleFilterChange("month")}
          >
            <CustomText
              style={[
                styles.filterText,
                selectedFilter === "month" && styles.selectedFilterText,
              ]}
            >
              Month
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedFilter === "week" && styles.selectedFilterButton,
            ]}
            onPress={() => handleFilterChange("week")}
          >
            <CustomText
              style={[
                styles.filterText,
                selectedFilter === "week" && styles.selectedFilterText,
              ]}
            >
              Week
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedFilter === "year" && styles.selectedFilterButton,
            ]}
            onPress={() => handleFilterChange("year")}
          >
            <CustomText
              style={[
                styles.filterText,
                selectedFilter === "year" && styles.selectedFilterText,
              ]}
            >
              Year
            </CustomText>
          </TouchableOpacity>
        </View> */}
        <CalendarComponent navigation={navigation} />
        <View style={styles.attendanceStatsContainer}>
          {attendanceData.map((entry, index) => (
            <View key={index} style={styles.attendanceEntry}>
              <CustomText style={styles.attendanceDate}>
                {entry.date}
              </CustomText>
              <CustomText style={styles.attendanceStatus}>
                {entry.status}
              </CustomText>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontFamily: "PoppinsSemiBold",
    color: colors.text,
  },
  userDesignation: {
    fontSize: 16,
    color: colors.neutral60,
  },
  filterContainer: {
    flexDirection: "row",
    backgroundColor: colors.neutral30 + "33",
    borderRadius: 15,
    marginVertical: 10,
  },
  filterButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    borderRadius: 15,
    flex: 1,
  },
  selectedFilterButton: {
    backgroundColor: colors.primary,
  },
  filterText: {
    color: colors.text,
  },
  selectedFilterText: {
    color: colors.white,
    fontFamily: "PoppinsMedium",
  },

  attendanceEntry: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral20,
  },
  attendanceDate: {
    fontSize: 16,
  },
  attendanceStatus: {
    fontSize: 16,
    fontFamily: "PoppinsSemiBold",
  },
});

export default UserAttendanceScreen;
