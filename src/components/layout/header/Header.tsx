import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface IProps {}

const Header: React.FC<IProps> = () => {
  return (
    <View style={styles.header}>
      {/* <MaterialCommunityIcons name="md-hackernews" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  header: { width: "100%", height: 30, backgroundColor: "blue" }
});

export default Header;
