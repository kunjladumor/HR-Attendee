// ActivityScreen.js
import React from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";
import colors from "@styles/ColorStyles";
import CustomText from "@components/CustomText";
import ActivityCard from "@components/ActivityCard"; // Import the ActivityCard component

const ActivityScreen = ({ navigation, route }) => {
  const { activities } = route.params;

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

  const renderHeader = () => (
    <View
      style={[
        CommonStyles.row,
        {
          marginBottom: 10,
        },
      ]}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons
          name="chevron-back-outline"
          size={24}
          color={colors.neutral90}
        />
      </TouchableOpacity>
      <CustomText
        style={[CommonStyles.header, { fontSize: 24, marginLeft: 10 }]}
      >
        Activity
      </CustomText>
      <View style={{ width: 24 }} />
    </View>
  );

  return (
    <FlatList
      data={activities}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={ActivityScreenStyles.listContent}
      ListHeaderComponent={renderHeader}
    />
  );
};

const ActivityScreenStyles = StyleSheet.create({
  listContent: {
    padding: 20,
    paddingTop: 0,
    backgroundColor: colors.background,
    flexGrow: 1,
  },
});

ActivityScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      activities: PropTypes.arrayOf(
        PropTypes.shape({
          iconName: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          time: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
          stat: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ActivityScreen;
