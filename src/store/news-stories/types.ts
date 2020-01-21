/**
 * Action types
 */
export enum NewsStoriesActionTypes {
  FETCH_TOP_TEN = "@newsStories/FETCH_TOP_TEN",
  FETCH_ALL = "@newsStories/FETCH_ALL"
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
  posts: NewsStory[];
}
