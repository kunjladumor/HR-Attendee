import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomText from "../components/CustomText";
import LeavesGrid from "../components/LeavesGrid"; // Import the LeavesGrid component
import Tabs from "../components/Tabs";
import LeavesList from "../components/LeavesList"; // Import the LeavesList component
import { CommonStyles } from "../styles/style";
import LeaveRequest from "../components/LeaveRequest"; // Import the LeaveRequest component
import CustomButton from "../components/ButtonComponent";
import colors from "../styles/ColorStyles";
import FiltersModal from "../components/FiltersModal"; // Import the FiltersModal component

const LeavesScreen = () => {
  const navigation = useNavigation();

  const [isModalVisible, setModalVisible] = useState(false);
  const [filters, setFilters] = useState({
    status: "",
    type: "",
    teamMember: "",
  });

  const leaves = [
    {
      date: "2023-10-01",
      dateRange: "Apr 15, 2023 - Apr 18, 2023",
      status: "Approved",
      applyDays: 5,
      leaveBalance: 10,
      approvedBy: "Manager A",
    },
    {
      date: "2023-09-15",
      dateRange: "Apr 15, 2023 - Apr 18, 2023",
      status: "Rejected",
      applyDays: 6,
      leaveBalance: 8,
      approvedBy: "Manager B",
    },
  ];

  const leaveRequests = [
    {
      profileImage: require("../assets/images/user.png"), // Ensure the path is correct
      name: "John Doe",
      leaveDates: "2023-10-01 to 2023-10-05",
      startDate: "2023-10-01",
      endDate: "2023-10-05",
      title: "Family Emergency",
      leaveType: "Personal Leave",
      contactNumber: "123-456-7890",
      leaveApplied: "2023-09-25",
      leaveStatus: "Pending",
      approvedBy: "Manager A",
      reason:
        "I need to attend to a family emergency and will be unavailable during this period.",
    },
    {
      profileImage: require("../assets/images/user.png"), // Ensure the path is correct
      name: "Jane Smith",
      leaveDates: "2023-09-15 to 2023-09-20",
      startDate: "2023-09-15",
      endDate: "2023-09-20",
      title: "Medical Leave",
      leaveType: "Sick Leave",
      contactNumber: "987-654-3210",
      leaveApplied: "2023-09-25",
      leaveStatus: "Pending",
      approvedBy: "Manager A",
      reason: "I am unwell and need to take some time off to recover.",
    },
  ];

  const tabs = [
    { title: "Upcoming", content: <LeavesList leaves={leaves} /> },
    { title: "Past", content: <LeavesList leaves={leaves} /> },
    {
      title: "Team leaves",
      content: (
        <LeaveRequest
          leaveRequests={leaveRequests}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      ),
    },
  ];

  const handleApprove = (index) => {
    console.log(`Approved leave request ${index}`);
  };

  const handleReject = (index) => {
    console.log(`Rejected leave request ${index}`);
  };

  const handleApplyFilters = () => {
    // Apply the filters logic here
    setModalVisible(false);
  };

  const handleResetFilters = () => {
    setFilters({
      status: "",
      type: "",
      teamMember: "",
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        ListHeaderComponent={
          <View style={CommonStyles.content}>
            <View style={CommonStyles.rowSpaceBetween}>
              <CustomText style={CommonStyles.header}>All Leaves</CustomText>
              <View style={CommonStyles.row}>
                <CustomButton
                  color={"transparent"}
                  borderRadius={10}
                  style={{ marginRight: 10, fontWeight: "bold" }}
                  iconName={"create-outline"}
                  iconSize={24}
                  iconColor={colors.black}
                  onPress={() => navigation.navigate("ApplyLeave")}
                />
                <CustomButton
                  color={"transparent"}
                  borderRadius={10}
                  iconName={"options-outline"}
                  iconSize={24}
                  iconColor={colors.black}
                  onPress={() => setModalVisible(true)}
                />
              </View>
            </View>
            <LeavesGrid />
            <Tabs tabs={tabs} />
          </View>
        }
        data={[]} // Empty data to render the header component
        renderItem={null} // No need to render any items
        keyExtractor={(item, index) => index.toString()}
      />
      <FiltersModal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        filters={filters}
        setFilters={setFilters}
        onApply={handleApplyFilters}
        onReset={handleResetFilters}
      />
    </View>
  );
};

export default LeavesScreen;
