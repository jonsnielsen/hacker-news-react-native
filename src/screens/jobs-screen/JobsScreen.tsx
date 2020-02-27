import React, { useEffect } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store";
import {
  StoriesState,
  StoriesActionTypes
} from "../../store/stories/stories.types";
import { ActivityIndicator, Text, useTheme } from "react-native-paper";
import StoryItem from "../../components/story-item";
import Layout from "../../components/layout";

import { StackNavigatorParamlist } from "../../types/NavigationTypes";

interface IProps {
  navigation?: StackNavigationProp<StackNavigatorParamlist>;
}

const JobsScreen: React.FC<IProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { jobStories, loading, error } = useSelector<AppState, StoriesState>(
    (state: AppState) => state.hackerNews
  );

  useEffect(() => {
    dispatch({ type: StoriesActionTypes.LOAD_JOB_STORIES_REQUEST });
  }, []);

  const data = jobStories.map(story => ({
    story,
    onPress: () => {
      navigation.navigate("StoryItem", { story, headerTitle: "Job" });
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

export default JobsScreen;
