import { StyleSheet } from "react-native";

export const CommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#007BFF",
    paddingVertical: 40,
    paddingHorizontal: 20,
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
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
    top: 0,
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
    gap: 15,
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
  loginButton: {
    backgroundColor: "#3185ff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  googleIcon: {
    width: 32,
    height: 32,
    marginRight: 10,
  },
  googleButtonText: {
    color: "#757575",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 32,
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
  },
  inputError: {
    borderColor: "red",
  },
});

export const CheckIn = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
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
