import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import colors from "./ColorStyles";
import { LeavesGridStyles } from "../styles/style";

const leavesData = [
  { id: "1", type: "Leave Balance", count: 10, color: colors.primary },
  { id: "2", type: "Leave Approved", count: 5, color: colors.primary2 },
  { id: "3", type: "Leave Pending", count: 3, color: colors.secondary2 },
  { id: "4", type: "Leave Cancelled", count: 2, color: colors.secondary },
];

const renderItem = ({ item }) => (
  <View
    style={[
      LeavesGridStyles.card,
      {
        borderColor: item.color,
        backgroundColor: `${item.color}1A`, // Adding opacity to the background color
      },
    ]}
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
  </View>
);

const LeavesGrid = () => {
  return (
    <FlatList
      data={leavesData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2} // Set the number of columns to 2
      columnWrapperStyle={LeavesGridStyles.row} // Style for the row
      key={(2).toString()} // Static key to avoid dynamic changes
    />
  );
};

export default LeavesGrid;
