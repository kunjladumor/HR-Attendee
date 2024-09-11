import React, { useState, useRef, useCallback } from "react";
import {
  View,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomText from "@components/CustomText";
import CustomButton from "@components/ButtonComponent";
import logo from "@assets/images/logo.png";
import { login } from "@screens/LoginScreen";
import Inputs from "@components/Inputs";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RegisterScreen = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    emailOrPhone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    emailOrPhone: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const firstNameInputRef = useRef(null);
  const lastNameInputRef = useRef(null);
  const emailOrPhoneInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const confirmPasswordInputRef = useRef(null);

  const handleInputChange = (name, value) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleValidation = () => {
    let valid = true;
    let newErrors = {};

    if (form.firstName.trim() === "") {
      newErrors.firstName = "First name is required";
      valid = false;
    }

    if (form.lastName.trim() === "") {
      newErrors.lastName = "Last name is required";
      valid = false;
    }

    if (form.emailOrPhone.trim() === "") {
      newErrors.emailOrPhone = "Email or phone number is required";
      valid = false;
    } else if (!validateEmailOrPhone(form.emailOrPhone)) {
      newErrors.emailOrPhone = "Invalid email or phone number";
      valid = false;
    }

    if (form.password.trim() === "") {
      newErrors.password = "Password is required";
      valid = false;
    }

    if (form.confirmPassword.trim() === "") {
      newErrors.confirmPassword = "Confirm password is required";
      valid = false;
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const validateEmailOrPhone = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    return emailRegex.test(input) || phoneRegex.test(input);
  };

  const handleRegister = useCallback(async () => {
    if (!handleValidation()) return;

    setLoading(true);
    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Here you can add your registration logic
      await AsyncStorage.setItem("isLoggedIn", "true"); // Store login status
      navigation.replace("BottomTabs"); // Navigate
    } catch (error) {
      Alert.alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [form]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={login.container}>
        <View style={login.innerContainer}>
          <Image source={logo} style={login.logo} />
          <CustomText style={login.title}>
            Welcome 👋{"\n"}
            to
            <CustomText style={login.blueText}> HR Attendee</CustomText>
          </CustomText>
          <CustomText style={login.subtitle}>
            Hello there, Register to continue
          </CustomText>

          <Inputs
            ref={firstNameInputRef}
            type="text"
            placeholder="First Name"
            value={form.firstName}
            onChangeText={(value) => handleInputChange("firstName", value)}
            error={errors.firstName}
            onSubmitEditing={() => lastNameInputRef.current.focus()}
            onKeyPress={(e) => handleKeyPress(e, lastNameInputRef)}
            autoCapitalize="none"
          />
          <Inputs
            ref={lastNameInputRef}
            type="text"
            placeholder="Last Name"
            value={form.lastName}
            onChangeText={(value) => handleInputChange("lastName", value)}
            error={errors.lastName}
            onSubmitEditing={() => emailOrPhoneInputRef.current.focus()}
            onKeyPress={(e) => handleKeyPress(e, emailOrPhoneInputRef)}
            autoCapitalize="none"
          />
          <Inputs
            ref={emailOrPhoneInputRef}
            type="text"
            placeholder="Email or Phone Number"
            value={form.emailOrPhone}
            onChangeText={(value) => handleInputChange("emailOrPhone", value)}
            error={errors.emailOrPhone}
            onSubmitEditing={() => passwordInputRef.current.focus()}
            onKeyPress={(e) => handleKeyPress(e, passwordInputRef)}
            autoCapitalize="none"
          />
          <Inputs
            ref={passwordInputRef}
            type="password"
            placeholder="Set Password"
            value={form.password}
            onChangeText={(value) => handleInputChange("password", value)}
            secureTextEntry
            error={errors.password}
            onSubmitEditing={() => confirmPasswordInputRef.current.focus()}
            onKeyPress={(e) => handleKeyPress(e, confirmPasswordInputRef)}
            autoCapitalize="none"
          />
          <Inputs
            ref={confirmPasswordInputRef}
            type="password"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChangeText={(value) =>
              handleInputChange("confirmPassword", value)
            }
            secureTextEntry
            error={errors.confirmPassword}
            onSubmitEditing={handleRegister}
            onKeyPress={(e) => handleKeyPress(e, null)}
            autoCapitalize="none"
          />

          <TouchableOpacity>
            <CustomText style={login.forgotPassword}>
              Forgot Password?
            </CustomText>
          </TouchableOpacity>

          <CustomButton
            title="Register"
            onPress={handleRegister}
            disabled={loading}
            color="primary"
            loading={loading}
            padding={10}
            borderRadius={10}
            fontfamily="PoppinsSemiBold"
          >
            {loading && <ActivityIndicator color="#fff" size={"large"} />}
          </CustomButton>

          <View style={login.registerContainer}>
            <CustomText style={login.registerText}>
              Already have an account?
            </CustomText>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <CustomText style={login.registerLink}>Login</CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default RegisterScreen;
