// ProfileButtonTab.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // You can change the icon set based on your needs
import CustomText from "./CustomText";
import colors from "../styles/ColorStyles";

const ProfileButtonTab = ({
  iconName,
  text,
  onPress,
  color = colors.neutral90,
  textColor = colors.neutral90,
  iconView,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={ProfileButtonStyles.container}>
      <View style={ProfileButtonStyles.iconContainer}>
        <Icon name={iconName} size={24} color={color} />
      </View>
      <View style={ProfileButtonStyles.textContainer}>
        <CustomText style={[ProfileButtonStyles.text, { color: textColor }]}>
          {text}
        </CustomText>
      </View>
      {!iconView && (
        <View style={ProfileButtonStyles.arrowContainer}>
          <Icon name="chevron-forward" size={20} color={colors.neutral90} />
        </View>
      )}
    </TouchableOpacity>
  );
};

const ProfileButtonStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  iconContainer: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
  },
  arrowContainer: {
    marginLeft: "auto",
  },
});

export default ProfileButtonTab;
