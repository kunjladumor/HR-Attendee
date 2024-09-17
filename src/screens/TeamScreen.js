import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  RefreshControl,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Import the Icon component
import CustomText from "@components/CustomText"; // Import the CustomText component
import TeamMemberCard from "@components/TeamMemberCard"; // Import the TeamMemberCard component
import { statusBarHeight } from "@styles/style";
import colors from "@styles/ColorStyles"; // Import the colors object
import CustomButton from "@components/ButtonComponent";
import { CommonStyles } from "@styles/style"; // Import common styles

const TeamScreen = function () {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [refreshing, setRefreshing] = useState(false); // State for refreshing

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate a network request
    setTimeout(() => {
      // Reset the announcements and page
      setRefreshing(false);
    }, 2000);
  };
  // Sample data for team members
  const teamMembers = [
    {
      id: 1,
      profilePicture: {
        uri: "https://xsgames.co/randomusers/assets/avatars/male/30.jpg",
      },
      name: "John Doe",
      designation: "Software Engineer",
      phoneNumber: "+1234567890", // Add phone number
    },
    {
      id: 2,
      profilePicture: {
        uri: "https://xsgames.co/randomusers/assets/avatars/male/31.jpg",
      },
      name: "Jane Smith",
      designation: "Product Manager",
      phoneNumber: "+1234567890", // Add phone number
    },
    {
      id: 3,
      profilePicture: {
        uri: "https://xsgames.co/randomusers/assets/avatars/female/3.jpg",
      },
      name: "Alice Johnson",
      designation: "UI/UX Designer",
      phoneNumber: "+1234567890", // Add phone number
    },
    {
      id: 4,
      profilePicture: {
        uri: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
      },
      name: "Bob Brown",
      designation: "QA Engineer",
      phoneNumber: "+1234567890", // Add phone number
    },
    {
      id: 5,
      profilePicture: {
        uri: "https://xsgames.co/randomusers/assets/avatars/female/1.jpg",
      },
      name: "Eve White",
      designation: "Software Engineer",
      phoneNumber: "+1234567890", // Add phone number
    },

    {
      id: 6,
      profilePicture: {
        uri: "https://xsgames.co/randomusers/assets/avatars/male/36.jpg",
      },
      name: "Tom Black",
      designation: "Software Engineer",
      phoneNumber: "+1234567890", // Add phone number
    },
    {
      id: 7,
      profilePicture: {
        uri: "https://xsgames.co/randomusers/assets/avatars/female/1.jpg",
      },
      name: "Alice Johnson",
      designation: "UI/UX Designer",
      phoneNumber: "+1234567890", // Add phone number
    },
    {
      id: 9,
      profilePicture: {
        uri: "https://xsgames.co/randomusers/assets/avatars/male/37.jpg",
      },
      name: "Mike Yellow",
      designation: "Software Engineer",
      phoneNumber: "+1234567890", // Add phone number
    },
  ];

  // Filter team members based on search query
  const filteredTeamMembers = teamMembers.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View
          style={[
            CommonStyles.rowSpaceBetween,
            { marginBottom: 10, alignItems: "center" },
          ]}
        >
          <CustomText style={styles.text}>Team Members</CustomText>
          <CustomButton
            iconName={"ellipsis-vertical-outline"}
            iconSize={20}
            iconColor={colors.neutral80}
            onPress={() => {
              /* View check-ins logic */
            }}
          />
        </View>
        <View
          style={[
            styles.searchBarContainer,
            isFocused && { borderColor: colors.primary },
          ]}
        >
          <Icon
            name="search"
            size={24}
            color={isFocused ? colors.primary : colors.neutral30}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchBar}
            placeholder="Search team members..."
            placeholderTextColor={colors.neutral30} // Set the placeholder text color
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </View>
        {filteredTeamMembers.map((member) => (
          <TeamMemberCard
            key={member.id}
            profilePicture={member.profilePicture}
            name={member.name}
            designation={member.designation}
            phoneNumber={member.phoneNumber}
          />
        ))}
      </ScrollView>
      <CustomButton
        title="Add Members"
        onPress={() => {
          /* Add member logic */
        }}
        iconName={"add-circle-outline"}
        iconSize={24}
        iconColor={colors.white}
        style={styles.addButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.background,
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "transparent",
    borderWidth: 1,
    borderRadius: 10, // Adjusted border radius for rounded corners
    padding: 5,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: "#f0f0f0", // Changed background color
    // Shadow properties for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    // Elevation for Android
    elevation: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    fontSize: 16, // Adjusted font size
    color: colors.neutral80, // Changed text color
  },
  scrollView: {
    padding: 20,
    paddingTop: /* statusBarHeight + 20 */ 0,
    flexGrow: 1,
    paddingBottom: 150,
  },
  addButton: {
    position: "absolute",
    bottom: 80,
    right: 0,
    left: 0,
    zIndex: 1,
    backgroundColor: colors.primary, // Example background color
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});

export default TeamScreen;
