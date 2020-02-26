import React from "react";
import { View, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigatorParamlist } from "../../types/NavigationTypes";

interface IProps {
  route: RouteProp<StackNavigatorParamlist, "StoryItem">;
}

const NewsStoryScreen: React.FC<IProps> = ({ route }) => {
  return <View>Story Item Screen</View>;
};

const styles = StyleSheet.create({});

export default NewsStoryScreen;
