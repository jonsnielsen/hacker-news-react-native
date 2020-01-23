import React, { useEffect } from "react";
import styled from "styled-components/native";
import { FlatList, Text } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store";
import {
  NewsStoriesState,
  NewsStoriesActionTypes
} from "../../store/news-stories/types";
import ActivityIndicator from "../../components/ActivityIndicator";
import NewsStory from "./NewsStory";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import Layout from "../../components/layout";

interface IProps extends NavigationInjectedProps {}

const HomeScreen: NavigationStackScreenComponent<IProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { newsStories, loading, error } = useSelector<
    AppState,
    NewsStoriesState
  >((state: AppState) => state.hackerNews);

  useEffect(() => {
    dispatch({ type: NewsStoriesActionTypes.LOAD_TOP_TEN_REQUEST });
  }, []);

  if (loading) {
    return (
      <SActivityIndicatorWrapper>
        <ActivityIndicator size="large" />
      </SActivityIndicatorWrapper>
    );
  }

  if (error) {
    return <Text>An Error has ocurred!</Text>;
  }
  return (
    <Layout>
      <STitle>Hacker News</STitle>
      <FlatList
        data={newsStories}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item: newsStory }) => (
          <NewsStory
            title={newsStory.title}
            author={newsStory.author.id}
            simplifiedUrl={newsStory.simplifiedUrl}
            url={newsStory.url}
            key={newsStory.id}
            score={newsStory.score}
            karma={newsStory.author.karma}
          >
            {newsStory.url}
          </NewsStory>
        )}
      />
    </Layout>
  );
};

const SActivityIndicatorWrapper = styled.View`
  flex: 1;
  justify-content: center;
`;

const STitle = styled.Text`
  ${({ theme }) => `
    color: ${theme.palette.primary};
    font-size:  ${theme.fontSize.h1};
    font-family: ${theme.fontFamily.primary.bold}
  `}
  text-align: left;
  align-self: flex-start;
  margin-vertical: 30px;
`;

export default HomeScreen;
