import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Animated,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomText from "../components/CustomText/CustomText";
import CustomButton from "../components/Buttons/ButtonComponent";
import { login } from "../styles/LoginStyles"; // Import the styles object

// Import the logo image
import logo from "../assets/images/logo.png";

// Import the useFonts hook
import { useFonts } from "expo-font";

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
      <View style={login.inputWrapper}>
        <View style={login.inputContainer}>
          <Animated.Text style={labelStyle}>{placeholder}</Animated.Text>
          <TextInput
            ref={ref}
            value={value}
            onChangeText={onChangeText}
            style={[login.input, error && login.inputError]}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            secureTextEntry={secureTextEntry}
            onSubmitEditing={onSubmitEditing}
          />
        </View>
        {error ? (
          <CustomText style={login.errorText}>{error}</CustomText>
        ) : null}
      </View>
    );
  }
);

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const passwordInputRef = useRef(null); // Reference to the password input field

  const [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
  });

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const validateInputs = () => {
    let valid = true;

    if (username.trim() === "") {
      setUsernameError("Username is required");
      valid = false;
    } else {
      setUsernameError("");
    }

    if (password.trim() === "") {
      setPasswordError("Password is required");
      valid = false;
    } else {
      setPasswordError("");
    }

    return valid;
  };

  const handleLogin = useCallback(async () => {
    if (!validateInputs()) return;

    setLoading(true);
    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Here you can add your authentication logic
      if (username === "user" && password === "pass") {
        navigation.replace("Main"); // Navigate
      } else {
        Alert.alert("Invalid credentials");
      }
    } catch (error) {
      Alert.alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [username, password]);

  const handleGoogleLogin = () => {
    // Add your Google login logic here
    Alert.alert("Google login not implemented yet");
  };

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

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
          <AnimatedTextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            onSubmitEditing={() => passwordInputRef.current.focus()}
            error={usernameError}
          />
          <AnimatedTextInput
            ref={passwordInputRef}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            onSubmitEditing={handleLogin}
            error={passwordError}
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
            padding={12}
            borderRadius={10}
          >
            {loading && <ActivityIndicator color="#fff" />}
          </CustomButton>

          <CustomButton
            title="Google"
            onPress={handleGoogleLogin}
            color="neutral70"
            outlined={true}
            fontweight="bold"
            borderRadius={10}
            textColor="neutral70" // Set custom text color
            gap={0}
          >
            <Image
              source={require("../assets/images/google_logo.png")}
              style={login.googleIcon}
            />
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

export default LoginScreen;
