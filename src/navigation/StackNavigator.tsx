import React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, NewsStoryScreen } from "../screens";
import { Header } from "../components/layout";

const Stack = createStackNavigator();

interface IProps {}

const StackNavigator: React.FC<IProps> = () => {
  return (
    <Stack.Navigator
      initialRouteName="Feed"
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        )
      }}
    >
      <Stack.Screen
        name="Feed"
        component={HomeScreen}
        // options={{ headerTitle: "HackerNews " }}
      />
      <Stack.Screen
        name="News Story"
        component={NewsStoryScreen}
        options={{ headerTitle: "News Story" }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default StackNavigator;
