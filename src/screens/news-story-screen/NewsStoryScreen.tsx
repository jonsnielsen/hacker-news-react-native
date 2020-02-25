import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { INewsStory } from "../../types/NewsStory";
import { StackNavigatorParamlist } from "../../types/NavigationTypes";

interface IProps {
  route: RouteProp<StackNavigatorParamlist, "NewsStory">;
}

const NewsStoryScreen: React.FC<IProps> = ({ route }) => {
  return <Text>New sotry</Text>;
};

const styles = StyleSheet.create({});

export default NewsStoryScreen;
