import React from "react";
import { View, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigatorParamlist } from "../../types/NavigationTypes";
import { IStory } from "../../types/Story";

interface IProps {
  story: IStory;
  route: RouteProp<StackNavigatorParamlist, "StoryItem">;
}

const NewsStoryScreen: React.FC<IProps> = ({ route }) => {
  // const {} = route.params
  return <View>Story Item Screen</View>;
};

const styles = StyleSheet.create({});

export default NewsStoryScreen;
