// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, Animated, Alert } from "react-native";
// import { PanGestureHandler, State } from "react-native-gesture-handler";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Ionicons } from "@expo/vector-icons"; // Ensure you have expo-vector-icons installed
// import colors from "./Colors/ColorStyles";

// const SwipeButton = () => {
//   const [isCheckedIn, setIsCheckedIn] = useState(false);
//   const translateX = new Animated.Value(0);

//   useEffect(() => {
//     // Retrieve check-in status from AsyncStorage
//     const getCheckInStatus = async () => {
//       try {
//         const status = await AsyncStorage.getItem("checkInStatus");
//         if (status !== null) {
//           setIsCheckedIn(JSON.parse(status));
//         }
//       } catch (error) {
//         console.error("Failed to load check-in status", error);
//       }
//     };

//     getCheckInStatus();
//   }, []);

//   const handleGestureEvent = Animated.event(
//     [{ nativeEvent: { translationX: translateX } }],
//     { useNativeDriver: true }
//   );

//   const handleHandlerStateChange = async (event) => {
//     if (event.nativeEvent.state === State.END) {
//       if (event.nativeEvent.translationX > 100) {
//         const newStatus = !isCheckedIn;
//         setIsCheckedIn(newStatus);
//         try {
//           await AsyncStorage.setItem(
//             "checkInStatus",
//             JSON.stringify(newStatus)
//           );
//           Alert.alert(
//             "Success",
//             newStatus
//               ? "You have checked in successfully!"
//               : "You have checked out successfully!"
//           );
//         } catch (error) {
//           console.error("Failed to save check-in status", error);
//         }
//       }
//       Animated.spring(translateX, {
//         toValue: 0,
//         useNativeDriver: true,
//       }).start();
//     }
//   };

//   return (
//     <View
//       style={[
//         SwipeStyles.container,
//         isCheckedIn ? SwipeStyles.checkedIn : SwipeStyles.checkedOut,
//       ]}
//     >
//       <Text style={SwipeStyles.text}>
//         {isCheckedIn ? "Swipe to Check Out" : "Swipe to Check In"}
//       </Text>
//       <PanGestureHandler
//         onGestureEvent={handleGestureEvent}
//         onHandlerStateChange={handleHandlerStateChange}
//       >
//         <Animated.View
//           style={[SwipeStyles.iconContainer, { transform: [{ translateX }] }]}
//         >
//           <Ionicons name="arrow-forward" size={24} color="#2980b9" />
//         </Animated.View>
//       </PanGestureHandler>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     width: "100%",
//     height: 50,
//     borderRadius: 5,
//     justifyContent: "center",
//     overflow: "hidden",
//     position: "relative",
//   },
//   text: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//     position: "absolute",
//     alignSelf: "center",
//   },
//   iconContainer: {
//     width: 40,
//     height: 40,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 5,
//     position: "absolute",
//     left: 5,
//     backgroundColor: "#fff", // White background for the icon
//   },
//   checkedIn: {
//     backgroundColor: colors.secondary, // Red color for checked-in status
//   },
//   checkedOut: {
//     backgroundColor: colors.primary, // Blue color for checked-out status
//   },
// });

// export default SwipeButton;

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Animated, Alert } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons"; // Ensure you have expo-vector-icons installed
import colors from "./Colors/ColorStyles";
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
