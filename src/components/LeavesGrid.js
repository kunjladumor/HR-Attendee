import React, { useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import colors from "@styles/ColorStyles";
import LeaveDetailsModal from "./LeaveDetailsModal"; // Import the modal component

const leavesData = [
  { id: "1", type: "Balance", count: 10, color: colors.primary },
  { id: "2", type: "Approved", count: 5, color: colors.primary2 },
  { id: "3", type: "Requested", count: 3, color: colors.secondary2 },
  { id: "4", type: "Cancelled", count: 2, color: colors.secondary },
];

const LeavesGrid = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLeave, setSelectedLeave] = useState({ type: "", count: 0 });

  const handlePress = (item) => {
    if (item.type === "Balance") {
      setModalVisible(true);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        LeavesGridStyles.card,
        {
          borderColor: item.color,
          backgroundColor: `${item.color}1A`, // Adding opacity to the background color
        },
      ]}
      onPress={() => handlePress(item)}
    >
      <Text style={LeavesGridStyles.cardTitle}>
        {item.type.split(" ").map((word, index) => (
          <Text key={index}>
            {word}
            {word === "Leave" && "\n"}
          </Text>
        ))}
      </Text>
      <Text style={[LeavesGridStyles.cardCount, { color: item.color }]}>
        {item.count}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={leavesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Set the number of columns to 2
        columnWrapperStyle={LeavesGridStyles.row} // Style for the row
        key={(2).toString()} // Static key to avoid dynamic changes
      />
      <LeaveDetailsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        leaveType={selectedLeave.type}
        leaveBalance={selectedLeave.count}
      />
    </View>
  );
};

const LeavesGridStyles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    padding: 20,
    margin: 5,
    borderRadius: 20,
    borderWidth: 1, // Add border width to show the border color
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: "PoppinsMedium",
    fontWeight: "500",
    marginBottom: 5,
    textAlign: "left",
    color: colors.text,
  },
  cardCount: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default LeavesGrid;
