import React, { useState } from "react";
import { View, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import HomeHeader from "@components/HomeHeader";
import Calendar from "@components/Calendar";
import Attendance from "@components/Attendance";
import SwipeButton from "@components/SwipeButton";
import Activity from "@components/Activity";
import { CommonStyles } from "@styles/style";
import colors from "@styles/ColorStyles";
const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const attendanceData = {
    checkInTime: "09:00 AM",
    checkOutTime: "05:00 PM",
    breakTime: "30 min",
    totalDays: "20",
  };

  const activities = [
    {
      iconName: "log-in-outline",
      title: "Check-In",
      time: "09:00 AM",
      date: "2023-10-01",
      stat: "On-Time",
    },
    {
      iconName: "log-out-outline",
      title: "Check-Out",
      time: "05:00 PM",
      date: "2023-10-01",
      stat: "On-Time",
    },
    {
      iconName: "time-outline",
      title: "Break",
      time: "12:00 PM",
      date: "2023-10-01",
      stat: "30 min",
    },
    {
      iconName: "calendar-outline",
      title: "Leave",
      time: "All Day",
      date: "2023-10-02",
      stat: "Approved",
    },
  ];

  const renderItem = ({ item }) => {
    switch (item.type) {
      case "header":
        return <HomeHeader navigation={navigation} />;
      case "calendar":
        return <Calendar />;
      case "attendance":
        return <Attendance attendanceData={attendanceData} />;
      case "activity":
        return <Activity activities={activities} />;
      default:
        return null;
    }
  };

  const data = [
    { type: "header" },
    { type: "calendar" },
    { type: "attendance" },
    { type: "activity" },
  ];

  return (
    <View style={CommonStyles.container}>
      {isLoading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={[CommonStyles.content, { paddingBottom: 150 }]}
      />
      <SwipeButton setIsLoading={setIsLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
});

export default HomeScreen;
