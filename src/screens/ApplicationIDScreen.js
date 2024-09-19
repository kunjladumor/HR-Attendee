import React, { useState } from "react";
import {
  View,
  Alert,
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
import Inputs from "@components/Inputs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login } from "@screens/LoginScreen";
import { colors } from "react-native-elements";

const ApplicationIDScreen = () => {
  const [applicationID, setApplicationID] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleSaveApplicationID = async () => {
    setLoading(true);

    if (applicationID.trim() === "") {
      setLoading(false);
      Alert.alert("Application ID is required");
      return;
    }

    // Check if the Application ID contains only numbers
    const numericRegex = /^\d+$/;
    if (!numericRegex.test(applicationID)) {
      setLoading(false);
      Alert.alert("Application ID must be numbers only");
      return;
    }

    try {
      await AsyncStorage.setItem("applicationID", applicationID);
      await AsyncStorage.setItem("isApplicationIDEntered", "true");
      navigation.replace("Login");
    } catch (error) {
      setLoading(false);
      Alert.alert("An error occurred. Please try again.");
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
            Welcome 👋{"\n"}
            to
            <CustomText style={login.blueText}> HR Attendee</CustomText>
          </CustomText>
          <CustomText style={login.subtitle}>
            Hello there, Enter your Application ID to continue
          </CustomText>

          <Inputs
            placeholder="Application ID"
            value={applicationID}
            onChangeText={setApplicationID}
            onSubmitEditing={handleSaveApplicationID}
            type="numeric"
          />

          <CustomButton
            title="Done"
            onPress={handleSaveApplicationID}
            disabled={loading}
            color="primary"
            loading={loading}
            padding={10}
            borderRadius={10}
            fontfamily="PoppinsSemiBold"
          >
            {loading && (
              <ActivityIndicator color={colors.white} style={{ padding: 8 }} />
            )}
          </CustomButton>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ApplicationIDScreen;
