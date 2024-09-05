import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Alert,
  Dimensions,
} from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../styles/ColorStyles";
import * as Location from "expo-location";

const SwipeButton = ({ setIsLoading }) => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const translateX = useRef(new Animated.Value(0)).current;
  const containerWidth = Dimensions.get("window").width * 0.9; // 90% of screen width
  const iconWidth = 40; // Width of the icon container
  const maxTranslation = containerWidth - iconWidth - 10; // Maximum translation value

  useEffect(() => {
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

  const resetSwipeButton = () => {
    Animated.spring(translateX, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const handleGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    { useNativeDriver: true }
  );

  const handleHandlerStateChange = async (event) => {
    if (event.nativeEvent.state === State.END) {
      const translationX = event.nativeEvent.translationX;

      // Check if the button has been swiped beyond the allowed range
      if (translationX < maxTranslation) {
        resetSwipeButton();
        return;
      }

      // Show loader
      setIsLoading(true);

      // Request location permissions
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setIsLoading(false); // Hide loader
        Alert.alert(
          "Permission Denied",
          "Permission to access location was denied. Please enable location services to use this feature."
        );
        resetSwipeButton();
        return;
      }

      try {
        // Fetch user's location
        let location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;

        // Handle check-in or check-out logic here
        setIsCheckedIn(!isCheckedIn);
        await AsyncStorage.setItem(
          "checkInStatus",
          JSON.stringify(!isCheckedIn)
        );
        console.log(
          "Location",
          `Latitude: ${latitude}, Longitude: ${longitude}`
        );
        Alert.alert(
          "Location",
          `Latitude: ${latitude}, Longitude: ${longitude}`
        );
      } catch (error) {
        console.error("Failed to fetch location", error);
        Alert.alert("Error", "Failed to fetch location");
      }

      // Hide loader
      setIsLoading(false);
      resetSwipeButton();
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
            style={[
              SwipeStyles.iconContainer,
              {
                transform: [
                  {
                    translateX: translateX.interpolate({
                      inputRange: [0, maxTranslation],
                      outputRange: [0, maxTranslation],
                      extrapolate: "clamp",
                    }),
                  },
                ],
              },
            ]}
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

const SwipeStyles = StyleSheet.create({
  absoluteContainer: {
    position: "absolute",
    bottom: 90, // Adjust this value based on the height of your main tabs
    left: 0,
    right: 0,
    alignItems: "center",
  },
  container: {
    width: "90%",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    position: "absolute",
    alignSelf: "center",
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    position: "absolute",
    left: 5,
    backgroundColor: "#fff", // White background for the icon
  },
  checkedIn: {
    backgroundColor: colors.secondary, // Red color for checked-in status
  },
  checkedOut: {
    backgroundColor: colors.primary, // Blue color for checked-out status
  },
});

export default SwipeButton;
