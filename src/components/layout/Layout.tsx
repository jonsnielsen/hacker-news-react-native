import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "./header";

interface IProps {
  children: any;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <View style={styles.layout}>
      <Header />

      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: "red"
  }
});

export default Layout;
