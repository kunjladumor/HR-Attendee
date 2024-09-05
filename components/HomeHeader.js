import { View, Image, StyleSheet } from "react-native";
import { CommonStyles } from "../styles/style";
import CustomText from "../components/CustomText";
import CustomButton from "./ButtonComponent";
import colors from "../styles/ColorStyles";

export const HomeHeader = ({ navigation }) => {
  return (
    <View style={[CommonStyles.header, HomeScreens.header]}>
      <View style={HomeScreens.headerContainer}>
        <Image
          style={HomeScreens.userImage}
          source={require("../assets/images/user.png")} // Adjust the path as necessary
        />
        <View style={HomeScreens.headerContent}>
          <CustomText style={HomeScreens.userName}>Michael Mitc</CustomText>
          <CustomText style={HomeScreens.userDesignation}>
            Lead UI/UX Designer
          </CustomText>
        </View>
      </View>
      <View style={HomeScreens.headerIcon}>
        <CustomButton
          color="neutral50"
          outlined={true}
          padding={0}
          onPress={() => navigation.navigate("Notifications")}
          iconName="notifications-outline"
          iconSize={24}
          iconColor="#000"
          style={HomeScreens.notificationButton}
        />
      </View>
    </View>
  );
};

const HomeScreens = StyleSheet.create({
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
    alignItems: "center",
    gap: 10,
  },
  headerContent: {
    flexDirection: "column",
  },

  userName: {
    fontSize: 20,
    color: colors.neutral90,
    fontFamily: "PoppinsSemiBold",
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

export default HomeHeader;
