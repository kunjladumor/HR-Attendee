import fs from "fs";

const alternativeSplashImage = "./assets/alternative-splash.jpg";
const defaultSplashImage = "./assets/splash.png";

const splashImage = fs.existsSync(alternativeSplashImage)
  ? alternativeSplashImage
  : defaultSplashImage;

export default {
  expo: {
    name: "hr-attendance-app",
    slug: "hr-attendance-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: splashImage,
    userInterfaceStyle: "automatic",
    splash: {
      image: splashImage,
      resizeMode: "cover",
      //   backgroundColor: colors.background,
    },

    ios: {
      supportsTablet: true,
      infoPlist: {
        NSLocationWhenInUseUsageDescription:
          "We need your location to show your position on the map",
        NSLocationAlwaysUsageDescription:
          "We need your location to show your position on the map",
      },
    },
    android: {
      package: "com.cyberax.hrattendee",
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        // backgroundColor: colors.background,
      },
      permissions: ["ACCESS_FINE_LOCATION", "ACCESS_COARSE_LOCATION"],
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "d2d51adf-bca5-41a3-8356-ef0eaed26981",
      },
    },
  },
};
