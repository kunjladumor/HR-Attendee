// colors.js
import { Appearance } from "react-native";

const colorsLight = {
  // Primary and secondary colors

  primary: "#3185ff", // Blue
  secondary: "#F44336", // Red
  primary2: "#A3D139", // Leaf Green
  secondary2: "#30BEB6", // Teal Green

  // Additional shades
  lightPrimary: "#B3D4FF", // Light Blue
  darkPrimary: "#005BBB", // Dark Blue
  lightSecondary: "#FFCDD2", // Light Red
  darkSecondary: "#D32F2F", // Dark Red

  // Text colors
  text: "#242124",
  text2: "#515151",
  text3: "#9E9E9E",

  // Neutral colors
  white: "#FFFFFF",
  black: "#242124",
  neutral10: "#F7F7F7",
  neutral20: "#E1E1E1",
  neutral30: "#CFCFCF",
  neutral40: "#B1B1B1",
  neutral50: "#9E9E9E",
  neutral60: "#7E7E7E",
  neutral70: "#626262",
  neutral80: "#515151",
  neutral90: "#3B3B3B",

  // Status colors
  success: "#4CAF50", // Green
  danger: "#F44336", // Red
  warning: "#FF9800", // Orange
  info: "#2196F3", // Light Blue

  // Background and surface colors
  background: "#F2F4F5", // Light Gray Background
  surface: "#FFFFFF", // Surface (cards, modals, etc.)
  overlay: "rgba(0, 0, 0, 0.5)", // Overlay for modals or loaders
};

// Dark Theme Colors
const colorsDark = {
  // Primary and secondary colors

  primary: "#3185ff", // Blue
  secondary: "#F44336", // Red
  primary2: "#A3D139", // Leaf Green
  secondary2: "#30BEB6", // Teal Green

  // Additional shades
  lightPrimary: "#B3D4FF", // Light Blue
  darkPrimary: "#005BBB", // Dark Blue
  lightSecondary: "#FFCDD2", // Light Red
  darkSecondary: "#D32F2F", // Dark Red

  text: "#FFFFFF", // White text for better contrast
  text2: "#E0E0E0", // Light Gray
  text3: "#BDBDBD", // Lighter Gray

  white: "#E0E0E0", // Light Gray for backgrounds
  black: "#121212", // Dark Black

  neutral10: "#3B3B3B",
  neutral20: "#515151",
  neutral30: "#626262",
  neutral40: "#7E7E7E",
  neutral50: "#9E9E9E",
  neutral60: "#B1B1B1",
  neutral70: "#CFCFCF",
  neutral80: "#E1E1E1",
  neutral90: "#F7F7F7",

  success: "#4CAF50", // Green
  danger: "#F44336", // Red
  warning: "#FF9800", // Orange
  info: "#64B5F6", // Lighter Blue

  background: "#121212", // Dark Gray Background
  surface: "#1E1E1E", // Dark Surface
  overlay: "rgba(255, 255, 255, 0.5)", // White overlay for contrast
};

// Function to return the appropriate colors based on system preference
const colors =
  Appearance.getColorScheme() === "dark" ? colorsDark : colorsLight;

export default colors;
