import React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { StoryItemScreen } from "../screens";
import Header from "./header";
import TabNavigator from "./TabNavigator";
import { useTheme, Appbar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();

interface IProps {}

const StackNavigator: React.FC<IProps> = () => {
  const theme = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Feed"
      headerMode="screen"
      screenOptions={{
        header: headerProps => <Header {...headerProps} />
      }}
    >
      <Stack.Screen
        name="Feed"
        component={TabNavigator}
        options={({ route }) => {
          // @ts-ignore
          let headerTitle = route.state?.routes[route.state.index].name;
          headerTitle =
            headerTitle && headerTitle !== "Feed" ? (
              headerTitle
            ) : (
              <MaterialCommunityIcons
                name="hackernews"
                size={40}
                color={theme.colors.primary}
              />
            );

          return { headerTitle };
          // headerTitleStyle: {textAlign:'center', alignSelf:'center',flex:1}  https://github.com/react-navigation/react-navigation/issues/253
        }}
      />

      {/* <Stack.Screen
        name="FeedList"
        component={BottomTabs}
        options={({ route }) => {
          console.log('!@# options', { route });
          const routeName = route.state
            ? route.state.routes[route.state.index].name
            : 'Feed';
          return { headerTitle: routeName };
        }}
      /> */}

      <Stack.Screen
        name="StoryItem"
        component={StoryItemScreen}
        options={{ headerTitle: "Bla" }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default StackNavigator;
