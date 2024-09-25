import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  RefreshControl,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Ionicons"; // Import the Icon component
import CustomText from "@components/CustomText"; // Import the CustomText component
import TeamMemberCard from "@components/TeamMemberCard"; // Import the TeamMemberCard component
import Modal from "react-native-modal"; // Import the Modal component

import colors from "@styles/ColorStyles"; // Import the colors object
import CustomButton from "@components/ButtonComponent";
import { CommonStyles } from "@styles/style"; // Import common styles

const TeamScreen = function ({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [refreshing, setRefreshing] = useState(false); // State for refreshing
  const [isModalVisible, setModalVisible] = useState(false); // State for modal visibility

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

  // Handle modal option selection
  const handleOptionSelect = (option) => {
    console.log(`Selected option: ${option}`);
    setModalVisible(false);
    // Add your logic here based on the selected option
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            <CustomText style={CommonStyles.header}>Employees</CustomText>

            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Ionicons
                name="ellipsis-vertical-outline"
                size={20}
                color={colors.neutral80}
              />
            </TouchableOpacity>
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
              color={isFocused ? colors.primary : colors.neutral50}
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchBar}
              placeholder="Search team members..."
              placeholderTextColor={colors.neutral50} // Set the placeholder text color
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
              navigation={navigation}
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

        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
          style={styles.modal}
        >
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => navigation.navigate("SelectMembers")}
            >
              <Icon name="checkbox-outline" size={24} color={colors.text} />
              <Text style={styles.modalOptionText}>Select Members</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => handleOptionSelect("Notify Members")}
            >
              <Icon
                name="notifications-outline"
                size={24}
                color={colors.text}
              />
              <Text style={styles.modalOptionText}>Notify Members</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => handleOptionSelect("Others")}
            >
              <Icon name="ellipsis-horizontal" size={24} color={colors.text} />
              <Text style={styles.modalOptionText}>Others</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.neutral30, // Changed border color
    borderWidth: 1,
    borderRadius: 10, // Adjusted border radius for rounded corners
    padding: 5,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: colors.background, // Changed background color
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
    color: colors.neutral90, // Changed text color
  },
  scrollView: {
    padding: 20,
    paddingTop: 0,
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
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: colors.surface, // Changed background color
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalOption: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  modalOptionText: {
    color: colors.text, // Changed text color
    fontSize: 18,
    fontFamily: "PoppinsMedium",
    padding: 10,
  },
});

export default TeamScreen;
