import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useTheme, Portal, FAB } from "react-native-paper";
import { useSafeArea } from "react-native-safe-area-context";
import { useIsFocused, RouteProp } from "@react-navigation/native";

// import overlay from './overlay';
import { HomeScreen, NotificationsScreen, MessageScreen } from "../screens";
// import { Message } from './message';
// import { Notifications } from './notifications';
import { StackNavigatorParamlist } from "../types/NavigationTypes";

const Tab = createMaterialBottomTabNavigator();

interface IProps {
  route: RouteProp<StackNavigatorParamlist, "FeedList">;
}

const BottomTabs: React.FC<IProps> = ({ route }) => {
  // const routeName = route.state
  //   ? route.state.routes[route.state.index].name
  //   : "Feed";

  const routeName = "bla";
  const theme = useTheme();
  const safeArea = useSafeArea();
  const isFocused = useIsFocused();

  let icon = "feather";

  // switch (routeName) {
  //   case "Messages":
  //     icon = "email-plus-outline";
  //     break;
  //   default:
  //     icon = "feather";
  //     break;
  // }

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
        // inactiveColor={color(theme.colors.text)
        //   .alpha(0.6)
        //   .rgb()
        //   .string()}
        sceneAnimationEnabled={false}
      >
        <Tab.Screen
          name="Feed"
          component={HomeScreen}
          options={{
            tabBarIcon: "home-account"
            // tabBarColor
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            tabBarIcon: "bell-outline"
            // tabBarColor
          }}
        />
        <Tab.Screen
          name="Messages"
          component={MessageScreen}
          options={{
            tabBarIcon: "message-text-outline"
            // tabBarColor
          }}
        />
      </Tab.Navigator>
      <Portal>
        <FAB
          visible={isFocused}
          icon={icon}
          style={{
            position: "absolute",
            bottom: safeArea.bottom + 65,
            right: 16
          }}
          color="white"
          theme={{
            colors: {
              accent: theme.colors.primary
            }
          }}
          onPress={() => {}}
        />
      </Portal>
    </React.Fragment>
  );
};
