import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import NotificationCard from "@components/NotificationCard"; // Adjust the import based on your project structure
import CustomText from "@components/CustomText"; // Adjust the import based on your project structure
import { CommonStyles, statusBarHeight } from "@styles/style"; // Adjust the import based on your project structure
import { Ionicons } from "@expo/vector-icons"; // Adjust the import based on your project structure
import colors from "@styles/ColorStyles";

const notifications = [
  {
    id: "1",
    icon: "notifications-outline",
    title: "New Message",
    content: "You have received a new message.",
    time: "10:30 AM",
  },
  {
    id: "2",
    icon: "alert-circle-outline",
    title: "System Alert",
    content: "Your system requires an update.",
    time: "9:15 AM",
  },
  {
    id: "3",
    icon: "notifications-outline",
    title: "New Message",
    content: "You have received a new message.",
    time: "Yesterday",
  },
  {
    id: "4",
    icon: "alert-circle-outline",
    title: "System Alert",
    content: "Your system requires an update.",
    time: "Yesterday",
  },
  {
    id: "5",
    icon: "notifications-outline",
    title: "New Message",
    content: "You have received a new message.",
    time: "Yesterday",
  },
  {
    id: "6",
    icon: "alert-circle-outline",
    title: "System Alert",
    content: "Your system requires an update.",
    time: "Yesterday",
  },
  {
    id: "7",
    icon: "notifications-outline",
    title: "New Message",
    content: "You have received a new message.",
    time: "Yesterday",
  },
  {
    id: "8",
    icon: "alert-circle-outline",
    title: "System Alert",
    content: "Your system requires an update.",
    time: "Yesterday",
  },
  {
    id: "9",
    icon: "notifications-outline",
    title: "New Message",
    content: "You have received a new message.",
    time: "Yesterday",
  },
  {
    id: "10",
    icon: "alert-circle-outline",
    title: "System Alert",
    content: "Your system requires an update.",
    time: "Yesterday",
  },
];

const NotificationScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={CommonStyles.header}>
          <Ionicons
            name="chevron-back-outline"
            size={24}
            color={colors.text}
            onPress={() => navigation.goBack()}
          />
          <CustomText style={CommonStyles.header}>Notifications</CustomText>
        </View>
        {notifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            icon={notification.icon}
            title={notification.title}
            content={notification.content}
            time={notification.time}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    paddingTop: /* statusBarHeight + 20 */ 0,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
});

export default NotificationScreen;
