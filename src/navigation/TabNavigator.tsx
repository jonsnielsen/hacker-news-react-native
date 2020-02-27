import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useTheme } from "react-native-paper";
import { RouteProp } from "@react-navigation/native";
import color from "color";
import { TopStoriesScreen, QuestionsScreen, JobsScreen } from "../screens";
import { StackNavigatorParamlist } from "../types/NavigationTypes";

const Tab = createMaterialBottomTabNavigator();

interface ITabNavigator {
  route: RouteProp<StackNavigatorParamlist, "FeedList">;
}

const TabNavigator: React.FC<ITabNavigator> = ({ route }) => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="News"
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
          name="News"
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
            tabBarIcon: "account-question",
            tabBarColor: theme.colors.background
          }}
        />
        <Tab.Screen
          name="Jobs"
          component={JobsScreen}
          options={{
            tabBarIcon: "coffee",
            tabBarColor: theme.colors.background
          }}
        />
      </Tab.Navigator>
    </React.Fragment>
  );
};

export default TabNavigator;
