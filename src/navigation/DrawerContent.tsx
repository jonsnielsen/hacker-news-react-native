import React from "react";
import { View, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
  DrawerNavigationProp
} from "@react-navigation/drawer";
import { useTheme, Drawer, Text, Switch } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useToggleTheme } from "../theme/ToggleThemeContent";

interface IProps
  extends DrawerContentComponentProps<DrawerNavigationProp<any>> {}

const DrawerContent: React.FC<IProps> = props => {
  const { navigation } = props;
  const theme = useTheme();
  const { isLightTheme, toggleTheme } = useToggleTheme();
  return (
    <DrawerContentScrollView
      style={{
        backgroundColor: theme.colors.background
      }}
      {...props}
    >
      <View style={[styles.drawerContent]}>
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="menu-open"
              color={theme.colors.text}
              size={size}
            />
          )}
          label=""
          onPress={() => {
            // @ts-ignore
            navigation.closeDrawer();
          }}
        />
        <Drawer.Section style={styles.drawerSection} title="Preferences">
          <View style={styles.preference}>
            <Text>Dark Theme</Text>
            <Switch
              color={theme.colors.primary}
              onValueChange={toggleTheme}
              value={!isLightTheme}
            />
          </View>
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    fontWeight: "bold"
  },
  drawerSection: {
    marginTop: 15
  },
  drawerContent: {
    flex: 1
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16
  }
});

export default DrawerContent;
