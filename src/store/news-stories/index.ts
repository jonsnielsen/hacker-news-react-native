import { dummyNews } from "../dummy-data";
import { Reducer } from "redux";
import { NewsStoriesActionTypes, NewsStoriesState } from "./types";

export const initialState: NewsStoriesState = {
  posts: dummyNews
};
// const hackerNews: Reducer<any, HackerNewsActions>  = (state = initialState, action: HackerNewsActionTypes) => {
const reducer: Reducer<NewsStoriesState> = (state = initialState, action) => {
  switch (action.type) {
    case NewsStoriesActionTypes.FETCH_ALL:
      return { posts: state.posts };
    case NewsStoriesActionTypes.FETCH_TOP_TEN:
      return { posts: state.posts };
    default:
      return state;
  }
};

export default reducer;
