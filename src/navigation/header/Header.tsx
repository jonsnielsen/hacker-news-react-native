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
          marginRight: 8,
          fontWeight: "bold",
          alignSelf: "center",
          color: theme.colors.primary
        }}
      />
      {/* Total hack to get title to be centered on android */}
      {previous ? (
        <Appbar.BackAction style={{ opacity: 0 }} />
      ) : (
        <Appbar.Action style={{ opacity: 0 }} icon="menu"></Appbar.Action>
      )}
    </Appbar.Header>
  );
};

export default Header;
