import { StyleSheet } from "react-native";
import colors from "./ColorStyles"; // Adjust the import path as necessary

export const generateDynamicStyles = ({
  name,
  color,
  textColor = "white",
  padding = 10,
  margin,
  borderRadius = 5,
  borderWidth = 1,
  textSize = 15,
  fontweight = "normal",
}) => {
  return StyleSheet.create({
    [`button_${name}`]: {
      backgroundColor: colors[color],
      padding: padding,
      margin: margin,
      borderRadius: borderRadius,
    },
    [`buttonOutlined_${name}`]: {
      borderColor: colors[color],
      borderWidth: borderWidth,
      backgroundColor: "transparent",
      padding: padding,
      margin: margin,
      borderRadius: borderRadius,
    },
    [`text_${name}`]: {
      color: colors[textColor] || textColor, // Ensure textColor can be primary or secondary
      padding: padding / 2, // Example of text padding
      fontSize: textSize, // Example of text fontSize
      fontWeight: fontweight, // Example of text fontWeight
      lineHeight: textSize * 1.25, // Example of text lineHeight
    },
  });
};
