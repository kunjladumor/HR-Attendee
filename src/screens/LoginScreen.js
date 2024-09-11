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
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomText from "@components/CustomText";
import CustomButton from "@components/ButtonComponent";
import logo from "@assets/images/logo.png";
import colors from "@styles/ColorStyles";
import Inputs from "@components/Inputs";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
  const [form, setForm] = useState({
    emailOrPhone: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    emailOrPhone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const emailOrPhoneInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleInputChange = (name, value) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleValidation = () => {
    let valid = true;
    let newErrors = {};

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

    setErrors(newErrors);
    return valid;
  };

  const validateEmailOrPhone = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    return emailRegex.test(input) || phoneRegex.test(input);
  };

  const handleLogin = useCallback(async () => {
    if (!handleValidation()) return;

    setLoading(true);
    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Here you can add your authentication logic
      if (
        (form.emailOrPhone === "kunj@cyberax.com" ||
          form.emailOrPhone === "1234567890" ||
          form.emailOrPhone === "user") &&
        form.password === "pass"
      ) {
        await AsyncStorage.setItem("isLoggedIn", "true"); // Store login status
        navigation.replace("BottomTabs"); // Navigate
      } else {
        Alert.alert("Invalid credentials");
      }
    } catch (error) {
      Alert.alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [form]);

  const handleKeyPress = (e, nextInputRef) => {
    if (e.nativeEvent.key === "Enter") {
      if (nextInputRef && nextInputRef.current) {
        nextInputRef.current.focus();
      } else {
        handleLogin();
      }
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={login.container}>
        <View style={login.innerContainer}>
          <Image source={logo} style={login.logo} />
          <CustomText style={login.title}>
            Welcome Back 👋{"\n"}
            to
            <CustomText style={login.blueText}> HR Attendee</CustomText>
          </CustomText>
          <CustomText style={login.subtitle}>
            Hello there, Login to continue
          </CustomText>

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
            placeholder="Password"
            value={form.password}
            onChangeText={(value) => handleInputChange("password", value)}
            secureTextEntry
            error={errors.password}
            onSubmitEditing={handleLogin}
            onKeyPress={(e) => handleKeyPress(e, null)}
            autoCapitalize="none"
          />

          <TouchableOpacity>
            <CustomText style={login.forgotPassword}>
              Forgot Password?
            </CustomText>
          </TouchableOpacity>

          <CustomButton
            title="Login"
            onPress={handleLogin}
            disabled={loading}
            color="primary"
            loading={loading}
            padding={10}
            borderRadius={10}
            fontfamily="PoppinsSemiBold"
          >
            {loading && (
              <ActivityIndicator color="#fff" style={{ padding: 8 }} />
            )}
          </CustomButton>

          <View style={login.registerContainer}>
            <CustomText style={login.registerText}>
              Don't have an account?
            </CustomText>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <CustomText style={login.registerLink}>Register</CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export const login = StyleSheet.create({
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
  logo: {
    width: 100,
    height: 100,
    alignSelf: "left",
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "Poppins",
  },
  subtitle: {
    fontSize: 17,
    color: "gray",
    marginBottom: 20,
    fontFamily: "Poppins",
  },
  blueText: {
    color: colors.primary,
    fontWeight: "bold",
  },
  forgotPassword: {
    color: colors.primary,
    textAlign: "right",
    marginBottom: 20,
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  registerText: {
    fontSize: 16,
    fontFamily: "Poppins",
  },
  registerLink: {
    fontSize: 16,
    color: colors.primary,
    marginLeft: 5,
    fontFamily: "Poppins",
  },
});

export default LoginScreen;
