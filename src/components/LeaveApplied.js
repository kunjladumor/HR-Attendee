import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import { MaterialIcons } from "@expo/vector-icons"; // Ensure you have this package installed or replace it with another icon
import CustomButton from "./ButtonComponent";
import colors from "../styles/ColorStyles";

const LeaveApplied = ({ isVisible, onClose }) => {
  const navigation = useNavigation();

  const handleDonePress = () => {
    onClose(); // Close the modal
    navigation.navigate("Leaves"); // Navigate to the home screen
  };
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose} // This will close the modal when tapping outside
      style={styles.modal}
      onSwipeComplete={onClose} // Optional: close on swipe down
      swipeDirection="down" // Optional: set the swipe direction
    >
      <View style={styles.container}>
        <View style={styles.iconWrapper}>
          <MaterialIcons name="check-circle" size={64} color={colors.primary} />
        </View>
        <Text style={styles.title}>Leave Applied Successfully</Text>
        <Text style={styles.message}>
          Your Leave has been applied successfully
        </Text>
        <CustomButton
          title="Done"
          onPress={handleDonePress}
          color="primary"
          padding={10}
          margin={10}
          style={{
            width: "50%",
          }}
        />
      </View>
    </Modal>
  );
};

export default LeaveApplied;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  container: {
    backgroundColor: colors.surface,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  iconWrapper: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: "PoppinsSemiBold",
    marginBottom: 10,
    textAlign: "center",
    color: colors.text,
  },
  message: {
    fontSize: 14,
    color: colors.neutral60,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
