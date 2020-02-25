import { INewsStory } from "../../types/NewsStory";
/**
 * Action types
 */
export enum NewsStoriesActionTypes {
  LOAD_TOP_TEN_REQUEST = "@newsStories/LOAD_TOP_TEN_REQUEST",
  LOAD_TOP_TEN_SUCCESS = "@newsStories/LOAD_TOP_TEN_SUCCESS",
  LOAD_TOP_TEN_FAILURE = "@newsStories/LOAD_TOP_TEN_FALUIRE"
}

/**
 * State types
 */
export interface NewsStoriesState {
  newsStories: INewsStory[];
  error: boolean;
  loading: boolean;
}
