import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "@styles/ColorStyles"; // Adjust the import path as needed
import { CommonStyles } from "../styles/style";
import CustomText from "../components/CustomText";

const teamMembers = [
  {
    id: 1,
    profilePicture: {
      uri: "https://xsgames.co/randomusers/assets/avatars/male/30.jpg",
    },
    name: "John Doe",
    designation: "Software Engineer",
    status: "In Office",
  },
  {
    id: 2,
    profilePicture: {
      uri: "https://xsgames.co/randomusers/assets/avatars/male/31.jpg",
    },
    name: "Jane Smith",
    designation: "Product Manager",
    status: "On Break",
  },
  {
    id: 3,
    profilePicture: {
      uri: "https://xsgames.co/randomusers/assets/avatars/female/3.jpg",
    },
    name: "Alice Johnson",
    designation: "UI/UX Designer",
    status: "On Leave",
  },
  {
    id: 4,
    profilePicture: {
      uri: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
    },
    name: "Bob Brown",
    designation: "QA Engineer",
    status: "Others",
  },
  {
    id: 5,
    profilePicture: {
      uri: "https://xsgames.co/randomusers/assets/avatars/female/1.jpg",
    },
    name: "Eve White",
    designation: "Software Engineer",
    status: "In Office",
  },
  {
    id: 6,
    profilePicture: {
      uri: "https://xsgames.co/randomusers/assets/avatars/male/36.jpg",
    },
    name: "Tom Black",
    designation: "Software Engineer",
    status: "On Break",
  },
  {
    id: 7,
    profilePicture: {
      uri: "https://xsgames.co/randomusers/assets/avatars/female/1.jpg",
    },
    name: "Alice Johnson",
    designation: "UI/UX Designer",
    status: "On Leave",
  },
  {
    id: 9,
    profilePicture: {
      uri: "https://xsgames.co/randomusers/assets/avatars/male/37.jpg",
    },
    name: "Mike Yellow",
    designation: "Software Engineer",
    status: "Others",
  },
];

const groupByStatus = (members) => {
  const grouped = members.reduce((acc, member) => {
    if (!acc[member.status]) {
      acc[member.status] = [];
    }
    acc[member.status].push(member);
    return acc;
  }, {});

  return Object.keys(grouped).map((status) => ({
    title: status,
    data: grouped[status],
  }));
};

const statusIcons = {
  "In Office": "briefcase-outline",
  "On Break": "cafe-outline",
  "On Leave": "airplane-outline",
  Others: "ellipsis-horizontal-outline",
};

const OrganizationStatsScreen = ({ navigation }) => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (title) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const renderSectionHeader = ({ section }) => (
    <TouchableOpacity
      onPress={() => toggleSection(section.title)}
      style={styles.sectionHeader}
    >
      <View style={styles.sectionHeaderContent}>
        <Ionicons
          name={statusIcons[section.title]}
          size={20}
          color={colors.neutral90}
          style={styles.sectionHeaderIcon}
        />
        <Text style={styles.sectionHeaderText}>{section.title}</Text>
      </View>
      <Ionicons
        name={expandedSections[section.title] ? "chevron-up" : "chevron-down"}
        size={20}
        color={colors.primary}
      />
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image
        source={{ uri: item.profilePicture.uri }}
        style={styles.profilePicture}
      />
      <View style={styles.itemDetails}>
        <Text style={styles.itemText}>{item.name}</Text>
        <Text style={styles.itemDesignation}>{item.designation}</Text>
      </View>
    </View>
  );

  const groupedData = groupByStatus(teamMembers);

  return (
    <View style={styles.container}>
      <View style={CommonStyles.row}>
        <Ionicons
          name="chevron-back-outline"
          size={24}
          color={colors.neutral90}
          style={{ marginRight: 10 }}
          onPress={() => navigation.goBack()}
        />
        <CustomText style={CommonStyles.header}>Organization Stats</CustomText>
      </View>
      <SectionList
        sections={groupedData.map((section) => ({
          ...section,
          data: expandedSections[section.title] ? section.data : [],
        }))}
        keyExtractor={(item) => item.id.toString()}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
        stickySectionHeadersEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 10,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.surface,
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  sectionHeaderContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  sectionHeaderIcon: {
    marginRight: 20,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontFamily: "PoppinsMedium",
    color: colors.neutral90,
  },
  item: {
    flexDirection: "row",
    backgroundColor: colors.surface,
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    marginLeft: 20,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  itemDetails: {
    flexDirection: "column",
  },
  itemText: {
    fontSize: 16,
    fontFamily: "Poppins",
    color: colors.text,
  },
  itemDesignation: {
    fontSize: 14,
    fontFamily: "Poppins",
    color: colors.neutral60,
  },
  itemPhone: {
    fontSize: 14,
    fontFamily: "Poppins",
    color: colors.neutral60,
  },
});

export default OrganizationStatsScreen;
