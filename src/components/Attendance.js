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

const { width: deviceWidth } = Dimensions.get("window");
const cardWidth = (deviceWidth - 40 - 20) / 2; // 40 padding (20 on each side) and 20 gap

const Attendance = ({
  attendanceData: {
    checkInTime = "N/A",
    checkOutTime = "N/A",
    breakTime = "N/A",
    totalDays = "N/A",
  },
}) => {
  const [breakCounter, setBreakCounter] = useState(0);
  const [isBreakActive, setIsBreakActive] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const loadBreakCounter = async () => {
      try {
        const storedCounter = await AsyncStorage.getItem("breakCounter");
        if (storedCounter !== null) {
          setBreakCounter(parseInt(storedCounter, 10));
        }
      } catch (error) {
        console.error("Failed to load break counter", error);
      }
    };

    loadBreakCounter();

    const resetCounterAtMidnight = () => {
      const now = new Date();
      const millisTillMidnight =
        new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() + 1,
          0,
          0,
          0
        ) - now;
      setTimeout(() => {
        setBreakCounter(0);
        AsyncStorage.setItem("breakCounter", "0");
        resetCounterAtMidnight();
      }, millisTillMidnight);
    };

    resetCounterAtMidnight();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isBreakActive) {
      intervalRef.current = setInterval(() => {
        setBreakCounter((prevCounter) => {
          const newCounter = prevCounter + 1;
          AsyncStorage.setItem("breakCounter", newCounter.toString());
          if (newCounter >= 45 * 60) {
            clearInterval(intervalRef.current);
            setIsBreakActive(false);
          }
          return newCounter;
        });
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isBreakActive]);

  const handleBreakCardPress = () => {
    Alert.alert(
      "Toggle Break",
      `Are you sure you want to ${isBreakActive ? "end" : "start"} the break?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => setIsBreakActive((prev) => !prev),
        },
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
      <CustomText style={[CommonStyles.header, { fontSize: 18 }]}>
        Today's Attendance
      </CustomText>
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
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardPressed: {
    backgroundColor: "#e0e0e0", // Change this color to your desired pressed color
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
