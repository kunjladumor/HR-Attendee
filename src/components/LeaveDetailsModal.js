import React from "react";
import { View, Text, StyleSheet, Modal, FlatList } from "react-native";
import colors from "@styles/ColorStyles";
import CustomText from "./CustomText";
import CustomButton from "./ButtonComponent";

const leaveData = [
  { id: "1", type: "Sick Leave", count: 10 },
  { id: "2", type: "Approved", count: 5 },
  { id: "3", type: "Requested", count: 3 },
  { id: "4", type: "Cancelled", count: 2 },
];

const LeaveDetailsModal = ({ visible, onClose }) => {
  const renderItem = ({ item }) => (
    <View style={styles.leaveItem}>
      <Text style={styles.label}>{item.type}:</Text>
      <Text style={styles.value}>{item.count}</Text>
    </View>
  );

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <CustomText style={styles.modalTitle}>Leaves Balance</CustomText>
          <FlatList
            data={leaveData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          <CustomButton
            title="Close"
            color="primary"
            padding={8}
            iconName="close-outline"
            iconSize={20}
            iconColor={colors.white}
            borderRadius={10}
            onPress={onClose}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "100%",
    marginTop: "auto",
    padding: 20,
    backgroundColor: colors.surface,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontFamily: "PoppinsSemiBold",
    marginBottom: 10,
    color: colors.text,
  },
  leaveItem: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: colors.text,
    fontFamily: "PoppinsMedium",
  },
  value: {
    fontSize: 16,
    color: colors.text,
    fontFamily: "PoppinsMedium",
  },
});

export default LeaveDetailsModal;
