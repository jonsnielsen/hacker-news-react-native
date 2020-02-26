import { IStory } from "../../types/Story";
/**
 * Action types
 */
export enum TopNewsStoriesActionTypes {
  LOAD_STORY_REQUEST = "@newsStories/LOAD_REQUEST",
  LOAD_STORY_SUCCESS = "@newsStories/LOAD_SUCCESS",
  LOAD_STORY_FAILURE = "@newsStories/LOAD_FALUIRE"
}

export enum JobStoriesActionTypes {
  LOAD_JOB_STORIES_REQUEST = "@jobStories/LOAD_REQUEST",
  LOAD_JOB_STORIES_SUCCESS = "@jobStories/LOAD_SUCCESS",
  LOAD_JOB_STOREIS_FAILURE = "@jobStories/LOAD_FALUIRE"
}

export enum QuestionStoriesActionTypes {
  LOAD_QUESTION_STORIES_REQUEST = "@questionStories/LOAD_REQUEST",
  LOAD_QUESTOIN_STORIES_SUCCESS = "@questionStories/LOAD_SUCCESS",
  LOAD_QUESTION_STOREIS_FAILURE = "@questionStories/LOAD_FALUIRE"
}

/**
 * State types
 */
export interface StoriesState {
  stories: IStory[];
  error: boolean;
  loading: boolean;
}
