import React from "react";
import { View, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
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

interface IProps {
  // navigation: DrawerNavigationProp<{}>;
}
// @ts-ignore
const DrawerContent: React.FC<IProps> = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.drawerContent}>
        {/* <View style={styles.userInfoSection}> */}
        {/* <Avatar.Image
            source={{
              uri:
                "https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg"
            }}
            size={50}
          /> */}
        {/* <Button onPress={() => {}} icon="backburger" /> */}
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="menu-open"
              color={color}
              size={size}
            />
          )}
          label=""
          // icon="backburger"
          // label="Preferences"
          onPress={() => {
            navigation.closeDrawer();
          }}
        />
        {/* </View> */}
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="tune" color={color} size={size} />
            )}
            label="Preferences"
            onPress={() => {}}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="bookmark-outline"
                color={color}
                size={size}
              />
            )}
            label="Bookmarks"
            onPress={() => {}}
          />
        </Drawer.Section>
        <Drawer.Section title="Preferences">
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch value={false} />
              </View>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text>RTL</Text>
              <View pointerEvents="none">
                <Switch value={false} />
              </View>
            </View>
          </TouchableRipple>
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
