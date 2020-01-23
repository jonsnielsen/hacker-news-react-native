import { Reducer } from "redux";
import { NewsStoriesActionTypes, NewsStoriesState } from "./types";

export const initialState: NewsStoriesState = {
  newsStories: [],
  error: false,
  loading: false
};

const reducer: Reducer<NewsStoriesState> = (state = initialState, action) => {
  switch (action.type) {
    case NewsStoriesActionTypes.LOAD_TOP_TEN_REQUEST:
      return { ...state, loading: true };
    case NewsStoriesActionTypes.LOAD_TOP_TEN_SUCCESS:
      return {
        ...state,
        newsStories: action.payload,
        loading: false,
        error: false
      };
    case NewsStoriesActionTypes.LOAD_TOP_TEN_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default reducer;
