// ActivityScreen.js
import React from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";
import colors from "@styles/ColorStyles";
import CustomText from "@components/CustomText";
import { CommonStyles, statusBarHeight } from "@styles/style";

import ActivityCard from "@components/ActivityCard"; // Import the ActivityCard component

const ActivityScreen = ({ navigation }) => {
  const activities = [
    {
      iconName: "log-in-outline",
      title: "Check-In",
      time: "09:00 AM",
      date: "2023-10-02",
      stat: "On-Time",
    },
    {
      iconName: "log-out-outline",
      title: "Check-Out",
      time: "05:00 PM",
      date: "2023-10-02",
      stat: "On-Time",
    },
    {
      iconName: "log-in-outline",
      title: "Check-In",
      time: "09:00 AM",
      date: "2023-10-03",
      stat: "On-Time",
    },
    {
      iconName: "log-out-outline",
      title: "Check-Out",
      time: "05:00 PM",
      date: "2023-10-03",
      stat: "On-Time",
    },
    {
      iconName: "time-outline",
      title: "Break",
      time: "12:00 PM",
      date: "2023-10-01",
      stat: "30 min",
    },
    {
      iconName: "calendar-outline",
      title: "Leave",
      time: "All Day",
      date: "2023-10-02",
      stat: "Approved",
    },
    {
      iconName: "log-in-outline",
      title: "Check-In",
      time: "09:00 AM",
      date: "2023-10-02",
      stat: "On-Time",
    },
    {
      iconName: "log-out-outline",
      title: "Check-Out",
      time: "05:00 PM",
      date: "2023-10-02",
      stat: "On-Time",
    },
    {
      iconName: "log-in-outline",
      title: "Check-In",
      time: "09:00 AM",
      date: "2023-10-03",
      stat: "On-Time",
    },
    {
      iconName: "log-out-outline",
      title: "Check-Out",
      time: "05:00 PM",
      date: "2023-10-03",
      stat: "On-Time",
    },
    {
      iconName: "log-in-outline",
      title: "Check-In",
      time: "09:00 AM",
      date: "2023-10-02",
      stat: "On-Time",
    },
    {
      iconName: "log-out-outline",
      title: "Check-Out",
      time: "05:00 PM",
      date: "2023-10-02",
      stat: "On-Time",
    },
    {
      iconName: "log-in-outline",
      title: "Check-In",
      time: "09:00 AM",
      date: "2023-10-03",
      stat: "On-Time",
    },
    {
      iconName: "log-out-outline",
      title: "Check-Out",
      time: "05:00 PM",
      date: "2023-10-03",
      stat: "On-Time",
    },
    {
      iconName: "time-outline",
      title: "Break",
      time: "12:00 PM",
      date: "2023-10-01",
      stat: "30 min",
    },
    {
      iconName: "calendar-outline",
      title: "Leave",
      time: "All Day",
      date: "2023-10-02",
      stat: "Approved",
    },
    {
      iconName: "log-in-outline",
      title: "Check-In",
      time: "09:00 AM",
      date: "2023-10-02",
      stat: "On-Time",
    },
    {
      iconName: "log-out-outline",
      title: "Check-Out",
      time: "05:00 PM",
      date: "2023-10-02",
      stat: "On-Time",
    },
    {
      iconName: "log-in-outline",
      title: "Check-In",
      time: "09:00 AM",
      date: "2023-10-03",
      stat: "On-Time",
    },
    {
      iconName: "log-out-outline",
      title: "Check-Out",
      time: "05:00 PM",
      date: "2023-10-03",
      stat: "On-Time",
    },
  ];
  const renderItem = ({ item }) => (
    <ActivityCard
      iconName={item.iconName}
      title={item.title}
      time={item.time}
      date={item.date}
      stat={item.stat}
    />
  );

  const renderHeader = () => (
    <View
      style={[
        CommonStyles.row,
        {
          marginBottom: 10,
        },
      ]}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons
          name="chevron-back-outline"
          size={24}
          color={colors.neutral90}
        />
      </TouchableOpacity>
      <CustomText
        style={[CommonStyles.header, { fontSize: 24, marginLeft: 10 }]}
      >
        Activity
      </CustomText>
      <View style={{ width: 24 }} />
    </View>
  );

  return (
    <FlatList
      data={activities}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={ActivityScreenStyles.listContent}
      ListHeaderComponent={renderHeader}
    />
  );
};

const ActivityScreenStyles = StyleSheet.create({
  listContent: {
    padding: 20,
    paddingTop: statusBarHeight + 20,
    backgroundColor: colors.white,
  },
});

ActivityScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      activities: PropTypes.arrayOf(
        PropTypes.shape({
          iconName: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          time: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
          stat: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ActivityScreen;
