import React, { useState } from "react";
import {
  View,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomText from "@components/CustomText";
import CustomButton from "@components/ButtonComponent";
import Inputs from "@components/Inputs";
import colors from "@styles/ColorStyles";
import logo from "@assets/images/logo.png";
import { login } from "@screens/LoginScreen";

const ForgotPasswordScreen = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigation = useNavigation();

  const handleInputChange = (value) => {
    setEmailOrPhone(value);
  };

  const handleValidation = () => {
    if (emailOrPhone.trim() === "") {
      setError("Email or Phone number is required");
      return false;
    }
    if (!validateEmailOrPhone(emailOrPhone)) {
      setError("Invalid email or phone number");
      return false;
    }
    setError("");
    return true;
  };

  const validateEmailOrPhone = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    return emailRegex.test(input) || phoneRegex.test(input);
  };

  const handleResetPassword = async () => {
    if (!handleValidation()) return;

    setLoading(true);
    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      Alert.alert("Password reset link sent to your email or phone number");
      navigation.goBack();
    } catch (error) {
      Alert.alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.innerContainer}>
          <Image source={logo} style={login.logo} />

          <CustomText style={styles.title}>Forgot Password</CustomText>
          <CustomText style={styles.subtitle}>
            Enter your email or phone number to reset your password
          </CustomText>

          <Inputs
            type="text"
            placeholder="Email or Phone Number"
            value={emailOrPhone}
            onChangeText={handleInputChange}
            error={error}
            autoCapitalize="none"
          />

          <CustomButton
            title="Reset Password"
            onPress={handleResetPassword}
            disabled={loading}
            color="primary"
            loading={loading}
            padding={10}
            borderRadius={10}
            fontfamily="PoppinsSemiBold"
          >
            {loading && <ActivityIndicator color="#fff" />}
          </CustomButton>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CustomText style={styles.backToLogin}>Back to Login</CustomText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    gap: 0,
  },
  title: {
    fontSize: 28,
    fontFamily: "PoppinsSemiBold",
  },
  subtitle: {
    fontSize: 16,
    color: colors.neutral50,
    marginBottom: 20,
    fontFamily: "PoppinsMedium",
  },
  backToLogin: {
    color: colors.primary,
    textAlign: "center",
    marginTop: 20,
    fontFamily: "Poppins",
  },
});

export default ForgotPasswordScreen;
