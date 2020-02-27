import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

interface IProps {}

const Layout: React.FC<IProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <View style={[styles.wrapper, { backgroundColor: theme.colors.surface }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 15,
    paddingVertical: 15,
    paddingHorizontal: 20
  }
});

export default Layout;
