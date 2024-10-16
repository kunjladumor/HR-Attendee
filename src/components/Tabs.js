import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import colors from "@styles/ColorStyles";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <ScrollView style={TabsStyle.container}>
      <View style={TabsStyle.tabContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[TabsStyle.tab, activeTab === index && TabsStyle.activeTab]}
            onPress={() => setActiveTab(index)}
          >
            <Text
              style={[
                TabsStyle.tabText,
                activeTab === index && TabsStyle.activeTabText,
              ]}
            >
              {tab.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={TabsStyle.contentContainer}>
        {tabs[activeTab] && tabs[activeTab].content}
      </View>
    </ScrollView>
  );
};

const TabsStyle = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: colors.surface,
  },
  tab: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  activeTab: {
    backgroundColor: colors.primary,
    borderRadius: 10,
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

export default Tabs;
