import React, { useState } from "react";
import { View, StyleSheet, TextInput, ScrollView } from "react-native";
import CustomText from "@components/CustomText"; // Import the CustomText component
import { CommonStyles } from "@styles/style"; // Import the common styles
import CustomButton from "@components/ButtonComponent"; // Import the CustomButton component
import Inputs from "@components/Inputs";
import colors from "@styles/ColorStyles";
import { Ionicons } from "@expo/vector-icons";
const EditProfileScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSave = ({ navigation }) => {
    // Add your logic to save the updated profile information
    // You can access the updated values from the state variables (name, email, phone, address)
    navigation.goBack(); // Navigate back to the previous screen after saving
  };

  return (
    <ScrollView contentContainerStyle={CommonStyles.container}>
      <View style={CommonStyles.content}>
        <View style={CommonStyles.row} styles={{ alignItems: "center" }}>
          <Ionicons
            name="chevron-back-outline"
            size={24}
            style={{ marginRight: 10 }}
            onPress={() => navigation.goBack()}
          />

          <CustomText style={CommonStyles.header}>Edit Profile</CustomText>
        </View>
        <Inputs
          label="Name"
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          defaultValue="John Doe"
        />
        <Inputs
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          defaultValue="johndoe@gmail.com"
        />
        <Inputs
          label="Phone"
          placeholder="Enter your phone number"
          value={phone}
          onChangeText={setPhone}
          defaultValue="9876543210"
        />
        <Inputs
          label="Address"
          placeholder="Enter your address"
          value={address}
          onChangeText={setAddress}
          defaultValue="123, ABC Street, XYZ City"
        />

        <CustomButton
          title="Save"
          onPress={handleSave}
          color="primary"
          padding={10}
          iconName="save-outline"
          iconSize={20}
          iconColor={colors.white}
          style={{
            alignSelf: "stretch",
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default EditProfileScreen;
