import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import colors from "@styles/ColorStyles";
import Modal from "react-native-modal";
import CustomButton from "@components/ButtonComponent";
import CustomText from "./CustomText";
import { Ionicons } from "@expo/vector-icons";

const TeamMemberCard = ({ profilePicture, name, designation, phoneNumber }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleCallPress = () => {
    const url = `tel:${phoneNumber}`;
    Linking.openURL(url).catch((err) =>
      console.error("Error opening URL", err)
    );
    toggleModal();
  };

  const handleSmsPress = () => {
    const url = `sms:${phoneNumber}`;
    Linking.openURL(url).catch((err) =>
      console.error("Error opening URL", err)
    );
    toggleModal();
  };

  const handleWhatsAppPress = () => {
    const url = `https://wa.me/${phoneNumber}`;
    Linking.openURL(url).catch((err) =>
      console.error("Error opening URL", err)
    );
    toggleModal();
  };

  return (
    <View style={styles.card}>
      <Image source={profilePicture} style={styles.profilePicture} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.designation}>{designation}</Text>
      </View>
      <CustomButton
        iconName={"ellipsis-vertical-outline"}
        iconSize={20}
        iconColor={colors.neutral80}
        onPress={toggleModal}
      />

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <TouchableOpacity
            onPress={handleCallPress}
            style={styles.modalOption}
          >
            <Ionicons name="call-outline" size={28} color={colors.primary} />
            <Text style={{ fontSize: 20, fontFamily: "Poppins" }}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSmsPress} style={styles.modalOption}>
            <Ionicons
              name="chatbox-ellipses-outline"
              size={24}
              color={colors.neutral50}
            />
            <Text style={{ fontSize: 20, fontFamily: "Poppins" }}>SMS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleWhatsAppPress}
            style={styles.modalOption}
          >
            <Ionicons name="logo-whatsapp" size={28} color={colors.success} />
            <Text style={{ fontSize: 20, fontFamily: "Poppins" }}>
              WhatsApp
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              /* Edit logic */ toggleModal();
            }}
            style={styles.modalOption}
          >
            <Ionicons name="create-outline" size={28} color={colors.primary} />
            <Text style={{ fontSize: 20, fontFamily: "Poppins" }}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              /* Delete logic */ toggleModal();
            }}
            style={styles.modalOption}
          >
            <Ionicons name="trash-outline" size={28} color={colors.danger} />
            <Text style={{ fontSize: 20, fontFamily: "Poppins" }}>Delete</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: colors.neutral20,
    marginBottom: 5,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontFamily: "PoppinsSemiBold",
  },
  designation: {
    fontSize: 14,
    fontFamily: "PoppinsMedium",
    color: colors.neutral60,
  },
  menuButton: {
    padding: 10,
  },
  menuText: {
    fontSize: 20,
  },
  modal: {
    margin: 0, // Remove default margin
    justifyContent: "flex-end", // Align modal to the bottom
  },
  modalContent: {
    backgroundColor: colors.white,
    paddingVertical: 30,
    gap: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: "100%", // Make the modal take up the full width
    flexDirection: "column",
  },
  modalOption: {
    flexDirection: "row",
    paddingHorizontal: 30,
    gap: 20,
  },
});

export default TeamMemberCard;
