import {
  Dimensions,
  Animated,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import CustomText from "../components/CustomText";
const { height } = Dimensions.get("window");

const AnimatedTextInput = React.forwardRef(
  (
    {
      placeholder,
      value,
      onChangeText,
      secureTextEntry,
      onSubmitEditing,
      error,
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const animatedIsFocused = useRef(new Animated.Value(value ? 1 : 0)).current;

    useEffect(() => {
      Animated.timing(animatedIsFocused, {
        toValue: isFocused || value ? 1 : 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }, [isFocused, value]);

    const labelStyle = {
      position: "absolute",
      left: 10,
      top: animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [18, -8],
      }),
      top: animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [height * 0.02, height * -0.01], // Adjusted top position based on screen height
      }),
      fontSize: animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [16, 12],
      }),
      color: animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ["#aaa", "#3185ff"],
      }),
      backgroundColor: "#fff", // Background color to break the border
      paddingHorizontal: 5, // Padding to make the background color visible
    };

    return (
      <View style={animatedInput.inputWrapper}>
        <View style={animatedInput.inputContainer}>
          <Animated.Text style={labelStyle}>{placeholder}</Animated.Text>
          <TextInput
            ref={ref}
            value={value}
            onChangeText={onChangeText}
            style={[animatedInput.input, error && animatedInput.inputError]}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            secureTextEntry={secureTextEntry}
            onSubmitEditing={onSubmitEditing}
          />
        </View>
        {error ? (
          <CustomText style={animatedInput.errorText}>{error}</CustomText>
        ) : null}
      </View>
    );
  }
);

const animatedInput = StyleSheet.create({
  errorText: {
    color: "red",
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
  },
  input: {
    height: 40,
    fontSize: 16,
    color: "#000",
  },
  inputError: {
    borderColor: "red",
  },
});

export default AnimatedTextInput;
