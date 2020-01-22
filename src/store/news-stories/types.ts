/**
 * Action types
 */
export enum NewsStoriesActionTypes {
  LOAD_TOP_TEN_REQUEST = "@newsStories/LOAD_TOP_TEN_REQUEST",
  LOAD_TOP_TEN_SUCCESS = "@newsStories/LOAD_TOP_TEN_SUCCESS",
  LOAD_TOP_TEN_FAILURE = "@newsStories/LOAD_TOP_TEN_FALUIRE"
}

/**
 * Data types
 */
export interface NewsStory {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

/**
 * State types
 */
export interface NewsStoriesState {
  data: NewsStory[];
  error: boolean;
  loading: boolean;
}
