import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleResetPassword = () => {
    if (email.trim() === "") {
      setEmailError("Email is required");
      return;
    } else {
      setEmailError("");
    }

    // Simulate an API call
    setTimeout(() => {
      alert("Password reset link sent to your email");
      navigation.goBack();
    }, 2000);
  };

  return (
    <ImageBackground
      source={{ uri: "https://example.com/background.jpg" }}
      style={styles.background}
    >
      <View style={styles.container}>
        <CustomText style={styles.title}>Forgot Password</CustomText>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            placeholderTextColor="#666"
          />
        </View>
        {emailError ? (
          <CustomText style={styles.errorText}>{emailError}</CustomText>
        ) : null}
        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <CustomText style={styles.buttonText}>Reset Password</CustomText>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: "#333",
    fontWeight: "bold",
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 25,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#e6e6e6",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: "#333",
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "#007bff",
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  errorText: {
    color: "red",
    alignSelf: "flex-start",
    marginLeft: 10,
    marginBottom: 10,
  },
});
