import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  Alert,
  Platform,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";
import colors from "@styles/ColorStyles";
import CustomText from "./CustomText";
import { CommonStyles } from "@styles/style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width: deviceWidth } = Dimensions.get("window");
const cardWidth = (deviceWidth - 40 - 20) / 2; // 40 padding (20 on each side) and 20 gap

const Attendance = ({
  attendanceData: {
    checkInTime = "N/A",
    checkOutTime = "N/A",
    breakTime = "N/A",
    totalDays = "N/A",
  },
  isCheckedIn,
  isBreakActive,
  setIsBreakActive,
  navigation,
}) => {
  const [breakCounter, setBreakCounter] = useState(0);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);
  const breakLimit = 45; // 45 minutes

  useEffect(() => {
    const loadBreakCounter = async () => {
      const storedBreakCounter = await AsyncStorage.getItem("breakCounter");
      if (storedBreakCounter !== null) {
        setBreakCounter(parseInt(storedBreakCounter, 10));
      }
    };

    const checkAndResetBreakCounter = async () => {
      const lastResetDate = await AsyncStorage.getItem("lastResetDate");
      const today = new Date().toISOString().split("T")[0];

      if (lastResetDate !== today) {
        await resetBreakCounter();
      }
    };

    const initializeBreakCounter = async () => {
      await checkAndResetBreakCounter();
      await loadBreakCounter();
    };

    initializeBreakCounter();
    resetCounterAtMidnight();

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (isCheckedIn && isBreakActive) {
      startBreakCounter();
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isCheckedIn, isBreakActive]);

  const resetCounterAtMidnight = () => {
    const now = new Date();
    const millisTillMidnight =
      new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0) -
      now;

    timeoutRef.current = setTimeout(() => {
      resetBreakCounter();
      resetCounterAtMidnight();
    }, millisTillMidnight);
  };

  const startBreakCounter = () => {
    intervalRef.current = setInterval(() => {
      setBreakCounter((prevCounter) => {
        const newCounter = prevCounter + 1;
        AsyncStorage.setItem("breakCounter", newCounter.toString());
        if (newCounter >= breakLimit * 60) {
          clearInterval(intervalRef.current);
          setIsBreakActive(false);
          alert(
            `You have exceeded the break time limit of ${breakLimit} minutes.`
          );
        }
        return newCounter;
      });
    }, 1000);
  };

  const resetBreakCounter = async () => {
    setBreakCounter(0);
    await AsyncStorage.setItem("breakCounter", "0");
    const today = new Date().toISOString().split("T")[0];
    await AsyncStorage.setItem("lastResetDate", today);
  };

  const handleBreakCardPress = () => {
    if (!isCheckedIn) {
      Alert.alert("Check-In Required", "Please check-in to start the break.");
      return;
    }
    Alert.alert(
      "Toggle Break",
      `Are you sure you want to ${isBreakActive ? "end" : "start"} the break?`,
      [
        { text: "Cancel", style: "cancel" },
        { text: "OK", onPress: () => setIsBreakActive((prev) => !prev) },
      ]
    );
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const renderCard = (iconName, title, value, stat, onPress) => (
    <Pressable
      onPress={onPress}
      disabled={title !== "Break Time"}
      android_ripple={{ color: colors.primary + "1A" }}
      style={({ pressed }) => [
        AttendanceStyles.card,
        { width: cardWidth },
        pressed && Platform.OS === "ios" && AttendanceStyles.cardPressed,
        title === "Break Time" &&
          isBreakActive &&
          AttendanceStyles.breakCardActive,
        title === "Break Time" &&
          breakCounter > breakLimit * 60 &&
          AttendanceStyles.breakCardExceeded,
      ]}
    >
      <View style={AttendanceStyles.cardHeader}>
        <View style={AttendanceStyles.iconContainer}>
          <Ionicons name={iconName} size={20} color={colors.primary} />
        </View>
        <Text style={AttendanceStyles.cardTitle}>{title}</Text>
      </View>
      <CustomText style={AttendanceStyles.cardValue}>{value}</CustomText>
      <CustomText style={AttendanceStyles.stat}>{stat}</CustomText>
    </Pressable>
  );

  return (
    <View style={AttendanceStyles.container}>
      <View style={[CommonStyles.row, { justifyContent: "space-between" }]}>
        <CustomText style={[CommonStyles.header, { fontSize: 18 }]}>
          Stats
        </CustomText>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("UserAttendance", {
              checkInTime: checkInTime,
              checkOutTime: checkOutTime,
              breakTime: breakTime,
              totalDays: totalDays,
            })
          }
        >
          <CustomText style={{ color: colors.primary, fontSize: 16 }}>
            View More
          </CustomText>
        </TouchableOpacity>
      </View>

      <View style={AttendanceStyles.grid}>
        {renderCard("log-in-outline", "Check-In Time", checkInTime, "On-Time")}
        {renderCard(
          "log-out-outline",
          "Check-Out Time",
          checkOutTime,
          "Go Home"
        )}
        {renderCard(
          "time-outline",
          "Break Time",
          formatTime(breakCounter),
          "Avg 30 min",
          handleBreakCardPress
        )}
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
    gap: 15,
  },
  card: {
    backgroundColor: colors.neutral10,
    borderRadius: 8,
    padding: 16,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardPressed: {
    backgroundColor: colors.neutral20, // Change this color to your desired pressed color
  },
  breakCardActive: {
    backgroundColor: `${colors.primary}33`, // Change this color to your desired active color
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 0,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  breakCardExceeded: {
    backgroundColor: `${colors.secondary}33`, // Change this color to your desired exceeded color
    shadowColor: colors.secondary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 0,
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 36,
    backgroundColor: `${colors.primary}1A`,
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
    color: colors.text,
    flexWrap: "wrap",
    fontFamily: "Poppins",
  },
  cardValue: {
    fontSize: 20,
    fontFamily: "PoppinsSemiBold",
    color: colors.text,
  },
  stat: {
    fontSize: 14,
    fontFamily: "Poppins",
    color: colors.text,
  },
});

Attendance.propTypes = {
  attendanceData: PropTypes.shape({
    checkInTime: PropTypes.string,
    checkOutTime: PropTypes.string,
    breakTime: PropTypes.string,
    totalDays: PropTypes.string,
  }).isRequired,
  isCheckedIn: PropTypes.bool.isRequired,
  isBreakActive: PropTypes.bool.isRequired,
  setIsBreakActive: PropTypes.func.isRequired,
};

export default Attendance;
