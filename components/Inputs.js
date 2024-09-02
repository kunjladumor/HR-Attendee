import React, { useState, useEffect, useRef } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import CustomText from "./CustomText";
import colors from "../styles/ColorStyles"; // Assuming you have a colors file

const Inputs = ({
  type = "text",
  placeholder,
  value,
  onChangeText,
  options = [],
  error,
  id, // Unique identifier for each input
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(type === "picker");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const animatedIsFocused = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: isFocused || value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  useEffect(() => {
    if (type === "picker" && value === "" && options.length > 0) {
      onChangeText(options[0].value);
    }
  }, [type, value, options, onChangeText]);

  const handleDatePickerPress = () => {
    setShowDatePicker(true);
  };

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      onChangeText(selectedDate.toISOString().split("T")[0]); // Format date as YYYY-MM-DD
    }
  };

  const renderInput = () => {
    switch (type) {
      case "textarea":
        return (
          <TextInput
            {...rest}
            multiline={true}
            numberOfLines={4}
            style={[
              InputStyles.input,
              InputStyles.textarea,
              error && InputStyles.inputError,
            ]}
            value={value}
            onChangeText={onChangeText}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        );
      case "date":
        return (
          <>
            <TouchableOpacity
              onPress={handleDatePickerPress}
              style={InputStyles.touchable}
            >
              <Text
                style={[
                  InputStyles.input,
                  error && InputStyles.inputError,
                  {
                    marginTop: 10,
                    marginBottom: -10,
                  },
                ]}
              >
                {value}
              </Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={value ? new Date(value) : new Date()}
                mode="date"
                display="default"
                onChange={onDateChange}
              />
            )}
          </>
        );
      case "number":
        return (
          <TextInput
            {...rest}
            style={[InputStyles.input, error && InputStyles.inputError]}
            keyboardType="numeric"
            value={value}
            onChangeText={onChangeText}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        );
      case "picker":
        return (
          <Picker
            selectedValue={value}
            onValueChange={onChangeText}
            style={[InputStyles.input, error && InputStyles.inputError]}
            {...rest}
          >
            {options.map((option, index) => (
              <Picker.Item
                key={index}
                label={option.label}
                value={option.value}
              />
            ))}
          </Picker>
        );
      default:
        return (
          <TextInput
            {...rest}
            style={[InputStyles.input, error && InputStyles.inputError]}
            value={value}
            onChangeText={onChangeText}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        );
    }
  };

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
    color: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: ["#aaa", "#3185ff"],
    }),
    backgroundColor: "#fff",
    paddingHorizontal: 5,
  };

  return (
    <View style={InputStyles.inputWrapper}>
      <View style={InputStyles.inputContainer}>
        <Animated.Text style={labelStyle}>{placeholder}</Animated.Text>
        {renderInput()}
      </View>
      {error ? (
        <CustomText style={InputStyles.errorText}>{error}</CustomText>
      ) : null}
    </View>
  );
};

const InputStyles = StyleSheet.create({
  errorText: {
    color: colors.secondary,
    fontSize: 12,
    marginTop: 5,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#3185ff",
    padding: 8,
    borderRadius: 5,
    position: "relative",
    justifyContent: "center", // Center content vertically
  },
  input: {
    height: 40,
    fontSize: 16,
    color: colors.black,
  },
  inputError: {
    borderColor: colors.secondary,
  },
  touchable: {
    justifyContent: "center",
  },
  pickerContainer: {
    justifyContent: "center",
  },
  placeholderText: {
    color: "#aaa", // Placeholder text color
  },
});

export default Inputs;
