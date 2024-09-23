import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { CommonStyles } from "@styles/style";
import CustomText from "@components/CustomText";
import CustomButton from "./ButtonComponent";
import colors from "@styles/ColorStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const Badge = ({ count }) => (
  <View style={HomeScreens.badgeContainer}>
    <Text style={HomeScreens.badgeText}>{count}</Text>
  </View>
);

export const HomeHeader = ({ navigation }) => {
  return (
    <View style={[CommonStyles.header, HomeScreens.header]}>
      <TouchableOpacity
        style={HomeScreens.headerContainer}
        onPress={() => navigation.navigate("ProfileScreen")} // Navigate to ProfileScreen
      >
        <Image
          style={HomeScreens.userImage}
          source={require("@assets/images/user.png")} // Adjust the path as necessary
        />
        <View style={HomeScreens.headerContent}>
          <CustomText style={HomeScreens.userName}>Michael Mitc</CustomText>
          <CustomText style={HomeScreens.userDesignation}>
            Lead UI/UX Designer
          </CustomText>
        </View>
      </TouchableOpacity>
      <View style={HomeScreens.notificationButtonContainer}>
        <CustomButton
          color="neutral80"
          outlined={true}
          padding={0}
          onPress={() => navigation.navigate("Notifications")}
          iconName="notifications-outline"
          iconSize={24}
          iconColor={colors.neutral80}
          style={HomeScreens.notificationButton}
        />
        <Badge count={5} />
      </View>
    </View>
  );
};

const HomeScreens = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    backgroundColor: "transparent",
    paddingHorizontal: 0,
    fontFamily: "Poppins",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerContent: {
    flexDirection: "column",
  },
  userName: {
    fontSize: 20,
    color: colors.neutral90,
    fontFamily: "PoppinsSemiBold",
  },
  userDesignation: {
    fontSize: 16,
    color: colors.neutral60,
    fontFamily: "Poppins",
  },
  userImage: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 50,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  notificationButtonContainer: {
    position: "relative",
  },
  badgeContainer: {
    position: "absolute",
    right: 0,
    top: 0,
    backgroundColor: colors.secondary,
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: colors.white,
    fontSize: 10,
    lineHeight: 12,
    fontFamily: "PoppinsSemiBold",
  },
});

export default HomeHeader;
