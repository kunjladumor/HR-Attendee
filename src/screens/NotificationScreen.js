import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
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
    type: "message",
  },
  {
    id: "2",
    icon: "alert-circle-outline",
    title: "System Alert",
    content: "Your system requires an update.",
    time: "9:15 AM",
    favourite: true,
    type: "alert",
  },
  {
    id: "3",
    icon: "notifications-outline",
    title: "New Message",
    content: "You have received a new message.",
    time: "Yesterday",
    favourite: true,
    type: "message",
  },
  {
    id: "4",
    icon: "alert-circle-outline",
    title: "System Alert",
    content: "Your system requires an update.",
    time: "Yesterday",
    favourite: true,
    type: "alert",
  },
  {
    id: "5",
    icon: "notifications-outline",
    title: "New Message",
    content: "You have received a new message.",
    time: "Yesterday",
    favourite: true,
    type: "message",
  },
  {
    id: "6",
    icon: "alert-circle-outline",
    title: "System Alert",
    content: "Your system requires an update.",
    time: "Yesterday",
    favourite: true,
    type: "alert",
  },
  {
    id: "7",
    icon: "notifications-outline",
    title: "New Message",
    content: "You have received a new message.",
    time: "Yesterday",
    favourite: true,
    type: "message",
  },
  {
    id: "8",
    icon: "alert-circle-outline",
    title: "System Alert",
    content: "Your system requires an update.",
    time: "Yesterday",
    favourite: true,
    type: "alert",
  },
  {
    id: "9",
    icon: "notifications-outline",
    title: "New Message",
    content: "You have received a new message.",
    time: "Yesterday",
    favourite: true,
    type: "message",
  },
  {
    id: "10",
    icon: "alert-circle-outline",
    title: "System Alert",
    content: "Your system requires an update.",
    time: "Yesterday",
    favourite: true,
    type: "alert",
  },
  {
    id: "11",
    icon: "notifications-outline",
    title: "New Message",
    content: "You have received a new message.",
    time: "Yesterday",
    favourite: true,
    type: "message",
  },
];

const NotificationScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "all", title: "All" },
    { key: "message", title: "Messages" },
    { key: "alert", title: "Alerts" },
  ]);

  const renderScene = SceneMap({
    all: () => (
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
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
        </View>
      </ScrollView>
    ),
    message: () => (
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          {notifications
            .filter((notification) => notification.type === "message")
            .map((notification) => (
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
        </View>
      </ScrollView>
    ),
    alert: () => (
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          {notifications
            .filter((notification) => notification.type === "alert")
            .map((notification) => (
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
        </View>
      </ScrollView>
    ),
  });

  return (
    <View style={CommonStyles.container}>
      <View
        style={[
          CommonStyles.row,
          {
            paddingHorizontal: 20,
            gap: 10,
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
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get("window").width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: colors.primary }}
            style={{ backgroundColor: colors.background }}
            labelStyle={{ color: colors.text }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    paddingTop: 0,
    paddingBottom: 90,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
});

export default NotificationScreen;
