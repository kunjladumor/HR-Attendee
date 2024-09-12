import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomText from "@components/CustomText";
import colors from "@styles/ColorStyles";
import { Ionicons } from "@expo/vector-icons";
import { statusBarHeight } from "@styles/style";

const TermsConditionsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="chevron-back-outline"
          size={24}
          onPress={() => navigation.goBack()}
        />
        <CustomText style={styles.title}>Terms & Conditions</CustomText>
      </View>
      <View style={styles.content}>
        <CustomText style={styles.lastUpdate}>
          Last update : 2021-09-01
        </CustomText>
        <CustomText style={styles.contentText}>
          Please read these terms and conditions carefully before using our
          application.
        </CustomText>

        <CustomText style={styles.blueText}>
          Please read these terms and conditions carefully before using our
          application.
        </CustomText>
        <CustomText style={styles.contentText}>
          By using the application, you agree to be bound by these terms and
          conditions.
        </CustomText>
        <CustomText style={styles.contentText}>
          If you disagree with any part of the terms, then you may not access
          the application.
        </CustomText>
        <CustomText style={styles.contentText}>
          The terms and conditions are subject to change at any time without
          prior notice.
        </CustomText>
        <CustomText style={styles.contentText}>
          Please review the terms and conditions periodically for changes.
        </CustomText>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: /* statusBarHeight + 20 */ "20",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    marginHorizontal: "auto",
  },
  content: {
    flex: 1,
  },
  contentText: {
    fontSize: 16,
    marginBottom: 16,
  },
  lastUpdate: {
    fontSize: 12,
    marginBottom: 16,
    color: colors.neutral70,
  },
  blueText: {
    fontSize: 16,
    marginBottom: 16,
    color: colors.primary,
    fontFamily: "PoppinsSemiBold",
  },
});

export default TermsConditionsScreen;
