import { combineReducers } from "redux";
import reducer from "./stories";
import {
  TopNewsStoriesActionTypes,
  JobStoriesActionTypes,
  QuestionStoriesActionTypes
} from "./stories/stories.types";
import {
  fetchTopNewsStories,
  fetchJobStories,
  fetchQuestionStories
} from "./stories/stories.sagas";
import { all, takeLatest } from "redux-saga/effects";
import { fetchQuestionStoriesIds } from "../API/stories.api";

export const rootReducer = combineReducers({
  hackerNews: reducer
});

export function* rootSaga() {
  return yield all([
    takeLatest(
      TopNewsStoriesActionTypes.LOAD_STORY_REQUEST,
      fetchTopNewsStories
    )
    // takeLatest(JobStoriesActionTypes.LOAD_JOB_STORIES_REQUEST, fetchJobStories),
    // takeLatest(QuestionStoriesActionTypes.LOAD_QUESTION_STORIES_REQUEST, fetchQuestionStories)
  ]);
}

export type AppActions = TopNewsStoriesActionTypes;
export type AppState = ReturnType<typeof rootReducer>;
