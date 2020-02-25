import React from "react";
import { TouchableOpacity } from "react-native";
import { Appbar, Avatar, Button } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface IHeader {
  scene: any;
  previous: any;
  navigation: any;
}

const Header: React.FC<IHeader> = ({ scene, previous, navigation }) => {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header>
      {/* <Appbar.Header theme={{ colors: { primary: theme.colors.surface } }}> */}
      {previous ? (
        <Appbar.BackAction
          onPress={navigation.pop}
          // color={theme.colors.primary}
        />
      ) : (
        <Appbar.Action
          onPress={() => navigation.openDrawer()}
          icon="menu"
        ></Appbar.Action>
        // <TouchableOpacity
        //   onPress={() => {
        //     navigation.openDrawer();
        //   }}
        // >
        //   <Button icon="hamburger-menu"></Button>
        // {/* <Avatar.Image
        //   size={40}
        //   source={{
        //     uri:
        //       "https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg"
        //   }}
        // /> */}
        // </TouchableOpacity>
      )}
      <Appbar.Content
        title={
          previous ? title : <MaterialCommunityIcons name="twitter" size={40} />
        }
      />
    </Appbar.Header>
  );
};

export default Header;
