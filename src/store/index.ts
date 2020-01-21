import { combineReducers } from "redux";
import reducer, { initialState } from "./news-stories";
import { NewsStoriesActionTypes } from "./news-stories/types";
import postsSaga from "./news-stories/sagas";
import { put, takeEvery, all } from "redux-saga/effects";

export const rootReducer = combineReducers({
  hackerNews: reducer
});

export function* rootSaga() {
  yield all([postsSaga]);
}
export type AppActions = NewsStoriesActionTypes;
// export type AppState = typeof initialState;
export type AppState = ReturnType<typeof rootReducer>;
