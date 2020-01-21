import { NewsStoriesActionTypes } from "./types";
import { action } from "typesafe-actions";

export const fetchTopTenNewsStories = () =>
  action(NewsStoriesActionTypes.FETCH_TOP_TEN);

export const fetchAllNewsStories = () =>
  action(NewsStoriesActionTypes.FETCH_ALL);
