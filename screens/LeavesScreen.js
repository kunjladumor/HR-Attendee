import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CustomText from "../components/CustomText/CustomText"; // Import the CustomText component

const leavesData = [
  { id: "1", type: "Paid Leaves", status: "Approved" },
  { id: "2", type: "Sick Leaves", status: "Pending" },
  { id: "3", type: "Unpaid Leaves", status: "Unapproved" },
  // Add more leaves data here
];

const LeavesScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <CustomText style={styles.title}>{item.type}</CustomText>
      <CustomText style={styles.status}>{item.status}</CustomText>
    </View>
  );

  return (
    <View style={styles.container}>
      <CustomText style={styles.header}>Leaves</CustomText>
      <FlatList
        data={leavesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 18,
  },
  status: {
    fontSize: 14,
    color: "gray",
  },
});

export default LeavesScreen;
