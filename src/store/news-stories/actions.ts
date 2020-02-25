import { NewsStoriesActionTypes } from "./types";
import { action } from "typesafe-actions";
import { INewsStory } from "../../types/NewsStory";

export const loadTopTenRequest = () =>
  action(NewsStoriesActionTypes.LOAD_TOP_TEN_REQUEST);
export const loadTopTenSuccess = (newsStories: INewsStory[]) => {
  return action(NewsStoriesActionTypes.LOAD_TOP_TEN_SUCCESS, newsStories);
};
export const loadTopTenFailure = () =>
  action(NewsStoriesActionTypes.LOAD_TOP_TEN_FAILURE);
