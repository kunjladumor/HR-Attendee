import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { CheckBox } from "react-native-elements";
import Inputs from "./Inputs"; // Import the Inputs component
import colors from "../styles/ColorStyles"; // Adjust the import based on your project structure

const FiltersModal = ({
  isVisible,
  onClose,
  filters,
  setFilters,
  onApply,
  onReset,
}) => {
  const leaveStatusOptions = [
    { id: "approved", label: "Approved", value: "approved" },
    { id: "rejected", label: "Rejected", value: "rejected" },
    { id: "pending", label: "Pending", value: "pending" },
  ];

  const leaveTypeOptions = [
    { id: "paid", label: "Paid", value: "paid" },
    { id: "casual", label: "Casual", value: "casual" },
    { id: "sick", label: "Sick", value: "sick" },
    { id: "vacation", label: "Vacation", value: "vacation" },
    { id: "half-day", label: "Half-day", value: "half-day" },
  ];

  const teamMemberOptions = [
    { label: "John Doe", value: "john_doe" },
    { label: "Jane Smith", value: "jane_smith" },
    // Add more team members as needed
  ];

  const handleStatusChange = (value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      status: prevFilters.status.includes(value)
        ? prevFilters.status.filter((item) => item !== value)
        : [...prevFilters.status, value],
    }));
  };

  const handleTypeChange = (value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      type: prevFilters.type.includes(value)
        ? prevFilters.type.filter((item) => item !== value)
        : [...prevFilters.type, value],
    }));
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose} style={styles.modal}>
      <View style={styles.modalContent}>
        <Text style={styles.title}>Filters</Text>

        <Text style={styles.label}>Leave Status</Text>
        {leaveStatusOptions.map((option) => (
          <CheckBox
            key={option.id}
            title={option.label}
            checked={filters.status.includes(option.value)}
            onPress={() => handleStatusChange(option.value)}
            containerStyle={styles.checkboxContainer}
            textStyle={styles.checkboxText}
            checkedColor={colors.primary}
            iconType="material"
            checkedIcon="check-box"
            uncheckedIcon="check-box-outline-blank"
          />
        ))}

        <Text style={styles.label}>Leave Type</Text>
        {leaveTypeOptions.map((option) => (
          <CheckBox
            key={option.id}
            title={option.label}
            checked={filters.type.includes(option.value)}
            onPress={() => handleTypeChange(option.value)}
            containerStyle={styles.checkboxContainer}
            textStyle={styles.checkboxText}
            checkedColor={colors.primary}
            iconType="material"
            checkedIcon="check-box"
            uncheckedIcon="check-box-outline-blank"
          />
        ))}

        <Text style={styles.label}>Team Member</Text>
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
          <TouchableOpacity style={styles.button} onPress={onReset}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onApply}>
            <Text style={styles.buttonText}>Apply</Text>
          </TouchableOpacity>
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
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: "PoppinsSemiBold",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
    fontFamily: "PoppinsMedium",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    padding: 10,
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
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
    fontWeight: "500",
    color: colors.neutral90,
  },
});

export default FiltersModal;
