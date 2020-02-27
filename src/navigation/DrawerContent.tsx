import React from "react";
import { View, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
  DrawerNavigationProp
} from "@react-navigation/drawer";
import {
  useTheme,
  Button,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from "react-native-paper";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useToggleTheme } from "../theme/ToggleTheme";

interface IProps
  extends DrawerContentComponentProps<DrawerNavigationProp<any>> {}

const DrawerContent: React.FC<IProps> = props => {
  const { navigation } = props;
  const theme = useTheme();
  const { isLightTheme, toggleTheme } = useToggleTheme();
  return (
    <DrawerContentScrollView
      style={{
        backgroundColor: theme.colors.surface
      }}
      {...props}
    >
      <View
        style={[
          styles.drawerContent,
          {
            backgroundColor: theme.colors.surface
          }
        ]}
      >
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
          <View style={styles.preference}>
            <Text>RTL</Text>
            <Switch value={false} />
          </View>
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1
  },
  userInfoSection: {
    paddingLeft: 20
  },
  title: {
    marginTop: 20,
    fontWeight: "bold"
  },
  caption: {
    fontSize: 14,
    lineHeight: 14
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3
  },
  drawerSection: {
    marginTop: 15
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16
  }
});

export default DrawerContent;
