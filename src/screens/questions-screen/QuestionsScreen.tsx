import React from "react";
import { View, StyleSheet } from "react-native";
import { RouteProp } from "../top-stories-screen/node_modules/@react-navigation/native";
import { IStory } from "../../types/Story";
import { StackNavigatorParamlist } from "../../types/NavigationTypes";

interface IProps {
  route: RouteProp<StackNavigatorParamlist, "NewsStory">;
}

const NewsStoryScreen: React.FC<IProps> = ({ route }) => {
  return <View>New notification</View>;
};

const styles = StyleSheet.create({});

export default NewsStoryScreen;
