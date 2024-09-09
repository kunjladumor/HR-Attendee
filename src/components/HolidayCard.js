import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Ensure you have installed @expo/vector-icons
import colors from "@styles/ColorStyles";

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
            style={{ marginTop: -5 }}
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
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: colors.white,

    shadowColor: "rgba(0, 0, 0, 0.2)", // Light black shadow color with reduced opacity
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2, // Increase opacity slightly to make the shadow more visible
    shadowRadius: 6, // Increase the radius to make the shadow softer
    elevation: 3, // Increase elevation for a more pronounced shadow on Android
  },
  colorStrip: {
    width: 10,
    height: "100%",
  },
  content: {
    flex: 1,
    padding: 15,
    gap: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  dateText: {
    marginLeft: 5,
    fontSize: 14,
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
    fontSize: 18,
    marginTop: 5,
  },
});

export default HolidayCard;
