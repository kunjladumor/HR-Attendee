import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Ensure you have installed @expo/vector-icons
import colors from "../styles/ColorStyles";

const HolidayCard = ({ date, occasion }) => {
  const holidayDate = new Date(date);
  const today = new Date();
  const isUpcoming = holidayDate >= today;

  const day = holidayDate.toLocaleDateString("en-US", { weekday: "long" });
  const formattedDate = holidayDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <View style={styles.card}>
      <View
        style={[
          styles.colorStrip,
          { backgroundColor: isUpcoming ? colors.primary : colors.neutral20 },
        ]}
      />
      <View style={styles.content}>
        <View style={styles.header}>
          <Ionicons
            name="calendar-outline"
            size={24}
            color={colors.neutral80}
          />
          <Text style={styles.dateText}>{formattedDate}</Text>
          <Text style={styles.dayText}>{day}</Text>
        </View>
        <Text style={styles.occasionText}>{occasion}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  colorStrip: {
    width: 10,
    height: "100%",
  },
  content: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "first-baseline",
  },
  dateText: {
    marginLeft: 5,
    fontSize: 16,
    fontFamily: "PoppinsMedium",
  },
  dayText: {
    fontSize: 14,
    color: colors.neutral50,
    marginLeft: "auto",
    fontFamily: "PoppinsRegular",
  },
  occasionText: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 16,
    marginTop: 5,
  },
});

export default HolidayCard;
