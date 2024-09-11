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

      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={handleCallPress}>
            <Text style={styles.modalOption}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSmsPress}>
            <Text style={styles.modalOption}>SMS</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleWhatsAppPress}>
            <Text style={styles.modalOption}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              /* Edit logic */ toggleModal();
            }}
          >
            <Text style={styles.modalOption}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              /* Delete logic */ toggleModal();
            }}
          >
            <Text style={styles.modalOption}>Delete</Text>
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
  modalContent: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 10,
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
  },
  modalOption: {
    fontSize: 16,
    padding: 5,
    fontFamily: "Poppins",
  },
});

export default TeamMemberCard;
