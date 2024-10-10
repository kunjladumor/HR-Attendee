import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import NotificationCard from "@components/NotificationCard"; // Adjust the import based on your project structure
import CustomText from "@components/CustomText"; // Adjust the import based on your project structure
import { CommonStyles } from "@styles/style"; // Adjust the import based on your project structure
import { Ionicons } from "@expo/vector-icons"; // Adjust the import based on your project structure
import colors from "@styles/ColorStyles";

const notifications = [
  {
    id: "1",
    icon: "notifications-outline",
    title: "New Message",
    content: "You have received a new message.",
    time: "10:30 AM",
    favourite: true,
  },
  {
    id: "2",
    icon: "alert-circle-outline",
    title: "System Alert",
    content: "Your system requires an update.",
    time: "9:15 AM",
    favourite: true,
  },
  {
    id: "3",
    icon: "notifications-outline",
    title: "New Message",
    content: "You have received a new message.",
    time: "Yesterday",
    favourite: true,
  },
  {
    id: "4",
    icon: "alert-circle-outline",
    title: "System Alert",
    content: "Your system requires an update.",
    time: "Yesterday",
    favourite: true,
  },
  {
    id: "5",
    icon: "notifications-outline",
    title: "New Message",
    content: "You have received a new message.",
    time: "Yesterday",
    favourite: true,
  },
  {
    id: "6",
    icon: "alert-circle-outline",
    title: "System Alert",
    content: "Your system requires an update.",
    time: "Yesterday",
    favourite: true,
  },
  {
    id: "7",
    icon: "notifications-outline",
    title: "New Message",
    content: "You have received a new message.",
    time: "Yesterday",
    favourite: true,
  },
  {
    id: "8",
    icon: "alert-circle-outline",
    title: "System Alert",
    content: "Your system requires an update.",
    time: "Yesterday",
    favourite: true,
  },
  {
    id: "9",
    icon: "notifications-outline",
    title: "New Message",
    content: "You have received a new message.",
    time: "Yesterday",
    favourite: true,
  },
  {
    id: "10",
    icon: "alert-circle-outline",
    title: "System Alert",
    content: "Your system requires an update.",
    time: "Yesterday",
    favourite: true,
  },
  {
    id: "11",
    icon: "notifications-outline",
    title: "New Message",
    content: "You have received a new message.",
    time: "Yesterday",
    favourite: true,
  },
];

const NotificationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          CommonStyles.header,
          {
            paddingHorizontal: 20,
          },
        ]}
      >
        <Ionicons
          name="chevron-back-outline"
          size={24}
          color={colors.text}
          onPress={() => navigation.goBack()}
        />
        <CustomText style={CommonStyles.header}>Notifications</CustomText>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {notifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            icon={notification.icon}
            title={notification.title}
            content={notification.content}
            time={notification.time}
            navigation={navigation}
            favourite={notification.favourite}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 0,
  },
  scrollViewContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

export default NotificationScreen;
