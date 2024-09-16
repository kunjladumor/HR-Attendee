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
import { useNavigation, useRoute } from "@react-navigation/native";
import CustomText from "@components/CustomText";
import CustomButton from "@components/ButtonComponent";
import logo from "@assets/images/logo.png";
import { login } from "@screens/LoginScreen";
import Inputs from "@components/Inputs";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SetupScreen = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    emailOrPhone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const { userName } = route.params; // Retrieve the user's name from the route parameters
  const inputRefs = useRef({});

  const handleInputChange = (name, value) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleValidation = () => {
    let valid = true;
    let newErrors = {};

    const requiredFields = [
      "firstName",
      "lastName",
      "emailOrPhone",
      "password",
      "confirmPassword",
    ];

    requiredFields.forEach((field) => {
      if (form[field].trim() === "") {
        const fieldName = field
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase());
        newErrors[field] = `${fieldName} is required`;
        valid = false;
      }
    });

    if (
      form.emailOrPhone.trim() !== "" &&
      !validateEmailOrPhone(form.emailOrPhone)
    ) {
      newErrors.emailOrPhone = "Invalid email or phone number";
      valid = false;
    }

    if (form.password !== form.confirmPassword) {
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

  const handleKeyPress = (e, nextInputName) => {
    if (e.nativeEvent.key === "Enter" && nextInputName) {
      inputRefs.current[nextInputName].focus();
    }
  };

  const inputFields = [
    { name: "password", placeholder: "Set Password", type: "password" },
    {
      name: "confirmPassword",
      placeholder: "Confirm Password",
      type: "password",
    },
  ];

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={login.container}>
        <View style={login.innerContainer}>
          <Image source={logo} style={login.logo} />
          <CustomText style={login.title}>
            Welcome
            <CustomText style={login.blueText}> {userName} 👋</CustomText>
          </CustomText>
          <CustomText style={login.subtitle}>
            Set password to continue
          </CustomText>

          {inputFields.map((field, index) => (
            <Inputs
              key={field.name}
              ref={(ref) => (inputRefs.current[field.name] = ref)}
              type={field.type}
              placeholder={field.placeholder}
              value={form[field.name]}
              onChangeText={(value) => handleInputChange(field.name, value)}
              error={errors[field.name]}
              onSubmitEditing={() => {
                const nextField = inputFields[index + 1];
                if (nextField) {
                  inputRefs.current[nextField.name].focus();
                } else {
                  handleRegister();
                }
              }}
              onKeyPress={(e) =>
                handleKeyPress(e, inputFields[index + 1]?.name)
              }
              autoCapitalize="none"
            />
          ))}

          <CustomButton
            title="Set Password"
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

          <View style={login.SetupContainer}>
            <CustomText style={login.SetupText}>
              Already have an account?
            </CustomText>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <CustomText style={login.SetupLink}>Login</CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SetupScreen;
