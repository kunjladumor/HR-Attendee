// ActivityCard.js
import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";
import colors from "@styles/ColorStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const ActivityCard = ({ iconName, title, time, date, stat, url }) => {
  const handlePress = () => {
    console.log("Opening URL", url);
    if (url) {
      Linking.openURL(url).catch((err) =>
        console.error("Failed to open URL", err)
      );
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
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
    </TouchableOpacity>
  );
};

ActivityCard.propTypes = {
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  stat: PropTypes.string.isRequired,
  url: PropTypes.string, // Add url prop type
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: colors.neutral10,
    borderColor: colors.neutral20,
  },
  iconContainer: {
    backgroundColor: colors.primary + "1A",
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
    color: colors.text,
  },
  time: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: colors.text,
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
