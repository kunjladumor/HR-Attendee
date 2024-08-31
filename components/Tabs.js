import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import colors from "./ColorStyles";
import { TabsStyle } from "../styles/style";

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

export default Tabs;
