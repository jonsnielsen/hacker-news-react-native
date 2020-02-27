import React from "react";
import { Appbar, useTheme } from "react-native-paper";
import { StackHeaderProps } from "@react-navigation/stack";

interface IHeader extends StackHeaderProps {}
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
      {previous ? (
        <Appbar.BackAction onPress={() => navigation.pop()} />
      ) : (
        <Appbar.Action
          // @ts-ignore
          onPress={() => navigation.openDrawer()}
          icon="menu"
        ></Appbar.Action>
      )}
      <Appbar.Content
        title={title}
        titleStyle={{
          fontSize: 18,
          marginRight: 10,
          fontWeight: "bold",
          color: theme.colors.primary
        }}
      />
    </Appbar.Header>
  );
};

export default Header;
