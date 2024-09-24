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
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Import the Icon component
import CustomText from "@components/CustomText"; // Import the CustomText component
import colors from "@styles/ColorStyles"; // Import the colors object
import CustomButton from "@components/ButtonComponent";
import { CommonStyles } from "@styles/style"; // Import common styles
import CustomCheckbox from "@components/CustomCheckbox"; // Import the custom checkbox component

const SelectMembersScreen = function ({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [refreshing, setRefreshing] = useState(false); // State for refreshing
  const [selectedMembers, setSelectedMembers] = useState([]); // State for selected members

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

  // Handle member selection
  const handleMemberSelect = (memberId) => {
    setSelectedMembers((prevSelectedMembers) =>
      prevSelectedMembers.includes(memberId)
        ? prevSelectedMembers.filter((id) => id !== memberId)
        : [...prevSelectedMembers, memberId]
    );
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
            <CustomText style={CommonStyles.header}>Select Members</CustomText>
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
            <TouchableOpacity
              key={member.id}
              onPress={() => handleMemberSelect(member.id)}
              style={[
                styles.card,
                selectedMembers.includes(member.id) && styles.selectedCard,
              ]}
            >
              <View style={styles.cardContent}>
                <Image
                  source={member.profilePicture}
                  style={styles.profilePicture}
                />
                <View style={styles.info}>
                  <Text style={styles.name}>{member.name}</Text>
                  <Text style={styles.designation}>{member.designation}</Text>
                </View>
                <CustomCheckbox
                  checked={selectedMembers.includes(member.id)}
                  onPress={() => handleMemberSelect(member.id)}
                />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <CustomButton
          title="Confirm Selection"
          onPress={() => {
            /* Confirm selection logic */
            console.log("Selected Members:", selectedMembers);
            navigation.navigate("CreateNotification");
          }}
          iconName={"checkmark-circle-outline"}
          iconSize={24}
          iconColor={colors.white}
          style={styles.confirmButton}
        />
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
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: colors.neutral20,
    marginBottom: 5,
  },
  selectedCard: {
    backgroundColor: colors.primaryLight, // Example selected background color
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontFamily: "PoppinsSemiBold",
    color: colors.text,
  },
  designation: {
    fontSize: 14,
    fontFamily: "PoppinsMedium",
    color: colors.neutral60,
  },
  confirmButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 1,
    backgroundColor: colors.primary, // Example background color
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
});

export default SelectMembersScreen;
