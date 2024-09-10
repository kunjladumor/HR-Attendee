import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Modal,
  Text,
  TouchableWithoutFeedback,
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

const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [isBreakActive, setIsBreakActive] = useState(false);

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
      date: "2023-10-02",
      stat: "On-Time",
    },
    {
      iconName: "log-out-outline",
      title: "Check-Out",
      time: "05:00 PM",
      date: "2023-10-02",
      stat: "On-Time",
    },
    {
      iconName: "log-in-outline",
      title: "Check-In",
      time: "09:00 AM",
      date: "2023-10-03",
      stat: "On-Time",
    },
    {
      iconName: "log-out-outline",
      title: "Check-Out",
      time: "05:00 PM",
      date: "2023-10-03",
      stat: "On-Time",
    },
  ];

  const renderItem = ({ item }) => {
    switch (item.type) {
      case "header":
        return <HomeHeader navigation={navigation} />;
      case "calendar":
        return <Calendar />;
      case "attendance":
        return (
          <Attendance
            attendanceData={attendanceData}
            isCheckedIn={isCheckedIn}
            isBreakActive={isBreakActive}
            setIsBreakActive={setIsBreakActive}
          />
        );
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
