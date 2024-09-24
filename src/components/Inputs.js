import React, { useState, useEffect, useRef, forwardRef } from "react";
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
import colors from "@styles/ColorStyles"; // Assuming you have a colors file

const Inputs = forwardRef(
  (
    {
      type = "text",
      placeholder,
      value,
      onChangeText,
      options = [],
      error,
      id, // Unique identifier for each input
      defaultValue = "", // Default value prop
      ...rest
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(type === "picker");
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [inputValue, setInputValue] = useState(value || defaultValue); // Initialize with value or defaultValue
    const animatedIsFocused = useRef(
      new Animated.Value(inputValue ? 1 : 0)
    ).current;

    useEffect(() => {
      Animated.timing(animatedIsFocused, {
        toValue: isFocused || inputValue ? 1 : 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }, [isFocused, inputValue]);

    useEffect(() => {
      if (type === "picker" && inputValue === "" && options.length > 0) {
        setInputValue(options[0].value);
        onChangeText(options[0].value);
      }
    }, [type, inputValue, options, onChangeText]);

    const handleDatePickerPress = () => {
      setShowDatePicker(true);
    };

    const onDateChange = (event, selectedDate) => {
      setShowDatePicker(false);
      if (selectedDate) {
        const formattedDate = selectedDate.toISOString().split("T")[0];
        setInputValue(formattedDate);
        onChangeText(formattedDate);
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
              value={inputValue}
              onChangeText={(text) => {
                setInputValue(text);
                onChangeText(text);
              }}
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
                  {inputValue}
                </Text>
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={inputValue ? new Date(inputValue) : new Date()}
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
              value={inputValue}
              onChangeText={(text) => {
                setInputValue(text);
                onChangeText(text);
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          );
        case "picker":
          return (
            <Picker
              selectedValue={inputValue}
              onValueChange={(itemValue) => {
                setInputValue(itemValue);
                onChangeText(itemValue);
              }}
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

        case "password":
          return (
            <TextInput
              {...rest}
              ref={ref} // Forward the ref here
              style={[InputStyles.input, error && InputStyles.inputError]}
              value={inputValue}
              onChangeText={(text) => {
                setInputValue(text);
                onChangeText(text);
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              secureTextEntry={true}
            />
          );
        case "numeric":
          return (
            <TextInput
              {...rest}
              ref={ref} // Forward the ref here
              style={[InputStyles.input, error && InputStyles.inputError]}
              value={inputValue}
              onChangeText={(text) => {
                setInputValue(text);
                onChangeText(text);
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              keyboardType="numeric"
            />
          );
        default:
          return (
            <TextInput
              {...rest}
              ref={ref} // Forward the ref here
              style={[InputStyles.input, error && InputStyles.inputError]}
              value={inputValue}
              onChangeText={(text) => {
                setInputValue(text);
                onChangeText(text);
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          );
      }
    };

    const labelStyle = {
      position: "absolute",
      left: 10,
      fontFamily: "Poppins",
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
        outputRange: [colors.neutral40, colors.primary],
      }),
      backgroundColor: colors.background,
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
  }
);

export const InputStyles = StyleSheet.create({
  errorText: {
    color: colors.secondary,
    fontSize: 12,
    marginTop: 5,
  },
  inputWrapper: {
    marginVertical: 10,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 8,
    borderRadius: 5,
    position: "relative",
    justifyContent: "center", // Center content vertically
  },
  input: {
    height: 40,
    fontSize: 16,
    paddingHorizontal: 10,
    color: colors.text,
    fontFamily: "Poppins", // Change this to your desired font
  },
  textarea: {
    height: 100,
    textAlignVertical: "top",
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
    color: colors.primary, // Placeholder text color
    fontFamily: "Poppins", // Change this to your desired font
  },
});

export default Inputs;
