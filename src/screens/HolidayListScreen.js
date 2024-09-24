import React, { useState } from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { CommonStyles } from "@styles/style";
import CustomText from "@components/CustomText";
import { FlatList } from "react-native-gesture-handler";
import HolidayCard from "@components/HolidayCard"; // Adjust the import path as needed
import AnnouncementCard from "@components/AnnouncementCard"; // Adjust the import path as needed

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

const announcements = [
  {
    iconName: "megaphone-outline", // Correct icon name
    title: "New Announcement",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subcontent:
      "As an exercise for English students, generate a list of ten random words and have the student write a story that incorporates those words in the order they're generated \n\nYou could also take the hard work out of playing MadLibs but for that youll need to separate out the parts of speech. There's generators for each one, just jump over using the options below.",
    time: "2 hours ago",
  },
  {
    iconName: "megaphone-outline", // Correct icon name
    title: "Important Update",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subcontent:
      "As an exercise for English students, generate a list of ten random words and have the student write a story that incorporates those words in the order they're generated \n\nYou could also take the hard work out of playing MadLibs but for that youll need to separate out the parts of speech. There's generators for each one, just jump over using the options below.",
    time: "1 day ago",
  },
  {
    iconName: "megaphone-outline", // Correct icon name
    title: "New Announcement",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subcontent:
      "As an exercise for English students, generate a list of ten random words and have the student write a story that incorporates those words in the order they're generated \n\nYou could also take the hard work out of playing MadLibs but for that youll need to separate out the parts of speech. There's generators for each one, just jump over using the options below.",
    time: "2 hours ago",
  },
  {
    iconName: "megaphone-outline", // Correct icon name
    title: "Important Update",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subcontent:
      "As an exercise for English students, generate a list of ten random words and have the student write a story that incorporates those words in the order they're generated \n\nYou could also take the hard work out of playing MadLibs but for that youll need to separate out the parts of speech. There's generators for each one, just jump over using the options below.",
    time: "1 day ago",
  },
  {
    iconName: "megaphone-outline", // Correct icon name
    title: "New Announcement",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subcontent:
      "As an exercise for English students, generate a list of ten random words and have the student write a story that incorporates those words in the order they're generated \n\nYou could also take the hard work out of playing MadLibs but for that youll need to separate out the parts of speech. There's generators for each one, just jump over using the options below.",
    time: "2 hours ago",
  },
  {
    iconName: "megaphone-outline", // Correct icon name
    title: "Important Update",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subcontent:
      "As an exercise for English students, generate a list of ten random words and have the student write a story that incorporates those words in the order they're generated \n\nYou could also take the hard work out of playing MadLibs but for that youll need to separate out the parts of speech. There's generators for each one, just jump over using the options below.",
    time: "1 day ago",
  },
  {
    iconName: "megaphone-outline", // Correct icon name
    title: "New Announcement",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subcontent:
      "As an exercise for English students, generate a list of ten random words and have the student write a story that incorporates those words in the order they're generated \n\nYou could also take the hard work out of playing MadLibs but for that youll need to separate out the parts of speech. There's generators for each one, just jump over using the options below.",
    time: "2 hours ago",
  },
  {
    iconName: "megaphone-outline", // Correct icon name
    title: "Important Update",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subcontent:
      "As an exercise for English students, generate a list of ten random words and have the student write a story that incorporates those words in the order they're generated \n\nYou could also take the hard work out of playing MadLibs but for that youll need to separate out the parts of speech. There's generators for each one, just jump over using the options below.",
    time: "1 day ago",
  },
  // Add more announcements as needed
];

function HolidayListScreen() {
  return (
    <ScrollView contentContainerStyle={CommonStyles.container}>
      <View style={CommonStyles.content}>
        <CustomText style={CommonStyles.header}>Announcements</CustomText>
        <FlatList
          data={announcements}
          renderItem={({ item }) => (
            <AnnouncementCard
              icon={item.iconName}
              title={item.title}
              content={item.content}
              time={item.time}
              subcontent={item.subcontent}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ gap: 20 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
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

export default HolidayListScreen;
