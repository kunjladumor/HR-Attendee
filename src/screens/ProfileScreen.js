import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  Pressable,
  Text,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/Ionicons";
import CustomText from "@components/CustomText";
import { CommonStyles } from "@styles/style";
import CustomButton from "@components/ButtonComponent";
import colors from "@styles/ColorStyles";
import ProfileButtonTab from "@components/ProfileButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen = ({ navigation }) => {
  const [profileImage, setProfileImage] = useState(
    require("@assets/images/user.png")
  ); // Default image
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = async () => {
    await AsyncStorage.setItem("isLoggedIn", "false"); // Update login status
    navigation.replace("Login");
  };

  const handleChangeProfileImage = async (option) => {
    let result;
    if (option === "upload") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
        return;
      }
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
    } else if (option === "camera") {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera permissions to make this work!");
        return;
      }
      result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
    } else if (option === "remove") {
      setProfileImage(require("@assets/images/user.png"));
      setModalVisible(false);
      return;
    }

    if (!result.canceled) {
      setProfileImage({ uri: result.assets[0].uri });
    }
    setModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={CommonStyles.container}>
      <View style={CommonStyles.content}>
        <CustomText style={CommonStyles.header}>Profile</CustomText>
        <View style={ProfileStyles.header}>
          <View style={ProfileStyles.profileImageContainer}>
            <Image
              style={ProfileStyles.profileImage}
              source={profileImage} // Use state to manage profile image
            />
            <TouchableOpacity
              style={ProfileStyles.cameraIconContainer}
              onPress={() => setModalVisible(true)}
            >
              <Icon name="camera-outline" size={24} color={colors.white} />
            </TouchableOpacity>
          </View>
          <CustomText style={ProfileStyles.name}>John Doe</CustomText>
          <CustomButton
            title="Edit Profile"
            onPress={() => navigation.navigate("EditProfile")}
            color="primary"
            padding={10}
            margin={10}
            iconName={"person-outline"}
            iconSize={20}
            iconColor={colors.white}
            style={[
              {
                alignSelf: "stretch",
              },
            ]}
          />
        </View>
        <View style={ProfileStyles.options}>
          <CustomText style={[CommonStyles.subHeader, { marginBottom: 5 }]}>
            Options
          </CustomText>
          <View style={ProfileStyles.section}>
            <ProfileButtonTab
              iconName="person-outline"
              text="My Profile"
              onPress={() => navigation.navigate("MyProfile")}
            />
            <ProfileButtonTab
              iconName="settings-outline"
              text="Settings"
              onPress={() => navigation.navigate("ChangePassword")}
            />
          </View>

          <CustomText style={[CommonStyles.subHeader, { marginBottom: 5 }]}>
            ID Card
          </CustomText>
          <View style={ProfileStyles.section}>
            <ProfileButtonTab
              iconName="card-outline"
              text="View ID Card"
              onPress={() => navigation.navigate("IDCard")}
            />
          </View>

          <CustomText style={[CommonStyles.subHeader, { marginBottom: 5 }]}>
            Agreements
          </CustomText>

          <View style={ProfileStyles.section}>
            <ProfileButtonTab
              iconName="document-text-outline"
              text="Terms & Conditions"
              onPress={() => navigation.navigate("TermsConditions")}
            />
            <ProfileButtonTab
              iconName="shield-checkmark-outline"
              text="Privacy Policy"
              onPress={() => navigation.navigate("PrivacyPolicy")}
            />
          </View>

          <CustomText style={[CommonStyles.subHeader, { marginBottom: 5 }]}>
            Organization
          </CustomText>

          <View style={ProfileStyles.section}>
            <ProfileButtonTab
              iconName="briefcase-outline"
              text="Organization Stats"
              onPress={() => navigation.navigate("OrganizationStats")}
            />
            <ProfileButtonTab
              iconName="people-outline"
              text="Employees"
              onPress={() => navigation.navigate("Team")}
            />
          </View>

          <View style={ProfileStyles.section}>
            <ProfileButtonTab
              iconName="log-out-outline"
              text="Log out"
              onPress={() => handleLogout()}
              color={colors.secondary}
              textColor={colors.secondary}
              iconView
            />
          </View>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={ProfileStyles.modalOverlay}
          activeOpacity={1}
          onPressOut={() => setModalVisible(false)}
        >
          <View style={ProfileStyles.modalContainer}>
            {["camera", "upload", "remove", "cancel"].map((option, index) => (
              <Pressable
                key={index}
                style={ProfileStyles.modalOption}
                onPress={() =>
                  option === "cancel"
                    ? setModalVisible(false)
                    : handleChangeProfileImage(option)
                }
              >
                <Icon
                  name={
                    option === "camera"
                      ? "camera-outline"
                      : option === "upload"
                        ? "image-outline"
                        : option === "remove"
                          ? "trash-outline"
                          : "close-outline"
                  }
                  size={24}
                  color={colors.neutral80}
                />
                <CustomText style={ProfileStyles.modalText}>
                  {option === "camera"
                    ? "Take a Picture"
                    : option === "upload"
                      ? "Upload from Gallery"
                      : option === "remove"
                        ? "Remove Profile Picture"
                        : "Cancel"}
                </CustomText>
              </Pressable>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </ScrollView>
  );
};

const ProfileStyles = StyleSheet.create({
  header: {
    alignItems: "center",
  },
  profileImageContainer: {
    position: "relative",
  },
  profileImage: {
    width: 125,
    height: 125,
    marginBottom: 10,
    borderRadius: 62.5,
  },
  cameraIconContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 5,
  },
  name: {
    fontSize: 20,
    fontFamily: "PoppinsSemiBold",
    textAlign: "center",
    color: colors.text,
  },
  options: {
    flex: 1,
  },
  section: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.neutral20,
    borderRadius: 10,
    overflow: "hidden",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: colors.white,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 20,
    width: "100%",
  },
  modalOption: {
    flexDirection: "row",
    gap: 10,
    paddingVertical: 8,
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    color: colors.neutral80,
    fontFamily: "PoppinsSemiBold",
  },
});

export default ProfileScreen;
