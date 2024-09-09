import React from "react";
import { View, ScrollView } from "react-native";
import { CommonStyles } from "@styles/style";
import CustomText from "@components/CustomText";
import HolidayCard from "@components/HolidayCard"; // Adjust the import path as needed

const holidays = [
  { date: "2024-01-26", occasion: "Republic Day" },
  { date: "2024-03-08", occasion: "Maha Shivaratri" },
  { date: "2024-03-25", occasion: "Holi" },
  { date: "2024-04-14", occasion: "Dr. Ambedkar Jayanti" },
  { date: "2024-04-17", occasion: "Mahavir Jayanti" },
  { date: "2024-05-23", occasion: "Buddha Purnima" },
  { date: "2024-08-15", occasion: "Independence Day" },
  { date: "2024-08-28", occasion: "Janmashtami" },
  { date: "2024-10-02", occasion: "Gandhi Jayanti" },
  { date: "2024-10-13", occasion: "Dussehra" },
  { date: "2024-11-01", occasion: "Diwali" },
  { date: "2024-12-25", occasion: "Christmas" },
];

// Sort holidays by date in ascending order
const sortedHolidays = holidays.sort(
  (a, b) => new Date(a.date) - new Date(b.date)
);

export default function HolidayListScreen() {
  return (
    <ScrollView contentContainerStyle={CommonStyles.container}>
      <View style={CommonStyles.content}>
        <CustomText style={CommonStyles.header}>Holiday List</CustomText>
        {sortedHolidays.map((holiday, index) => (
          <HolidayCard
            key={index}
            date={holiday.date}
            occasion={holiday.occasion}
          />
        ))}
      </View>
    </ScrollView>
  );
}
