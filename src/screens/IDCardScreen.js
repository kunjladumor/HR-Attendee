import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Icon } from "react-native-elements";
import QRCode from "react-native-qrcode-svg";
import colors from "@styles/ColorStyles";
import CustomText from "@components/CustomText";
import { CommonStyles, statusBarHeight } from "@styles/style";

const IDCardScreen = ({ navigation }) => {
  const profileImage = require("@assets/images/user.png"); // Replace with actual image URL
  // const name = "Paresh Savekar";
  const name = "Kunj Ladumor";
  const designation = "Software Engineer";
  const companyName = "Cyberax";
  // const employeeId = "EMP107";
  const employeeId = "EMP137";

  const URLname = name.replace(/\s/g, "-").toLowerCase();

  // Define the base URL
  const baseURL = "https://www.indiaforums.com/icard/";
  // Concatenate the employeeId with the base URL
  const qrCodeURL = `${baseURL}${employeeId}/${URLname}`;

  return (
    <View style={styles.container}>
      <View style={[CommonStyles.row, { gap: 10 }]}>
        <Icon
          name="chevron-back-outline"
          type="ionicon"
          color={colors.neutral90}
          size={24}
          onPress={() => navigation.goBack()}
        />
        <CustomText style={CommonStyles.header}>ID Card</CustomText>
      </View>
      <View style={styles.card}>
        <Image source={profileImage} style={styles.profileImage} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.designation}>{designation}</Text>
        <QRCode value={qrCodeURL} size={150} />
        <Text style={styles.companyName}>{companyName}</Text>
        <Text style={styles.employeeId}>EMP ID: {employeeId}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: /* statusBarHeight + 20 */ 0,
    gap: 20,
    backgroundColor: colors.background,
  },
  card: {
    width: 300,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    margin: "auto",
    transform: [{ translateY: -50 }],
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontFamily: "PoppinsSemiBold",
  },
  designation: {
    fontSize: 16,
    fontFamily: "Poppins",
    fontWeight: "500",
    color: colors.neutral60,
    marginBottom: 20,
  },
  companyName: {
    fontSize: 18,
    fontFamily: "PoppinsSemiBold",
    marginTop: 20,
  },
  employeeId: {
    fontSize: 16,
    fontFamily: "Poppins",
    fontWeight: "500",
    color: colors.neutral60,
  },
});

export default IDCardScreen;
