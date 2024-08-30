// Activity.js
import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";
import colors from "./Colors/ColorStyles";
import { ActivityStyles } from "../styles/style";

// ActivityCard Component
const ActivityCard = ({ iconName, title, time, date, stat }) => {
  return (
    <View style={ActivityStyles.card}>
      <View style={ActivityStyles.iconContainer}>
        <Ionicons
          name={iconName}
          size={24}
          color={colors.primary}
          style={ActivityStyles.icon}
        />
      </View>
      <View style={ActivityStyles.infoContainer}>
        <View style={ActivityStyles.titleRow}>
          <Text style={ActivityStyles.title}>{title}</Text>
          <Text style={ActivityStyles.time}>{time}</Text>
        </View>
        <View style={ActivityStyles.titleRow}>
          <Text style={ActivityStyles.date}>{date}</Text>
          <Text style={ActivityStyles.stat}>{stat}</Text>
        </View>
      </View>
    </View>
  );
};

ActivityCard.propTypes = {
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  stat: PropTypes.string.isRequired,
};

// Activity Component
const Activity = ({ activities }) => {
  const renderItem = ({ item }) => (
    <ActivityCard
      iconName={item.iconName}
      title={item.title}
      time={item.time}
      date={item.date}
      stat={item.stat}
    />
  );

  return (
    <View style={ActivityStyles.container}>
      <View style={ActivityStyles.header}>
        <Text style={ActivityStyles.headerTitle}>Activity</Text>
        <TouchableOpacity>
          <Text style={ActivityStyles.viewMore}>View More</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={activities}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

Activity.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      stat: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Activity;
