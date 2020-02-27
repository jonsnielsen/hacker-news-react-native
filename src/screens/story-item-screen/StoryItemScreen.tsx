import React from "react";
import {
  StyleSheet,
  View,
  Linking,
  TouchableWithoutFeedback
} from "react-native";
import { Text, Title, useTheme } from "react-native-paper";
import { RouteProp } from "@react-navigation/native";
import { StackNavigatorParamlist } from "../../types/NavigationTypes";
import { IStory } from "../../types/Story";
import Layout from "../../components/layout";
import { contentColor, fadedColor } from "../../theme/theme";
import StoryItem from "../../components/story-item";

interface IProps {
  route: RouteProp<StackNavigatorParamlist, "StoryItem">;
}

const NewsStoryScreen: React.FC<IProps> = ({ route }) => {
  const story = route.params.story;
  const {
    author,
    dead,
    descendants,
    score,
    kids,
    simplifiedUrl,
    url,
    time,
    title,
    type,
    text,
    poll
  } = story;
  const theme = useTheme();
  return (
    <Layout>
      <StoryItem story={story} onPress={() => {}} />
      {text && <Text style={{ color: contentColor }}>{text}</Text>}
    </Layout>
  );
  // const {} = route.params
  //   return   <View
  //   style={[styles.container, { backgroundColor: theme.colors.background }]}
  // >
  //   <Text style={[{ color: supportColor }]}>{simplifiedUrl}</Text>
  //   <Title style={{ color: titleColor }}>{title}</Title>
  //   <View style={styles.bottomRow}>
  //     <View style={styles.iconContainer}>
  //       <MaterialCommunityIcons
  //         size={18}
  //         name="star-outline"
  //         color={supportColor}
  //       />
  //       <Caption style={styles.iconDescription}>{score}</Caption>
  //     </View>
  //     <Caption style={[styles.iconDescription, styles.iconContainer]}>
  //       by: {authorId}
  //     </Caption>
  //     <View style={styles.iconContainer}>
  //       <MaterialCommunityIcons
  //         size={18}
  //         name="heart-outline"
  //         color={supportColor}
  //       />
  //       <Caption style={styles.iconDescription}>{karma}</Caption>
  //     </View>;
};

const styles = StyleSheet.create({});

export default NewsStoryScreen;
