// ActivityCard.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";
import colors from "@styles/ColorStyles";

const ActivityCard = ({ iconName, title, time, date, stat }) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Ionicons
          name={iconName}
          size={24}
          color={colors.primary}
          style={styles.icon}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <View style={styles.titleRow}>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.stat}>{stat}</Text>
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

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 5,
  },
  iconContainer: {
    backgroundColor: "#3185ff1A",
    padding: 5,
    marginRight: 10,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontFamily: "PoppinsSemiBold",
  },
  time: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Poppins",
  },
  date: {
    fontSize: 14,
    fontFamily: "Poppins",
    color: colors.neutral50,
  },
  stat: {
    fontSize: 14,
    color: colors.neutral50,
  },
});

export default ActivityCard;
