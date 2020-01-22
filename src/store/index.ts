import { combineReducers } from "redux";
import reducer from "./news-stories";
import { NewsStoriesActionTypes } from "./news-stories/types";
import { fetchTopTenStories } from "./news-stories/sagas";
import { all, takeLatest } from "redux-saga/effects";

export const rootReducer = combineReducers({
  hackerNews: reducer
});

export function* rootSaga() {
  return yield all([
    takeLatest(NewsStoriesActionTypes.LOAD_TOP_TEN_REQUEST, fetchTopTenStories)
  ]);
}

export type AppActions = NewsStoriesActionTypes;
export type AppState = ReturnType<typeof rootReducer>;
