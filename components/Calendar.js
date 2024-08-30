import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { CalendarStyles } from "../styles/style";

const generateDates = () => {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(today.getDate() - i);
    dates.push({
      date: date.getDate(),
      day: date.toLocaleString("default", { weekday: "short" }),
      isToday: i === 0, // Mark the current date
    });
  }
  return dates; // Reverse the array to have the current day at the end
};

const Calendar = () => {
  const dates = generateDates();

  return (
    <View style={CalendarStyles.container}>
      <FlatList
        data={dates}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              CalendarStyles.item,
              item.isToday && CalendarStyles.activeItem,
            ]}
          >
            <Text
              style={[
                CalendarStyles.date,
                item.isToday && CalendarStyles.activeDate,
              ]}
            >
              {item.date}
            </Text>
            <Text
              style={[
                CalendarStyles.day,
                item.isToday && CalendarStyles.activeDay,
              ]}
            >
              {item.day}
            </Text>
          </View>
        )}
        contentContainerStyle={CalendarStyles.listContainer}
      />
    </View>
  );
};

export default Calendar;
