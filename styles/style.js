import { StyleSheet } from "react-native";
import colors from "../components/Colors/ColorStyles";
import * as Device from "expo-device";
import { StatusBar } from "react-native";

// Function to check if the device has a notch
const hasNotch =
  Device.modelName.includes("iPhone X") ||
  Device.modelName.includes("iPhone 11") ||
  Device.modelName.includes("iPhone 12") ||
  Device.modelName.includes("iPhone 13") ||
  Device.modelName.includes("iPhone 14") ||
  Device.modelName.includes("Pixel 3 XL") ||
  Device.modelName.includes("Pixel 4 XL") ||
  Device.modelName.includes("Pixel 5") ||
  Device.modelName.includes("Pixel 6");

// Get the status bar height
export const statusBarHeight = StatusBar.currentHeight;

export const CommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#007BFF",
    marginVertical: 20,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  content: {
    flexGrow: 1,
    // justifyContent: "center",
    // alignItems: "center",
    gap: 10,
    padding: 20,
    paddingTop: statusBarHeight, // Conditional padding based on notch status
    paddingBottom: 150,
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

export const login = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    gap: 10,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "left",
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "Poppins", // Apply custom font
  },
  subtitle: {
    fontSize: 17,
    color: "gray",
    marginBottom: 20,
    fontFamily: "Poppins", // Apply custom font
  },

  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
  blueText: {
    color: "#3185ff",
    fontWeight: "bold",
  },
  forgotPassword: {
    color: "#3185ff",
    textAlign: "right",
    marginBottom: 20,
  },
  // loginButton: {
  //   backgroundColor: "#3185ff",
  //   padding: 10,
  //   borderRadius: 5,
  //   alignItems: "center",
  //   marginBottom: 20,
  // },
  // loginButtonText: {
  //   color: "#fff",
  //   fontSize: 16,
  //   fontWeight: "bold",
  // },
  // googleButton: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   backgroundColor: "#ffffff",
  //   padding: 10,
  //   borderRadius: 5,
  //   marginTop: 20,
  //   borderWidth: 1,
  //   borderColor: "#ddd",
  // },
  googleIcon: {
    width: 32,
    height: 32,
  },
  // googleButtonText: {
  //   color: "#757575",
  //   fontSize: 16,
  //   fontWeight: "bold",
  //   lineHeight: 32,
  // },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  registerText: {
    fontSize: 16,
    fontFamily: "Poppins", // Apply custom font
  },
  registerLink: {
    fontSize: 16,
    color: "#3185ff",
    marginLeft: 5,
    fontFamily: "Poppins", // Apply custom font
  },

  inputWrapper: {
    marginBottom: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#3185ff",
    padding: 8,
    borderRadius: 5,
    position: "relative",
  },
  input: {
    height: 40,
    fontSize: 16,
    color: "#000",
    fontFamily: "Poppins", // Apply custom font
    padding: 5,
  },
  inputError: {
    borderColor: "red",
  },
});

export const CheckIn = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
    gap: 10,
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    textAlign: "center",
    color: "#333",
  },
  checkInButton: {
    width: "100%",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#28a745",
    borderRadius: 5,
    alignItems: "center",
  },
  checkOutButton: {
    width: "100%",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#dc3545",
    borderRadius: 5,
    alignItems: "center",
  },
  trackCheckInsButton: {
    width: "100%",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
    alignItems: "center",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
});

export const HomeScreen = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    backgroundColor: "transparent",
    paddingHorizontal: 0,
    fontFamily: "Poppins",
  },

  headerContainer: {
    flexDirection: "row",
    gap: 10,
  },
  headerContent: {
    flexDirection: "column",
  },

  userName: {
    fontSize: 20,
    color: colors.neutral90,
    fontWeight: "bold",
    fontFamily: "Poppins",
  },
  userDesignation: {
    fontSize: 16,
    color: colors.neutral60,
    fontFamily: "Poppins",
  },
  userImage: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 50,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const CalendarStyles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  listContainer: {
    paddingBottom: 10,
  },
  item: {
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: colors.neutral30,
  },
  activeItem: {
    backgroundColor: "#007bff", // Active background color
  },
  date: {
    fontSize: 24,
    fontWeight: "bold",
  },
  activeDate: {
    color: "white", // Active date color
  },
  day: {
    fontSize: 16,
    color: "gray",
  },
  activeDay: {
    color: "white", // Active day color
  },
});

export const AttendanceStyles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: "Poppins",
    marginBottom: 10,
    fontWeight: "500",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%", // Adjust width to fit 2 cards per row
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 36,
    backgroundColor: "#007bff1A",
    justifyContent: "center",
    alignItems: "center",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  cardTitle: {
    marginLeft: 8,
    fontSize: 14,
    color: colors.neutral60,
    flexWrap: "wrap",
  },
  cardValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  stat: {
    fontSize: 14,
    fontFamily: "Poppins",
  },
});
