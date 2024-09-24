import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Ensure you have installed @expo/vector-icons
import colors from "@styles/ColorStyles";
import { CommonStyles } from "@styles/style";
import CustomText from "@components/CustomText";
const AnnouncementScreen = ({ route, navigation }) => {
  const { iconName, title, content, time, subcontent } = route.params;
  return (
    <View style={CommonStyles.container}>
      <View style={CommonStyles.content}>
        <View style={CommonStyles.row}>
          <Ionicons
            name="chevron-back-outline"
            size={24}
            color={colors.text}
            style={{ marginRight: 10 }}
            onPress={() => navigation.goBack()}
          />
          <CustomText style={CommonStyles.header}>Announcement</CustomText>
        </View>
        <View style={styles.AnnouncementTitle}>
          <View style={styles.iconContainer}>
            <Ionicons name={iconName} size={20} color={colors.primary} />
          </View>
          <Text style={styles.title}>{title}</Text>
          <View
            style={[
              CommonStyles.row,
              {
                marginLeft: "auto",
                gap: 10,
              },
            ]}
          >
            <TouchableOpacity>
              <Ionicons
                name="create-outline"
                size={24}
                color={colors.neutral70}
                style={{ marginRight: 10 }}
                onPress={() => navigation.navigate("EditNotification")}
              />
            </TouchableOpacity>
            <Ionicons name="star-outline" size={24} color={colors.neutral70} />
          </View>
        </View>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.message}>{content}</Text>
        <Text style={styles.message}>{subcontent}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    padding: 15,
    borderRadius: 15,
    backgroundColor: colors.surface,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  AnnouncementTitle: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary + "33",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontFamily: "PoppinsMedium",
    color: colors.text,
    flexWrap: "wrap",
    marginLeft: 10,
  },
  message: {
    fontSize: 16,
    color: colors.neutral70,
    fontFamily: "PoppinsMedium",
  },
  time: {
    fontSize: 12,
    color: colors.neutral80,
    fontFamily: "Poppins",
  },
});

export default AnnouncementScreen;
