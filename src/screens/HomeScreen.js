import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Modal,
  Text,
  TouchableWithoutFeedback,
  RefreshControl,
} from "react-native";
import HomeHeader from "@components/HomeHeader";
import Calendar from "@components/Calendar";
import Attendance from "@components/Attendance";
import SwipeButton from "@components/SwipeButton";
import Activity from "@components/Activity";
import { CommonStyles } from "@styles/style";
import colors from "@styles/ColorStyles";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AnnouncementCard from "@components/AnnouncementCard";

export const activities = [
  {
    iconName: "log-in-outline",
    title: "Check-In",
    time: "09:00 AM",
    date: "2023-10-02",
    stat: "On-Time",
    url: "https://www.google.com/maps?q=19.1742727,72.8441164",
  },
  {
    iconName: "log-out-outline",
    title: "Check-Out",
    time: "05:00 PM",
    date: "2023-10-02",
    stat: "On-Time",
    url: "https://www.google.com/maps?q=19.1742727,72.8441164",
  },
  {
    iconName: "log-in-outline",
    title: "Check-In",
    time: "09:00 AM",
    date: "2023-10-03",
    stat: "On-Time",
    url: "https://www.google.com/maps?q=19.1742727,72.8441164",
  },
  {
    iconName: "log-out-outline",
    title: "Check-Out",
    time: "05:00 PM",
    date: "2023-10-03",
    stat: "On-Time",
    url: "https://www.google.com/maps?q=19.1742727,72.8441164",
  },
  {
    iconName: "time-outline",
    title: "Break",
    time: "12:00 PM",
    date: "2023-10-01",
    stat: "30 min",
    url: "https://www.google.com/maps?q=19.1742727,72.8441164",
  },
  {
    iconName: "calendar-outline",
    title: "Leave",
    time: "All Day",
    date: "2023-10-02",
    stat: "Approved",
    url: "https://www.google.com/maps?q=19.1742727,72.8441164",
  },
  {
    iconName: "log-in-outline",
    title: "Check-In",
    time: "09:00 AM",
    date: "2023-10-04",
    stat: "On-Time",
    url: "https://www.google.com/maps?q=19.1742727,72.8441164",
  },
  {
    iconName: "log-out-outline",
    title: "Check-Out",
    time: "05:00 PM",
    date: "2023-10-04",
    stat: "On-Time",
    url: "https://www.google.com/maps?q=19.1742727,72.8441164",
  },
  {
    iconName: "log-in-outline",
    title: "Check-In",
    time: "09:00 AM",
    date: "2023-10-05",
    stat: "On-Time",
    url: "https://www.google.com/maps?q=19.1742727,72.8441164",
  },
  {
    iconName: "log-out-outline",
    title: "Check-Out",
    time: "05:00 PM",
    date: "2023-10-05",
    stat: "On-Time",
    url: "https://www.google.com/maps?q=19.1742727,72.8441164",
  },
];
const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [isBreakActive, setIsBreakActive] = useState(false);
  const [refreshing, setRefreshing] = useState(false); // State for refreshing

  useEffect(() => {
    const getCheckInStatus = async () => {
      try {
        const status = await AsyncStorage.getItem("checkInStatus");
        if (status !== null) {
          const parsedStatus = JSON.parse(status);
          setIsCheckedIn(parsedStatus);
        }
      } catch (error) {
        console.error("Failed to load check-in status", error);
      }
    };

    getCheckInStatus();
  }, []);

  const showModal = (message) => {
    setModalMessage(message);
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 1500);
  };

  const handleCheckInStatusChange = (status) => {
    setIsCheckedIn(status);
    if (!status) {
      setIsBreakActive(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate a network request
    setTimeout(() => {
      // Reset the announcements and page
      setRefreshing(false);
    }, 2000);
  };

  const attendanceData = {
    checkInTime: "09:00 AM",
    checkOutTime: "05:00 PM",
    breakTime: "30 min",
    totalDays: "20",
  };

  // Get the first 4 activities
  const displayedActivities = activities.slice(0, 4);

  const renderItem = ({ item }) => {
    switch (item.type) {
      case "calendar":
        return <Calendar />;
      case "attendance":
        return (
          <Attendance
            attendanceData={attendanceData}
            isCheckedIn={isCheckedIn}
            isBreakActive={isBreakActive}
            setIsBreakActive={setIsBreakActive}
            navigation={navigation}
          />
        );
      case "activity":
        return (
          <Activity
            activities={activities}
            displayedActivities={displayedActivities}
          />
        );

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
          <ActivityIndicator
            size="large"
            color={colors.primary}
            style={styles.indicator}
          />
        </View>
      )}
      <HomeHeader navigation={navigation} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={[CommonStyles.content, { paddingBottom: 150 }]}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      <SwipeButton
        setIsLoading={setIsLoading}
        showModal={showModal}
        onCheckInStatusChange={handleCheckInStatusChange}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Ionicons
                name="checkmark-circle"
                size={50}
                color={colors.primary}
              />
              <Text style={styles.modalText}>{modalMessage}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
  indicator: {
    transform: [{ scale: 2 }],
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 250,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    marginTop: 10,
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Poppins",
  },
});

export default HomeScreen;
