import React from "react";
import { TouchableOpacity } from "react-native";
import { Appbar, Avatar, Button, useTheme } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StackHeaderProps } from "@react-navigation/stack";

interface IHeader extends StackHeaderProps { }
const Header: React.FC<IHeader> = ({ scene, previous, navigation }) => {
  const theme = useTheme();
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
        ? options.title
        : scene.route.name;

  return (
    <Appbar.Header theme={{ colors: { primary: theme.colors.background } }}>
      {/* // <Appbar.Header> */}
      {previous ? (
        <Appbar.BackAction
          onPress={() => navigation.pop()}
        // color={theme.colors.primary}
        />
      ) : (
          <Appbar.Action
            // @ts-ignore
            onPress={() => navigation.openDrawer()}
            icon="menu"
          ></Appbar.Action>
        )}
      <Appbar.Content
        title={
          title === "Feed" ? (
            <MaterialCommunityIcons name="hackernews" size={40} color={theme.colors.primary} />
          )
            : (
              title
            )
        }
        titleStyle={{
          fontSize: 18,
          fontWeight: 'bold',
          color: theme.colors.primary,
        }}
      />
    </Appbar.Header>
  );
};

export default Header;
