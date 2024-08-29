import { StyleSheet } from "react-native";
const ButtonStyles = StyleSheet.create({
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },

  small: {
    padding: 10,
  },
  medium: {
    padding: 15,
  },
  large: {
    padding: 20,
  },
  primary: {
    backgroundColor: "#007bff",
  },
  outlinePrimary: {
    backgroundColor: "transparent",
    borderColor: "#007bff",
    borderWidth: 1,
    color: "#007bff",
  },
  outlinePrimarytext: {
    color: "#007bff",
  },
});
export default ButtonStyles;
