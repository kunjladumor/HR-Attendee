import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import CustomText from "@components/CustomText";
import colors from "@styles/ColorStyles"; // Import the colors object

const CustomCheckbox = ({ checked, onPress, label }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View
        style={checked ? styles.customCheckedIcon : styles.customUncheckedIcon}
      >
        <CustomText style={styles.customCheckmark}>
          {checked ? "✓" : "✗"}
        </CustomText>
      </View>
      {label && <CustomText style={styles.label}>{label}</CustomText>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  customCheckedIcon: {
    width: 24,
    height: 24,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  customUncheckedIcon: {
    width: 24,
    height: 24,
    backgroundColor: colors.background,
    borderColor: colors.neutral50,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  customCheckmark: {
    color: colors.background,
    fontSize: 16,
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
    color: colors.text,
  },
});

export default CustomCheckbox;
