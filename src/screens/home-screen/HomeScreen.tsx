import React, { useEffect } from "react";
import styled from "styled-components/native";
import { FlatList  } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store";
import {
  NewsStoriesState,
  NewsStoriesActionTypes
} from "../../store/news-stories/types";
import { ActivityIndicator,Title } from 'react-native-paper';
import NewsStory from "./news-story";
import Layout from "../../components/layout";
import { useToggleTheme } from "../../theme/ToggleTheme";
import { StackNavigatorParamlist } from "../../types/NavigationTypes";

interface IProps {
  navigation?: StackNavigationProp<StackNavigatorParamlist>;
}

const HomeScreen: React.FC<IProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { newsStories, loading, error } = useSelector<
    AppState,
    NewsStoriesState
  >((state: AppState) => state.hackerNews);
  const { isLightTheme, toggleTheme } = useToggleTheme();

  useEffect(() => {
    dispatch({ type: NewsStoriesActionTypes.LOAD_TOP_TEN_REQUEST });
  }, []);

  if (loading) {
    return (
      <ActivityIndicator animating={true} />
    );
  }

  if (error) {
    return <Text>An Error has ocurred!</Text>;
  }

  const data = newsStories.map(newsStory => ({
    newsStory,
    onPress: () => {
      navigation?.push("NewsStory", newsStory);
    }
  }));
  return (
    <Layout>
      {/* <STitle>Hacker News</STitle> */}
      <Title>Hacker News</Title>
      <Switch onValueChange={toggleTheme} value={!isLightTheme} />
      <FlatList
        data={data}
        keyExtractor={item => item.newsStory.author.id.toString()}
        renderItem={({ item }) => <NewsStory {...item} />}
      />
    </Layout>
  );
};


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

export default HomeScreen;
