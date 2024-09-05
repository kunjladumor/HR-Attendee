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
  StyleSheet,
  Animated,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomText from "../components/CustomText";
import CustomButton from "../components/ButtonComponent";

// Import the logo image
import logo from "../assets/images/logo.png";

// Import the useFonts hook
import { useFonts } from "expo-font";
import AnimatedTextInput from "../components/AnimatedTextInput";
import colors from "../styles/ColorStyles";
import Inputs from "../components/Inputs";
const { height } = Dimensions.get("window");

// const AnimatedTextInput = React.forwardRef(
//   (
//     {
//       placeholder,
//       value,
//       onChangeText,
//       secureTextEntry,
//       onSubmitEditing,
//       error,
//     },
//     ref
//   ) => {
//     const [isFocused, setIsFocused] = useState(false);
//     const animatedIsFocused = useRef(new Animated.Value(value ? 1 : 0)).current;

//     useEffect(() => {
//       Animated.timing(animatedIsFocused, {
//         toValue: isFocused || value ? 1 : 0,
//         duration: 200,
//         useNativeDriver: false,
//       }).start();
//     }, [isFocused, value]);

//     const labelStyle = {
//       position: "absolute",
//       left: 10,
//       top: animatedIsFocused.interpolate({
//         inputRange: [0, 1],
//         outputRange: [18, -8],
//       }),
//       top: animatedIsFocused.interpolate({
//         inputRange: [0, 1],
//         outputRange: [height * 0.02, height * -0.01], // Adjusted top position based on screen height
//       }),
//       fontSize: animatedIsFocused.interpolate({
//         inputRange: [0, 1],
//         outputRange: [16, 12],
//       }),
//       color: animatedIsFocused.interpolate({
//         inputRange: [0, 1],
//         outputRange: ["#aaa", colors.primary],
//       }),
//       backgroundColor: "#fff", // Background color to break the border
//       paddingHorizontal: 5, // Padding to make the background color visible
//     };

//     return (
//       <View style={login.inputWrapper}>
//         <View style={login.inputContainer}>
//           <Animated.Text style={labelStyle}>{placeholder}</Animated.Text>
//           <TextInput
//             ref={ref}
//             value={value}
//             onChangeText={onChangeText}
//             style={[login.input, error && login.inputError]}
//             onFocus={() => setIsFocused(true)}
//             onBlur={() => setIsFocused(false)}
//             secureTextEntry={secureTextEntry}
//             onSubmitEditing={onSubmitEditing}
//           />
//         </View>
//         {error ? (
//           <CustomText style={login.errorText}>{error}</CustomText>
//         ) : null}
//       </View>
//     );
//   }
// );

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
    PoppinsRegular: require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    PoppinsSemibold: require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
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
        // navigation.replace("Main"); // Navigate
        navigation.replace("BottomTabs"); // Navigate
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
          {/* <AnimatedTextInput
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
          /> */}
          <Inputs
            type="text"
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            error={usernameError}
            onSubmitEditing={() => passwordInputRef.current.focus()}
          />
          <Inputs
            type="password"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            error={passwordError}
            ref={passwordInputRef}
            onSubmitEditing={handleLogin}
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

const login = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    gap: 15,
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
    fontFamily: "Poppins", // Apply custom font
  },
  subtitle: {
    fontSize: 17,
    color: "gray",
    marginBottom: 20,
    fontFamily: "Poppins", // Apply custom font
  },

  // errorText: {
  //   color: "red",
  //   fontSize: 12,
  //   marginTop: 5,
  // },
  blueText: {
    color: colors.primary,
    fontWeight: "bold",
  },
  forgotPassword: {
    color: colors.primary,
    textAlign: "right",
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    borderWidth: 1,
    borderColor: colors.neutral50,
  },
  googleIcon: {
    width: 32,
    height: 32,
    marginRight: 10,
  },
  googleButtonText: {
    color: colors.neutral70,
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 32,
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  registerText: {
    fontSize: 16,
    fontFamily: "Poppins", // Apply custom font
  },
  registerLink: {
    fontSize: 16,
    color: colors.primary,
    marginLeft: 5,
    fontFamily: "Poppins", // Apply custom font
  },

  inputWrapper: {
    marginBottom: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 8,
    borderRadius: 5,
    position: "relative",
  },
  input: {
    height: 40,
    fontSize: 16,
    color: colors.black,
  },
  inputError: {
    borderColor: "red",
  },
});

export default LoginScreen;
