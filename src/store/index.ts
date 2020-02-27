import { combineReducers } from "redux";
import storiesReducer from "./stories";
import commentsReducer from "./comments";
import { StoriesActionTypes } from "./stories/stories.types";
import { CommentsActionTypes } from "./comments/comments.types";
import {
  fetchTopNewsStories,
  fetchJobStories,
  fetchQuestionStories
} from "./stories/stories.sagas";
import { fetchComments } from "./comments/comments.sagas";
import { all, takeLatest, takeEvery } from "redux-saga/effects";

export const rootReducer = combineReducers({
  hackerNews: storiesReducer,
  comments: commentsReducer
});

export function* rootSaga() {
  return yield all([
    takeLatest(StoriesActionTypes.LOAD_NEWS_STORY_REQUEST, fetchTopNewsStories),
    takeLatest(StoriesActionTypes.LOAD_JOB_STORIES_REQUEST, fetchJobStories),
    takeLatest(
      StoriesActionTypes.LOAD_QUESTION_STORIES_REQUEST,
      fetchQuestionStories
    ),
    takeEvery(CommentsActionTypes.LOAD_COMMENTS_REQUEST, fetchComments)
  ]);
}

export type AppActions = StoriesActionTypes;
export type AppState = ReturnType<typeof rootReducer>;
