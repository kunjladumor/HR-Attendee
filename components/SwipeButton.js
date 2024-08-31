import React, { useState, useEffect } from "react";
import { View, Text, Animated, Alert } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "./ColorStyles";
import { SwipeStyles } from "../styles/style";

const SwipeButton = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const translateX = new Animated.Value(0);

  useEffect(() => {
    // Retrieve check-in status from AsyncStorage
    const getCheckInStatus = async () => {
      try {
        const status = await AsyncStorage.getItem("checkInStatus");
        if (status !== null) {
          setIsCheckedIn(JSON.parse(status));
        }
      } catch (error) {
        console.error("Failed to load check-in status", error);
      }
    };

    getCheckInStatus();
  }, []);

  const handleGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    { useNativeDriver: true }
  );

  const handleHandlerStateChange = async (event) => {
    if (event.nativeEvent.state === State.END) {
      if (event.nativeEvent.translationX > 100) {
        const newStatus = !isCheckedIn;
        setIsCheckedIn(newStatus);
        try {
          await AsyncStorage.setItem(
            "checkInStatus",
            JSON.stringify(newStatus)
          );
          Alert.alert(
            "Success",
            newStatus
              ? "You have checked in successfully!"
              : "You have checked out successfully!"
          );
        } catch (error) {
          console.error("Failed to save check-in status", error);
        }
      }
      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={SwipeStyles.absoluteContainer}>
      <View
        style={[
          SwipeStyles.container,
          isCheckedIn ? SwipeStyles.checkedIn : SwipeStyles.checkedOut,
        ]}
      >
        <Text style={SwipeStyles.text}>
          {isCheckedIn ? "Swipe to Check Out" : "Swipe to Check In"}
        </Text>
        <PanGestureHandler
          onGestureEvent={handleGestureEvent}
          onHandlerStateChange={handleHandlerStateChange}
        >
          <Animated.View
            style={[SwipeStyles.iconContainer, { transform: [{ translateX }] }]}
          >
            <Ionicons
              name="arrow-forward"
              size={24}
              color={!isCheckedIn ? colors.primary : colors.secondary}
            />
          </Animated.View>
        </PanGestureHandler>
      </View>
    </View>
  );
};

export default SwipeButton;
