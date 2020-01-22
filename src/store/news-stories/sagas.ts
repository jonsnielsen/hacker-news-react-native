import { call, all, put, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchTopNewsStories, fetchNewsStory } from "../../data/newsStories";
import { loadTopTenSuccess, loadTopTenFailure } from "./actions";
import _ from "lodash";

export function* fetchTopTenStories() {
  try {
    const response = yield call(fetchTopNewsStories);
    const tenRandomIds = _.sampleSize(response.data, 10);
    const topTenNewsStoriesResponse = yield all(
      tenRandomIds.map(id => call(fetchNewsStory, { id }))
    );
    const topTenNewsStories = topTenNewsStoriesResponse.map(res => res.data);
    yield put(loadTopTenSuccess(topTenNewsStories));
  } catch (err) {
    console.log("error");
    console.log(err);
    yield put(loadTopTenFailure());
  }
}
