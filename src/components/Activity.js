// Activity.js
import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import PropTypes from "prop-types";
import colors from "@styles/ColorStyles";
import CustomText from "@components/CustomText";
import { CommonStyles } from "@styles/style";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import ActivityCard from "@components/ActivityCard"; // Import ActivityCard

// Activity Component
const Activity = ({ activities }) => {
  const navigation = useNavigation(); // Use useNavigation hook

  const renderItem = ({ item }) => (
    <ActivityCard
      iconName={item.iconName}
      title={item.title}
      time={item.time}
      date={item.date}
      stat={item.stat}
      url={item.url} // Pass url prop
    />
  );

  return (
    <View style={ActivityStyles.container}>
      <View style={ActivityStyles.header}>
        <CustomText style={[CommonStyles.header, { fontSize: 18 }]}>
          Activity
        </CustomText>
        <TouchableOpacity
          onPress={() => navigation.navigate("ActivityScreen", { activities })}
        >
          <Text style={ActivityStyles.viewMore}>View More</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={activities}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

Activity.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      stat: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const ActivityStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  viewMore: {
    fontSize: 16,
    color: colors.primary,
  },
});

export default Activity;
