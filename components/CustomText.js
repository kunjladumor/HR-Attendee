import React from "react";
import { Text } from "react-native";
import { CommonStyles } from "../styles/style";

const CustomText = ({ style, ...props }) => {
  return (
    <Text
      style={[CommonStyles.poppinsFont, CommonStyles.customText, style]}
      {...props}
    />
  );
};

export default CustomText;
