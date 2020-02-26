import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useTheme, Portal, FAB } from "react-native-paper";
import { RouteProp } from "@react-navigation/native";
import color from "color";
// import overlay from './overlay';
import { TopStoriesScreen, QuestionsScreen, JobsScreen } from "../screens";
// import { Message } from './message';
// import { Notifications } from './notifications';
import { StackNavigatorParamlist } from "../types/NavigationTypes";

const Tab = createMaterialBottomTabNavigator();

interface ITabNavigator {
  route: RouteProp<StackNavigatorParamlist, "FeedList">;
}

const TabNavigator: React.FC<ITabNavigator> = ({ route }) => {
  const theme = useTheme();

  // const tabBarColor = theme.dark
  //   ? (overlay(6, theme.colors.surface) as string)
  //   : theme.colors.surface;

  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="Feed"
        backBehavior="initialRoute"
        shifting={true}
        activeColor={theme.colors.primary}
        inactiveColor={color(theme.colors.text)
          .alpha(0.6)
          .rgb()
          .string()}
        sceneAnimationEnabled={false}
      >
        <Tab.Screen
          name="Feed"
          component={TopStoriesScreen}
          options={{
            tabBarIcon: "home",
            tabBarColor: theme.colors.background
          }}
        />
        <Tab.Screen
          name="Questions"
          component={QuestionsScreen}
          options={{
            tabBarIcon: "home",
            tabBarColor: theme.colors.background
            // tabBarIcon: "head-question"
            // tabBarColor
          }}
        />
        <Tab.Screen
          name="Jobs"
          component={JobsScreen}
          options={{
            // tabBarIcon: "post"
            tabBarIcon: "home",
            tabBarColor: theme.colors.background
          }}
        />
      </Tab.Navigator>
    </React.Fragment>
  );
};

export default TabNavigator;
