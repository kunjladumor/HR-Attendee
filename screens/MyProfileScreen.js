// screens/MyProfileScreen.js
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Tabs from "../components/Tabs";
import CustomText from "../components/CustomText";

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
    <View style={styles.tabsContent}>
      <View style={styles.detailsContainer}>
        <CustomText style={styles.detailLabel}>Full Name:</CustomText>
        <CustomText style={styles.detailValue}>{Profile.fullName}</CustomText>

        <CustomText style={styles.detailLabel}>Email:</CustomText>
        <CustomText style={styles.detailValue}>{Profile.email}</CustomText>

        <CustomText style={styles.detailLabel}>Phone:</CustomText>
        <CustomText style={styles.detailValue}>{Profile.phone}</CustomText>

        <CustomText style={styles.detailLabel}>Address:</CustomText>
        <CustomText style={styles.detailValue}>{Profile.address}</CustomText>
      </View>
    </View>
  );
};

const ProfessionalTab = () => {
  return (
    <View style={styles.tabsContent}>
      <View style={styles.detailsContainer}>
        <CustomText style={styles.detailLabel}>Employee ID:</CustomText>
        <CustomText style={styles.detailValue}>{Profile.employeeId}</CustomText>

        <CustomText style={styles.detailLabel}>Designation:</CustomText>
        <CustomText style={styles.detailValue}>
          {Profile.designation}
        </CustomText>

        <CustomText style={styles.detailLabel}>Company Email:</CustomText>
        <CustomText style={styles.detailValue}>
          {Profile.companyEmail}
        </CustomText>

        <CustomText style={styles.detailLabel}>Department:</CustomText>
        <CustomText style={styles.detailValue}>{Profile.department}</CustomText>

        <CustomText style={styles.detailLabel}>Reporting Manager:</CustomText>
        <CustomText style={styles.detailValue}>
          {Profile.reportingManager}
        </CustomText>

        <CustomText style={styles.detailLabel}>Experience:</CustomText>
        <CustomText style={styles.detailValue}>{Profile.experience}</CustomText>

        <CustomText style={styles.detailLabel}>Office Time:</CustomText>
        <CustomText style={styles.detailValue}>{Profile.officeTime}</CustomText>
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
];

const DocumentsTab = () => {
  return (
    <View style={styles.container}>
      {documents.map((document, index) => (
        <View key={index} style={styles.card}>
          <Ionicons
            name="document-text-outline"
            size={24}
            style={styles.icon}
          />
          <CustomText style={styles.documentTitle}>{document.title}</CustomText>
          <Ionicons
            name="download-outline"
            size={24}
            style={styles.downloadButton}
          />
        </View>
      ))}
    </View>
  );
};

const tabs = [
  { title: "Personal", content: <PersonalTab /> },
  { title: "Professional", content: <ProfessionalTab /> },
  { title: "Documents", content: <DocumentsTab /> },
];

const MyProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="chevron-back-outline"
          size={24}
          onPress={() => navigation.goBack()}
        />
        <CustomText style={styles.headerText}>Leave Details</CustomText>
      </View>
      <Tabs tabs={tabs} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    marginLeft: 16,
  },
  tabsContent: {
    padding: 16,
  },
  detailsContainer: {
    marginBottom: 16,
  },
  detailLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    marginBottom: 8,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    marginRight: 16,
  },
  documentTitle: {
    flex: 1,
    fontSize: 16,
  },
  downloadButton: {
    padding: 8,
  },
});

export default MyProfileScreen;
