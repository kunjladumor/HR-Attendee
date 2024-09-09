import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Tabs from "@components/Tabs";
import CustomText from "@components/CustomText";
import { statusBarHeight } from "@styles/style";
import colors from "@styles/ColorStyles";
import { Ionicons } from "@expo/vector-icons";

const Profile = {
  fullName: "John Doe",
  email: "johndoe@gmail.com",
  phone: "9876543210",
  address: "123, ABC Street, XYZ City",
  employeeId: "EMP1234",
  designation: "Software Developer",
  companyEmail: "johndoe@cyberax.com",
  department: "Engineering",
  reportingManager: "Jane Doe",
  experience: "2 years",
  officeTime: "9:00 AM to 6:00 PM",
};

const PersonalTab = () => {
  return (
    <View style={MyProfileStyles.tabsContent}>
      <View style={MyProfileStyles.detailsContainer}>
        <CustomText style={MyProfileStyles.detailLabel}>Full Name:</CustomText>
        <CustomText style={MyProfileStyles.detailValue}>
          {Profile.fullName}
        </CustomText>

        <CustomText style={MyProfileStyles.detailLabel}>Email:</CustomText>
        <CustomText style={MyProfileStyles.detailValue}>
          {Profile.email}
        </CustomText>

        <CustomText style={MyProfileStyles.detailLabel}>Phone:</CustomText>
        <CustomText style={MyProfileStyles.detailValue}>
          {Profile.phone}
        </CustomText>

        <CustomText style={MyProfileStyles.detailLabel}>Address:</CustomText>
        <CustomText style={MyProfileStyles.detailValue}>
          {Profile.address}
        </CustomText>
      </View>
    </View>
  );
};

const ProfessionalTab = () => {
  return (
    <View style={MyProfileStyles.tabsContent}>
      <View style={MyProfileStyles.detailsContainer}>
        <CustomText style={MyProfileStyles.detailLabel}>
          Employee ID:
        </CustomText>
        <CustomText style={MyProfileStyles.detailValue}>
          {Profile.employeeId}
        </CustomText>

        <CustomText style={MyProfileStyles.detailLabel}>
          Designation:
        </CustomText>
        <CustomText style={MyProfileStyles.detailValue}>
          {Profile.designation}
        </CustomText>

        <CustomText style={MyProfileStyles.detailLabel}>
          Company Email Address:
        </CustomText>
        <CustomText style={MyProfileStyles.detailValue}>
          {Profile.companyEmail}
        </CustomText>

        <CustomText style={MyProfileStyles.detailLabel}>Department:</CustomText>
        <CustomText style={MyProfileStyles.detailValue}>
          {Profile.department}
        </CustomText>

        <CustomText style={MyProfileStyles.detailLabel}>
          Reporting Manager:
        </CustomText>
        <CustomText style={MyProfileStyles.detailValue}>
          {Profile.reportingManager}
        </CustomText>

        <CustomText style={MyProfileStyles.detailLabel}>
          Company Experience:
        </CustomText>
        <CustomText style={MyProfileStyles.detailValue}>
          {Profile.experience}
        </CustomText>

        <CustomText style={MyProfileStyles.detailLabel}>
          Office Time:
        </CustomText>
        <CustomText style={MyProfileStyles.detailValue}>
          {Profile.officeTime}
        </CustomText>
      </View>
    </View>
  );
};

const documents = [
  { title: "Offer Letter", url: "https://example.com/document1.pdf" },
  { title: "Appointment Letter", url: "https://example.com/document2.pdf" },
  { title: "Appraisal Letter", url: "https://example.com/document4.pdf" },
  { title: "Bond Agreement", url: "https://example.com/document3.pdf" },
  {
    title: "Non-Disclosure Agreement",
    url: "https://example.com/document5.pdf",
  },
  // Add more documents here
];

const DocumentsTab = () => {
  return (
    <View style={DocumentStyles.container}>
      {documents.map((document, index) => (
        <View key={index} style={DocumentStyles.card}>
          <Ionicons
            name="document-text-outline"
            size={24}
            color={colors.black}
            style={DocumentStyles.icon}
          />
          <CustomText style={DocumentStyles.documentTitle}>
            {document.title}
          </CustomText>
          <Ionicons
            name="download-outline"
            size={20}
            style={DocumentStyles.downloadIcon}
          />
        </View>
      ))}
    </View>
  );
};

const tabs = [
  {
    title: "Personal",
    content: <PersonalTab />,
  },
  {
    title: "Professional",
    content: <ProfessionalTab />,
  },
  {
    title: "Documents",
    content: <DocumentsTab />,
  },
];

const MyProfileScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={MyProfileStyles.container}>
      <View style={MyProfileStyles.header}>
        <Ionicons
          name="chevron-back-outline"
          size={24}
          onPress={() => navigation.goBack()}
        />
        <CustomText style={MyProfileStyles.headerTitle}>My Profile</CustomText>
      </View>
      <Tabs tabs={tabs} />
    </ScrollView>
  );
};

const MyProfileStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    paddingTop: statusBarHeight + 20,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
  },
  tabsContent: {
    padding: 16,
  },
  detailLabel: {
    fontSize: 14,
    fontFamily: "PoppinsRegular",
    color: colors.neutral50,
    paddingTop: 10,
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    fontFamily: "PoppinsMedium",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral20,
  },
});

const DocumentStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral20,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  documentTitle: {
    flex: 1,
    fontSize: 16,
    fontFamily: "PoppinsSemiBold",
  },
  downloadIcon: {
    marginRight: 10,
  },
});

export default MyProfileScreen;
