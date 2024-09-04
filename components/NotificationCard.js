import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../styles/ColorStyles"; // Adjust the import based on your project structure

const NotificationCard = ({ icon, title, content, time }) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Ionicons
          name={icon}
          size={24}
          color={colors.primary}
          style={styles.icon}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 16,
    borderBottomColor: colors.neutral20,
    borderBottomWidth: 1,
  },
  iconContainer: {
    marginRight: 16,
    backgroundColor: `${colors.neutral30}1A`,
    padding: 10,
    borderRadius: 25,
    alignSelf: "flex-start",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: "PoppinsSemiBold",
    marginBottom: 4,
  },
  content: {
    fontSize: 14,
    color: colors.neutral80,
    marginBottom: 4,
    fontFamily: "PoppinsMedium",
  },
  time: {
    fontSize: 12,
    color: colors.neutral60,
  },
});

export default NotificationCard;
