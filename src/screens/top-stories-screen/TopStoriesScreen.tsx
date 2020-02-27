import React, { useEffect, useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store";
import {
  StoriesState,
  StoriesActionTypes
} from "../../store/stories/stories.types";
import {
  ActivityIndicator,
  Title,
  Text,
  Switch,
  useTheme
} from "react-native-paper";
import StoryItem from "../../components/story-item";
import Layout from "../../components/layout";

import { StackNavigatorParamlist } from "../../types/NavigationTypes";
import { IStory } from "../../types/Story";

interface IProps {
  navigation?: StackNavigationProp<StackNavigatorParamlist>;
}

const TopStoriesScreen: React.FC<IProps> = ({ navigation }) => {
  // const [stories, setStories] = useState<IStory[]>([]);
  const dispatch = useDispatch();
  const theme = useTheme();
  const { newsStories, loading, error } = useSelector<AppState, StoriesState>(
    (state: AppState) => state.hackerNews
  );

  useEffect(() => {
    dispatch({ type: StoriesActionTypes.LOAD_NEWS_STORY_REQUEST });
  }, []);

  // useEffect(() => {
  //   if (!loading && storiesFromRedux.length) {
  //     setStories(storiesFromRedux);
  //   }
  // }, [loading]);
  console.log("re-render");
  console.log("-----------e-render");

  const data = newsStories.map(story => ({
    story,
    onPress: () => {
      navigation.navigate("StoryItem", { story, headerTitle: "News" });
    }
  }));

  return (
    <Layout>
      {loading ? (
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator animating={true} />
        </View>
      ) : error ? (
        <Text>An Error has ocurred!</Text>
      ) : (
        <FlatList
          data={data}
          contentContainerStyle={{ backgroundColor: theme.colors.background }}
          // style={{ backgroundColor: theme.colors.background }}
          keyExtractor={item => item.story.id.toString()}
          renderItem={({ item }) => <StoryItem {...item} />}
          ItemSeparatorComponent={() => (
            <View style={{ height: StyleSheet.hairlineWidth }} />
          )}
        />
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  activityIndicatorWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

// const STitle = styled.Text`
//   ${({ theme }) => `
//     color: ${theme.palette.primary};
//     font-size:  ${theme.fontSize.h1};
//     font-family: ${theme.fontFamily.primary.bold}
//   `}
//   text-align: left;
//   align-self: flex-start;
//   margin-vertical: 30px;
// `;

export default TopStoriesScreen;
