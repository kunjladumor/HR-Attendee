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
