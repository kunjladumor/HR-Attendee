import React from "react";
import { View, StyleSheet, TouchableOpacity, Keyboard } from "react-native";
import Modal from "react-native-modal";
import { CheckBox } from "react-native-elements";
import Inputs from "./Inputs";
import colors from "@styles/ColorStyles";
import CustomButton from "./ButtonComponent";
import CustomText from "@components/CustomText";

const FiltersModal = ({
  isVisible = false,
  onClose = () => {},
  filters = { status: [], type: [], teamMember: "" },
  setFilters = () => {},
  onApply = () => {},
  onReset = () => {},
}) => {
  const leaveStatusOptions = [
    { id: "approved", label: "Approved", value: "approved" },
    { id: "rejected", label: "Rejected", value: "rejected" },
    { id: "pending", label: "Pending", value: "pending" },
  ];

  const leaveTypeOptions = [
    { id: "paid Leave", label: "Paid", value: "paid" },
    { id: "casual Leave", label: "Casual", value: "casual" },
    { id: "sick Leave", label: "Sick", value: "sick" },
    { id: "vacation Leave", label: "Vacation", value: "vacation" },
    { id: "half-day", label: "Half-day", value: "half-day" },
  ];

  const teamMemberOptions = [
    { label: "John Doe", value: "john_doe" },
    { label: "Jane Smith", value: "jane_smith" },
    // Add more team members as needed
  ];

  const handleCheckboxChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: prevFilters[type].includes(value)
        ? prevFilters[type].filter((item) => item !== value)
        : [...prevFilters[type], value],
    }));
  };

  const renderCheckbox = (option, type) => (
    <CheckBox
      key={option.id}
      title={option.label}
      checked={filters[type].includes(option.value)}
      onPress={() => handleCheckboxChange(type, option.value)}
      containerStyle={styles.checkboxContainer}
      textStyle={styles.checkboxText}
      checkedColor={colors.primary}
      iconType="material"
      checkedIcon={
        <View style={styles.customCheckedIcon}>
          <CustomText style={styles.customCheckmark}>✓</CustomText>
        </View>
      }
      uncheckedIcon={
        <View style={styles.customUncheckedIcon}>
          <CustomText style={styles.customCheckmark}>✗</CustomText>
        </View>
      }
    />
  );

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose} style={styles.modal}>
      <View style={styles.modalContent}>
        <CustomText style={styles.title}>Filters</CustomText>

        <CustomText style={styles.label}>Leave Status</CustomText>
        {leaveStatusOptions.map((option) => renderCheckbox(option, "status"))}

        <CustomText style={styles.label}>Leave Type</CustomText>
        {leaveTypeOptions.map((option) => renderCheckbox(option, "type"))}

        <CustomText style={styles.label}>Team Member</CustomText>
        <Inputs
          type="picker"
          placeholder="Select Team Member"
          value={filters.teamMember}
          onChangeText={(value) =>
            setFilters({ ...filters, teamMember: value })
          }
          options={teamMemberOptions}
        />

        <View style={styles.footer}>
          <CustomButton
            color={"neutral90"}
            outlined={true}
            borderRadius={10}
            title="Reset"
            onPress={onReset}
            style={{ flex: 1 }}
            fontfamily={"Poppins"}
          />

          <CustomButton
            color={"primary"}
            borderRadius={10}
            title="Apply"
            onPress={onApply}
            style={{ flex: 1 }}
            fontweight={"auto"}
            fontfamily={"Poppins"}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: colors.background,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: "PoppinsSemiBold",
    marginBottom: 10,
    color: colors.text,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
    fontFamily: "PoppinsMedium",
    color: colors.neutral90,
  },
  footer: {
    flexDirection: "row",
    marginTop: 10,
    gap: 10,
  },
  button: {
    padding: 10,
    backgroundColor: colors.primary,
    borderRadius: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: "Poppins",
    fontWeight: "500",
  },
  checkboxContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
    padding: 5,
    margin: 0,
  },
  checkboxText: {
    fontSize: 16,
    fontFamily: "Poppins",
    color: colors.neutral90,
  },
  customCheckedIcon: {
    width: 24,
    height: 24,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  customUncheckedIcon: {
    width: 24,
    height: 24,
    backgroundColor: colors.background,
    borderColor: colors.primary,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  customCheckmark: {
    color: colors.background,
    fontSize: 16,
  },
});

export default FiltersModal;
