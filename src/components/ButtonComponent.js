import React from "react";
import { generateDynamicStyles } from "@utils/styleUtils";
import Ionicons from "react-native-vector-icons/Ionicons"; // Import Ionicons from the library
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";

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
  fontsize,
  style,
  fontfamily,
}) => {
  const defaultTextColor = outlined ? color : "white";
  const finalTextColor = textColor || defaultTextColor;

  const CustomStyles = generateDynamicStyles({
    name: title,
    color,
    textColor: finalTextColor,
    padding,
    margin,
    borderRadius,
    textSize: fontsize,
    fontweight,
    fontfamily: fontfamily || "PoppinsRegular",
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        outlined
          ? CustomStyles[`buttonOutlined_${title}`]
          : CustomStyles[`button_${title}`],
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
          {title && (
            <Text style={[CustomStyles[`text_${title}`]]}>{title}</Text>
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
