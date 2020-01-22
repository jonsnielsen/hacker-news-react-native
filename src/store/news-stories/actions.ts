import { NewsStoriesActionTypes, NewsStory } from "./types";
import { action } from "typesafe-actions";

export const loadTopTenRequest = () =>
  action(NewsStoriesActionTypes.LOAD_TOP_TEN_REQUEST);
export const loadTopTenSuccess = (data: NewsStory[]) => {
  return action(NewsStoriesActionTypes.LOAD_TOP_TEN_SUCCESS, data);
};
export const loadTopTenFailure = () =>
  action(NewsStoriesActionTypes.LOAD_TOP_TEN_FAILURE);
