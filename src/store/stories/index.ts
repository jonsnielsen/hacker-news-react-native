import { Reducer } from "redux";
import { TopNewsStoriesActionTypes, StoriesState } from "./stories.types";

export const initialState: StoriesState = {
  stories: [],
  error: false,
  loading: false
};

const reducer: Reducer<StoriesState> = (state = initialState, action) => {
  switch (action.type) {
    case TopNewsStoriesActionTypes.LOAD_STORY_REQUEST:
      return { ...state, loading: true };
    case TopNewsStoriesActionTypes.LOAD_STORY_SUCCESS:
      return {
        ...state,
        newsStories: action.payload,
        loading: false,
        error: false
      };
    case TopNewsStoriesActionTypes.LOAD_STORY_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default reducer;
