import React, { useState, useRef } from "react";
import { View, ScrollView, Text, Modal, StyleSheet } from "react-native";
import CustomText from "@components/CustomText";
import { CommonStyles } from "@styles/style";
import CustomButton from "@components/ButtonComponent";
import Inputs from "@components/Inputs";
import colors from "@styles/ColorStyles";
import { Ionicons } from "@expo/vector-icons";

const ChangePasswordScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const newPasswordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.oldPassword) newErrors.oldPassword = "Old password is required.";
    if (!form.newPassword) {
      newErrors.newPassword = "New password is required.";
    } else if (!passwordRegex.test(form.newPassword)) {
      newErrors.newPassword =
        "Password must be at least 8 characters long, contain an uppercase letter, a number, and a special character.";
    }
    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required.";
    } else if (form.newPassword !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    return newErrors;
  };

  const handleSave = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
      navigation.goBack();
    }, 1250);
  };

  return (
    <ScrollView contentContainerStyle={CommonStyles.container}>
      <View style={CommonStyles.content}>
        <View style={CommonStyles.row} styles={{ alignItems: "center" }}>
          <Ionicons
            name="chevron-back-outline"
            size={24}
            style={{ marginRight: 10 }}
            onPress={() => navigation.goBack()}
          />
          <CustomText style={CommonStyles.header}>Change Password</CustomText>
        </View>
        {["oldPassword", "newPassword", "confirmPassword"].map(
          (field, index) => (
            <View key={field}>
              <Inputs
                label={
                  field === "oldPassword"
                    ? "Old Password"
                    : field === "newPassword"
                      ? "New Password"
                      : "Confirm Password"
                }
                placeholder={`Enter your ${field.replace(/([A-Z])/g, " $1").toLowerCase()}`}
                value={form[field]}
                onChangeText={(value) => handleChange(field, value)}
                secureTextEntry
                ref={
                  field === "newPassword"
                    ? newPasswordRef
                    : field === "confirmPassword"
                      ? confirmPasswordRef
                      : null
                }
                onSubmitEditing={() => {
                  if (field === "oldPassword") newPasswordRef.current.focus();
                  else if (field === "newPassword")
                    confirmPasswordRef.current.focus();
                  else handleSave();
                }}
                returnKeyType={field === "confirmPassword" ? "done" : "next"}
                autoCapitalize="none"
              />
              {errors[field] && (
                <Text style={styles.errorText}>{errors[field]}</Text>
              )}
            </View>
          )
        )}
        <CustomButton
          title="Save"
          onPress={handleSave}
          color="primary"
          padding={10}
          iconName="save-outline"
          iconSize={20}
          iconColor={colors.white}
          style={{ alignSelf: "stretch" }}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <CustomButton
                onPress={() => {
                  setModalVisible(false);
                  navigation.goBack();
                }}
                color="primary"
                padding={10}
                iconName="checkmark-outline"
                iconSize={50}
                borderRadius={50}
                iconColor={colors.white}
                style={{ alignSelf: "center" }}
              />
              <Text style={styles.modalText}>
                Password changed successfully!
              </Text>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "end",
    alignItems: "stretch",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    backgroundColor: colors.surface,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 35,
    paddingBottom: 50,

    marginTop: "auto",
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  errorText: {
    color: colors.secondary,
    marginTop: -5,
    lineHeight: 20,
    fontFamily: "Poppins",
  },
  modalText: {
    marginTop: 15,
    fontFamily: "PoppinsMedium",
    textAlign: "center",
    fontSize: 18,
    color: colors.text,
  },
});

export default ChangePasswordScreen;
