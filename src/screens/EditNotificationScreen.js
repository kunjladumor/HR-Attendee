import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  Modal,
} from "react-native";
import Inputs, { InputStyles } from "@components/Inputs"; // Import the custom Inputs component
import CustomButton from "@components/ButtonComponent"; // Import the CustomButton component
import CustomText from "@components/CustomText"; // Import the CustomText component
import colors from "@styles/ColorStyles"; // Import the colors object
import { Ionicons } from "@expo/vector-icons";

import { CommonStyles } from "../styles/style"; // Import common styles
import { Icon } from "react-native-elements";

const EditNotificationScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = () => {
    // Validate inputs
    const newErrors = {};
    if (!title) newErrors.title = "Title is required";
    if (!type) newErrors.type = "Type is required";
    if (!content) newErrors.content = "Content is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle form submission logic here
    console.log("Notification Edited:", { title, type, summary, content });

    // Navigate back or to another screen if needed
    navigation.navigate("Team");
  };

  return (
    <ScrollView contentContainerStyle={CommonStyles.content}>
      <View
        style={[
          CommonStyles.row,
          {
            marginBottom: 10,
          },
        ]}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back-outline"
            size={24}
            color={colors.neutral90}
          />
        </TouchableOpacity>
        <CustomText
          style={[CommonStyles.header, { fontSize: 24, marginLeft: 10 }]}
        >
          Edit Notification
        </CustomText>
        <View style={{ width: 24 }} />
      </View>

      <Inputs
        type="text"
        placeholder="Notification Title"
        value={title}
        onChangeText={setTitle}
        error={errors.title}
      />
      <TouchableOpacity
        style={styles.input}
        onPress={() => setModalVisible(true)}
      >
        <Text style={[styles.inputText, type && styles.selectedInputText]}>
          {type ? type : "Select Type"}
        </Text>
      </TouchableOpacity>
      {errors.type ? (
        <CustomText style={InputStyles.errorText}>{errors.type}</CustomText>
      ) : null}
      <Inputs
        type="text"
        placeholder="Summary"
        value={summary}
        onChangeText={setSummary}
      />
      <Inputs
        type="textarea"
        placeholder="Content"
        value={content}
        onChangeText={setContent}
        error={errors.content}
      />
      <CustomButton
        title="Send Notification"
        color="primary"
        onPress={handleSubmit}
        padding={10}
        iconName="send"
        iconSize={20}
        iconColor={colors.white}
      />
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            {[
              { label: "Warning", icon: "alert-outline", color: colors.text },
              {
                label: "Notice",
                icon: "information-outline",
                color: colors.text,
              },
              { label: "Reminder", icon: "bell-outline", color: colors.text },
            ].map((option) => (
              <TouchableOpacity
                key={option.label}
                style={styles.option}
                onPress={() => {
                  setType(option.label);
                  setModalVisible(false);
                }}
              >
                <Icon
                  name={option.icon}
                  type="material-community"
                  color={option.color}
                  size={24}
                  style={styles.optionIcon}
                />
                <Text style={styles.optionText}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: colors.background,
    padding: 16,
    fontSize: 16,
    color: colors.text,
  },
  inputText: {
    fontSize: 16,
    fontFamily: "Poppins",
    marginBottom: -3,
    color: colors.neutral50,
  },
  selectedInputText: {
    color: colors.text,
    fontFamily: "Poppins",
    fontSize: 16,
    marginBottom: -3,
  },
  errorText: {
    color: colors.error,
    fontSize: 12,
    marginTop: -15,
    marginBottom: 15,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    gap: 10,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  optionIcon: {
    marginRight: 10,
  },
  optionText: {
    fontSize: 18,
    fontFamily: "PoppinsMedium",
    color: colors.text,
  },
});

export default EditNotificationScreen;
