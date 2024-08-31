import { View, Image } from "react-native";
import { CommonStyles, HomeScreen } from "../styles/style";
import CustomText from "../components/CustomText";
import CustomButton from "./ButtonComponent";

export const HomeHeader = () => {
  return (
    <View style={[CommonStyles.header, HomeScreen.header]}>
      <View style={HomeScreen.headerContainer}>
        <Image
          style={HomeScreen.userImage}
          source={require("../assets/images/user.png")} // Adjust the path as necessary
        />
        <View style={HomeScreen.headerContent}>
          <CustomText style={HomeScreen.userName}>Michael Mitc</CustomText>
          <CustomText style={HomeScreen.userDesignation}>
            Lead UI/UX Designer
          </CustomText>
        </View>
      </View>
      <View style={HomeScreen.headerIcon}>
        <CustomButton
          color="neutral50"
          outlined={true}
          padding={0}
          // onPress={() => navigation.navigate("Notifications")}
          iconName="notifications-outline"
          iconSize={24}
          iconColor="#000"
          style={HomeScreen.notificationButton}
        />
      </View>
    </View>
  );
};
export default HomeHeader;
