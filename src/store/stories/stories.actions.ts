import { StoriesActionTypes } from "./stories.types";
import { action } from "typesafe-actions";
import { IStory } from "../../types/Story";

export const loadTopNewsStoriesRequest = () =>
  action(StoriesActionTypes.LOAD_NEWS_STORY_REQUEST);

export const loadTopNewsStoriesSuccess = (newsStories: IStory[]) => {
  return action(StoriesActionTypes.LOAD_NEWS_STORY_SUCCESS, newsStories);
};
export const loadTopNewsStoriesFailure = () =>
  action(StoriesActionTypes.LOAD_NEWS_STORY_FAILURE);

export const loadQuestionsRequest = () =>
  action(StoriesActionTypes.LOAD_QUESTION_STORIES_REQUEST);

export const loadQuestionsSuccess = (newsStories: IStory[]) => {
  return action(StoriesActionTypes.LOAD_QUESTOIN_STORIES_SUCCESS, newsStories);
};
export const loadQuestionsFailure = () =>
  action(StoriesActionTypes.LOAD_QUESTION_STOREIS_FAILURE);

export const loadJobsRequest = () =>
  action(StoriesActionTypes.LOAD_JOB_STORIES_REQUEST);

export const loadJobsSuccess = (newsStories: IStory[]) => {
  return action(StoriesActionTypes.LOAD_JOB_STORIES_SUCCESS, newsStories);
};
export const loadJobsFailure = () =>
  action(StoriesActionTypes.LOAD_JOB_STOREIS_FAILURE);
