import { StyleSheet } from "react-native";
import colors from "@styles/ColorStyles";
import { StatusBar, Platform } from "react-native";

// Get the status bar height
export const statusBarHeight =
  Platform.OS === "android" ? StatusBar.currentHeight : 30;

// import { StatusBar } from "react-native";
// // Get the status bar height
// export const statusBarHeight = StatusBar.currentHeight;

export const CommonStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    minHeight: "100%",
  },
  poppinsFont: {
    fontFamily: "Poppins", // Apply custom font
    fontWeight: "500",
  },
  CustomText: {
    lineHeight: 1.5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 24,
    gap: 10,
    fontWeight: "500",
    fontFamily: "PoppinsMedium", // Apply custom font
    color: colors.text,
  },
  subHeader: {
    fontSize: 16,
    color: colors.neutral70,
    fontFamily: "PoppinsMedium", // Apply custom font
  },

  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowSpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    gap: 10,
    padding: 20,
    paddingTop: /* statusBarHeight + 20 */ 0,
    paddingBottom: 90,
  },

  centerIcon: {
    justifyContent: "center",
    alignItems: "center",
    top: 10,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.primary,
  },
});
