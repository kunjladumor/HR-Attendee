import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import NotificationCard from "../components/NotificationCard"; // Adjust the import based on your project structure
import CustomText from "../components/CustomText"; // Adjust the import based on your project structure
import { CommonStyles, statusBarHeight } from "../styles/style"; // Adjust the import based on your project structure
import { Ionicons } from "@expo/vector-icons"; // Adjust the import based on your project structure
import colors from "../styles/ColorStyles";

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
];

const NotificationScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <NotificationCard
      icon={item.icon}
      title={item.title}
      content={item.content}
      time={item.time}
    />
  );

  return (
    <View style={styles.container}>
      <View style={CommonStyles.header}>
        <Ionicons
          name="chevron-back-outline"
          size={24}
          onPress={() => navigation.goBack()}
        />
        <CustomText style={{ fontSize: 24 }}>Notifications</CustomText>
      </View>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
    paddingTop: statusBarHeight + 20,
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default NotificationScreen;
