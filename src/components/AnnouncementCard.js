import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "@styles/ColorStyles"; // Adjust the import based on your project structure
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const deviceWidth = Dimensions.get("window").width;
const cardWidth = deviceWidth / 1.25; // Subtract padding of 20

const AnnouncementCard = ({ icon, title, content, subcontent, time }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("AnnouncementScreen", {
      iconName: icon,
      title,
      content,
      subcontent,
      time,
    });
  };

  return (
    <TouchableOpacity
      style={[styles.card, { width: cardWidth }]}
      onPress={handlePress}
    >
      <View style={styles.iconContainer}>
        <Ionicons
          name={icon}
          size={24}
          color={colors.primary}
          style={styles.icon}
        />
      </View>
      <View style={styles.textContainer}>
        {title ? <Text style={styles.title}>{title}</Text> : null}
        {content ? <Text style={styles.content}>{content}</Text> : null}
        {time ? <Text style={styles.time}>{time}</Text> : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 16,
    borderColor: `${colors.primary}4D`,
    backgroundColor: `${colors.primary}0D`,
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: colors.neutral10,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  iconContainer: {
    marginRight: 16,
    backgroundColor: `${colors.primary}1A`,
    padding: 10,
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
    fontFamily: "Poppins",
  },
});

export default AnnouncementCard;
