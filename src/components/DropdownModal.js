import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Animated } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import PropTypes from "prop-types";
import colors from "../styles/ColorStyles"; // Assuming you have a colors file

const DropdownModal = ({
  data,
  labelField,
  valueField,
  placeholder = "Select an item",
  selectedValue,
  onValueChange,
  style = {},
  dropdownStyle = {},
  placeholderStyle = {},
  selectedTextStyle = {},
  itemTextStyle = {},
  itemContainerStyle = {},
  selectedItemContainerStyle = {}, // New prop for selected item container style
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedIsFocused = useRef(
    new Animated.Value(selectedValue ? 1 : 0)
  ).current;

  useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: isFocused || selectedValue ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, selectedValue]);

  const labelStyle = {
    position: "absolute",
    left: 10,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [18, -10],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: isFocused ? colors.primary : colors.neutral60,
    backgroundColor: colors.background,
    paddingHorizontal: 5,
    zIndex: 1, // Ensure the label is on top
  };

  return (
    <View style={[styles.container, style]}>
      <Dropdown
        data={data}
        labelField={labelField}
        valueField={valueField}
        placeholder=""
        value={selectedValue}
        onChange={(item) => {
          onValueChange(item);
          setIsFocused(false);
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[
          styles.dropdown,
          dropdownStyle,
          isFocused && { borderColor: colors.primary },
        ]}
        placeholderStyle={[
          styles.placeholderStyle,
          placeholderStyle,
          { color: isFocused ? colors.primary : colors.neutral60 },
        ]}
        selectedTextStyle={[styles.selectedTextStyle, selectedTextStyle]}
        itemTextStyle={[styles.itemTextStyle, itemTextStyle]}
        itemContainerStyle={[styles.itemContainerStyle, itemContainerStyle]}
        selectedItemContainerStyle={[
          styles.selectedItemContainerStyle,
          selectedItemContainerStyle,
        ]}
        activeColor={colors.surface}
      />
      <Animated.Text style={labelStyle}>{placeholder}</Animated.Text>
    </View>
  );
};

DropdownModal.propTypes = {
  data: PropTypes.array.isRequired,
  labelField: PropTypes.string.isRequired,
  valueField: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  selectedValue: PropTypes.any,
  onValueChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  dropdownStyle: PropTypes.object,
  placeholderStyle: PropTypes.object,
  selectedTextStyle: PropTypes.object,
  itemTextStyle: PropTypes.object,
  itemContainerStyle: PropTypes.object,
  selectedItemContainerStyle: PropTypes.object, // Add the new prop type
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  dropdown: {
    paddingVertical: 16,
    borderColor: colors.neutral60, // Default border color
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
    color: colors.neutral50,
    numberOfLines: 1,
    ellipsizeMode: "tail",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: colors.text,
    numberOfLines: 1,
    ellipsizeMode: "tail",
  },
  itemTextStyle: {
    fontSize: 16,
    color: colors.text,
    numberOfLines: 1,
    ellipsizeMode: "tail",
  },
  itemContainerStyle: {
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral20,
  },
  selectedItemContainerStyle: {
    backgroundColor: colors.surface, // Default background color for selected item
  },
});

export default DropdownModal;
