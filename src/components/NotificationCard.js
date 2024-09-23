import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "@styles/ColorStyles"; // Adjust the import based on your project structure

const NotificationCard = ({ icon, title, content, time }) => {
  return (
    <View style={styles.card}>
      <View style={icon ? styles.iconContainer : { width: 60 }}>
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
    marginVertical: 8,
    borderColor: colors.neutral20,
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: colors.neutral10,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  iconContainer: {
    marginRight: 16,
    backgroundColor: `${colors.neutral30}1A`,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.neutral30,
    width: 44,
    height: 44,
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
    color: colors.text,
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
