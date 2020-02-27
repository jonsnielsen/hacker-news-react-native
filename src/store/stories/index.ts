import { Reducer } from "redux";
import { StoriesActionTypes, StoriesState } from "./stories.types";

export const initialState: StoriesState = {
  questionsStories: [],
  jobStories: [],
  newsStories: [],
  error: false,
  loading: false
};

const reducer: Reducer<StoriesState> = (state = initialState, action) => {
  switch (action.type) {
    case StoriesActionTypes.LOAD_NEWS_STORY_REQUEST:
      return { ...state, loading: true };
    case StoriesActionTypes.LOAD_NEWS_STORY_SUCCESS:
      return {
        ...state,
        newsStories: action.payload,
        loading: false,
        error: false
      };
    case StoriesActionTypes.LOAD_NEWS_STORY_FAILURE:
      return { ...state, loading: false, error: true };

    case StoriesActionTypes.LOAD_QUESTION_STORIES_REQUEST:
      return { ...state, loading: true };
    case StoriesActionTypes.LOAD_QUESTOIN_STORIES_SUCCESS:
      return {
        ...state,
        questionsStories: action.payload,
        loading: false,
        error: false
      };
    case StoriesActionTypes.LOAD_QUESTION_STOREIS_FAILURE:
      return { ...state, loading: false, error: true };

    case StoriesActionTypes.LOAD_JOB_STORIES_REQUEST:
      return { ...state, loading: true };
    case StoriesActionTypes.LOAD_JOB_STORIES_SUCCESS:
      return {
        ...state,
        jobStories: action.payload,
        loading: false,
        error: false
      };
    case StoriesActionTypes.LOAD_JOB_STOREIS_FAILURE:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};

export default reducer;
