import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // or any other icon library you are using
import ButtonStyles from "./ButtonStyles";

const Button = ({
  title,
  onPress,
  icon,
  iconStyle,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[ButtonStyles.button, buttonStyle]}
    >
      <View style={ButtonStyles.content}>
        {icon && (
          <Ionicons
            name={icon}
            size={24}
            style={[ButtonStyles.icon, iconStyle]}
          />
        )}
        <Text style={[ButtonStyles.text, textStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button; // Ensure this line is present
