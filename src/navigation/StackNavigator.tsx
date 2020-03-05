import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { StoryItemScreen } from "../screens";
import Header from "./header";
import TabNavigator from "./TabNavigator";
import { useTheme } from "react-native-paper";
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
        header: headerProps => <Header {...headerProps} />,
        // headerLeft: headerProps => <Header {...headerProps} />,
        headerRight: () => (
          <View>
            <Text>hello</Text>
          </View>
        )
      }}
    >
      <Stack.Screen
        name="Feed"
        component={TabNavigator}
        options={({ route }) => {
          // @ts-ignore
          let headerTitle = route.state?.routes[route.state.index].name;
          headerTitle =
            headerTitle && headerTitle !== "News" ? (
              headerTitle
            ) : (
              <MaterialCommunityIcons
                name="hackernews"
                size={40}
                color={theme.colors.primary}
              />
            );
          return { headerTitle };
        }}
      />

      <Stack.Screen
        name="StoryItem"
        component={StoryItemScreen}
        options={({ route }) => {
          // @ts-ignore
          return { headerTitle: route.params.headerTitle };
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
