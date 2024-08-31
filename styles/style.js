import { StyleSheet } from "react-native";
import colors from "../components/ColorStyles";
import { StatusBar } from "react-native";

// Get the status bar height
export const statusBarHeight = StatusBar.currentHeight;

export const CommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "500",
    fontFamily: "Poppins", // Apply custom font
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
  content: {
    flexGrow: 1,
    gap: 10,
    padding: 20,
    paddingTop: statusBarHeight + 20,
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
    flexDirection: "row-reverse",
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
    borderColor: colors.neutral20,
    backgroundColor: colors.neutral10,
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

export const ActivityStyles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  viewMore: {
    fontSize: 16,
    color: colors.primary,
  },
  card: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: colors.white,
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  icon: {},
  iconContainer: {
    backgroundColor: "#3185ff1A",
    padding: 5,
    marginRight: 10,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  time: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Poppins",
    lineHeight: 20,
  },
  date: {
    fontSize: 14,
    color: "#888",
  },
  stat: {
    fontSize: 14,
    color: "#888",
  },
});

export const SwipeStyles = StyleSheet.create({
  absoluteContainer: {
    position: "absolute",
    bottom: 90, // Adjust this value based on the height of your main tabs
    left: 0,
    right: 0,
    alignItems: "center",
  },
  container: {
    width: "90%",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    position: "absolute",
    alignSelf: "center",
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    position: "absolute",
    left: 5,
    backgroundColor: "#fff", // White background for the icon
  },
  checkedIn: {
    backgroundColor: colors.secondary, // Red color for checked-in status
  },
  checkedOut: {
    backgroundColor: colors.primary, // Blue color for checked-out status
  },
});

export const LeavesCard = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    shadowColor: "rgba(0, 0, 0, 0.2)", // Light black shadow color with reduced opacity
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2, // Increase opacity slightly to make the shadow more visible
    shadowRadius: 6, // Increase the radius to make the shadow softer
    elevation: 3, // Increase elevation for a more pronounced shadow on Android
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  status: {
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Poppins",
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: "center",
    borderRadius: 10,
  },
  approved: {
    color: colors.secondary2,
    backgroundColor: "#e6f4ea",
  },
  rejected: {
    color: colors.secondary,
    backgroundColor: "#fde8e8",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 16,
  },
  row: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    color: colors.neutral70,
  },
  value: {
    fontSize: 16,
    fontFamily: "Poppins",
    fontWeight: "500",
  },
});

export const LeavesGridStyles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    padding: 20,
    margin: 5,
    borderRadius: 20,
    borderWidth: 1, // Add border width to show the border color
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: "Poppins",
    fontWeight: "500",
    marginBottom: 5,
    textAlign: "left",
  },
  cardCount: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export const TabsStyle = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.neutral10,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: colors.neutral10,
  },
  tab: {
    flex: 1,
    padding: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  activeTab: {
    backgroundColor: colors.primary,
    borderRadius: 20,
  },
  tabText: {
    fontSize: 14,
    color: colors.primary,
    fontFamily: "Poppins",
  },
  activeTabText: {
    color: colors.white, // White color for active tab text
  },
  contentContainer: {
    paddingVertical: 20,
  },
});

export const LeaveRequestStyles = StyleSheet.create({
  leaveRequestContainer: {
    flexDirection: "column",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 8,
    shadowColor: "rgba(0, 0, 0, 0.2)", // Light black shadow color with reduced opacity
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2, // Increase opacity slightly to make the shadow more visible
    shadowRadius: 6, // Increase the radius to make the shadow softer
    elevation: 3, // Increase elevation for a more pronounced shadow on Android
    gap: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  header: {
    flexDirection: "row",
  },
  infoContainer: {
    flexDirection: "column",
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Poppins",
  },
  leaveDates: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: colors.neutral90,
  },
  actionsContainer: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#4CAF50",
    marginHorizontal: 5,
  },
  rejectButton: {
    backgroundColor: "#F44336",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
