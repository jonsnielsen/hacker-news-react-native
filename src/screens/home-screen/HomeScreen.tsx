import React, { useEffect } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store";
import {
  NewsStoriesState,
  NewsStoriesActionTypes
} from "../../store/news-stories/types";
import {
  ActivityIndicator,
  Title,
  Text,
  Switch,
  useTheme
} from "react-native-paper";
import NewsStory from "./news-story";
// import Layout from "../../components/layout";

import { StackNavigatorParamlist } from "../../types/NavigationTypes";

interface IProps {
  navigation?: StackNavigationProp<StackNavigatorParamlist>;
}

const HomeScreen: React.FC<IProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { newsStories, loading, error } = useSelector<
    AppState,
    NewsStoriesState
  >((state: AppState) => state.hackerNews);

  useEffect(() => {
    dispatch({ type: NewsStoriesActionTypes.LOAD_TOP_TEN_REQUEST });
  }, []);

  const data = newsStories.map(newsStory => ({
    newsStory,
    onPress: () => {
      navigation?.push("NewsStory", newsStory);
    }
  }));

  return (
    <View style={[styles.wrapper, { backgroundColor: theme.colors.surface }]}>
      {loading ? (
        <ActivityIndicator animating={true} />
      ) : error ? (
        <Text>An Error has ocurred!</Text>
      ) : (
        <FlatList
          data={data}
          contentContainerStyle={{ backgroundColor: theme.colors.background }}
          // style={{ backgroundColor: theme.colors.background }}
          keyExtractor={item => item.newsStory.id.toString()}
          renderItem={({ item }) => <NewsStory {...item} />}
          ItemSeparatorComponent={() => (
            <View style={{ height: StyleSheet.hairlineWidth }} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
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

export default HomeScreen;
