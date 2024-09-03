import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";

// Get the status bar height
export const statusBarHeight = StatusBar.currentHeight;

export const CommonStyles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },
  poppinsFont: {
    fontFamily: "Poppins", // Apply custom font
    fontWeight: "500",
  },
  header: {
    fontSize: 24,
    fontWeight: "500",
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
  headerText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  CustomText: {
    lineHeight: 1.5,
  },
  content: {
    gap: 10,
    padding: 20,
    paddingTop: statusBarHeight + 20,
    paddingBottom: 90,
  },
  welcomeText: {
    fontSize: 28,
    marginBottom: 10,
    textAlign: "center",
    color: "#333",
  },
  description: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: "center",
    color: "#666",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#FF6347",
    borderRadius: 5,
    justifyContent: "center",
  },

  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  centerIcon: {
    justifyContent: "center",
    alignItems: "center",
    top: 10,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#3185ff",
  },
});
