import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import colors from "@styles/ColorStyles";

const generateDates = () => {
  const dates = [];
  const today = new Date();
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    dates.push({
      date: date.getDate(),
      day: date.toLocaleString("default", { weekday: "short" }),
      isToday: i === 0, // Mark the current date
    });
  }
  return dates;
};

const Calendar = () => {
  const dates = useMemo(generateDates, []);
  const [activeDate, setActiveDate] = useState(
    dates.find((date) => date.isToday).date
  );

  const handleDatePress = (date) => {
    setActiveDate(date);
  };

  return (
    <View style={CalendarStyles.container}>
      <FlatList
        data={dates}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleDatePress(item.date)}>
            <View
              style={[
                CalendarStyles.item,
                item.date === activeDate && CalendarStyles.activeItem,
              ]}
            >
              <Text
                style={[
                  CalendarStyles.date,
                  item.date === activeDate && CalendarStyles.activeDate,
                ]}
              >
                {item.date}
              </Text>
              <Text
                style={[
                  CalendarStyles.day,
                  item.date === activeDate && CalendarStyles.activeDay,
                ]}
              >
                {item.day}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        inverted // Invert the list to have the current day at the end
        contentContainerStyle={CalendarStyles.listContainer}
      />
    </View>
  );
};

const CalendarStyles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  listContainer: {
    flexDirection: "row-reverse",
    paddingVertical: 10,
  },
  item: {
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 1,
    width: 70,
    paddingVertical: 10,
    borderColor: colors.neutral20,
    backgroundColor: colors.neutral10,
  },
  activeItem: {
    backgroundColor: colors.primary, // Active background color
  },
  date: {
    fontSize: 24,
    fontFamily: "PoppinsSemiBold",
  },
  activeDate: {
    color: colors.white, // Active date color
  },
  day: {
    fontSize: 14,
    color: colors.neutral60,
    fontFamily: "Poppins",
  },
  activeDay: {
    color: colors.white, // Active day color
  },
});

export default Calendar;
