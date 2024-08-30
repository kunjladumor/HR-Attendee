import React from "react";
import { generateDynamicStyles } from "../../styles/styleUtils";
import Ionicons from "react-native-vector-icons/Ionicons"; // Import Ionicons from the library
import {
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
  Image,
} from "react-native";

const CustomButton = ({
  title,
  onPress,
  disabled,
  color,
  outlined,
  loading,
  padding,
  margin,
  borderRadius,
  textColor,
  gap = 10,
  iconName,
  iconSize,
  iconColor,
  children,
  fontweight,
  style,
}) => {
  const defaultTextColor = outlined ? color : "white";
  const finalTextColor = textColor || defaultTextColor;

  const styles = generateDynamicStyles({
    name: title,
    color,
    textColor: finalTextColor,
    padding,
    margin,
    borderRadius,
    fontweight,
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        outlined
          ? styles[`buttonOutlined_${title}`]
          : styles[`button_${title}`],
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: gap,
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <>
          {children}
          {iconName && (
            <Ionicons name={iconName} size={iconSize} color={iconColor} />
          )}
          {title && <Text style={[styles[`text_${title}`]]}>{title}</Text>}
        </>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
