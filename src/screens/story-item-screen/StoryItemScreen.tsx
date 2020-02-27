import React, { useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text, ActivityIndicator } from "react-native-paper";
import { RouteProp } from "@react-navigation/native";
import { StackNavigatorParamlist } from "../../types/NavigationTypes";
import Layout from "../../components/layout";
import Comment from "../../components/comment";
import { AppState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import StoryItem from "../../components/story-item";
import {
  CommentsState,
  CommentsActionTypes
} from "../../store/comments/comments.types";
import WebView from "../../components/web-view";

interface IProps {
  route: RouteProp<StackNavigatorParamlist, "StoryItem">;
}

const NewsStoryScreen: React.FC<IProps> = ({ route }) => {
  const story = route.params.story;
  const { kids, text } = story;

  const dispatch = useDispatch();
  const { comments, loading, error } = useSelector<AppState, CommentsState>(
    (state: AppState) => state.comments
  );

  useEffect(() => {
    dispatch({
      type: CommentsActionTypes.LOAD_COMMENTS_REQUEST,
      value: kids
    });
  }, []);

  return (
    <Layout>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <StoryItem story={story} onPress={() => {}} />
        {text && <WebView style={styles.text} html={text} />}

        {loading ? (
          <View style={styles.activityIndicatorWrapper}>
            <ActivityIndicator animating={true} />
          </View>
        ) : error ? (
          <Text>An Error has ocurred!</Text>
        ) : (
          comments.map(comment => {
            return <Comment key={comment.id} {...comment} />;
          })
        )}
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  activityIndicatorWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    marginTop: 10,
    marginBottom: 50
  }
});

export default NewsStoryScreen;
