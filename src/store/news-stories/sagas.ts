// import { call, all, put, takeEvery, takeLatest } from "redux-saga/effects";
import { call, all, put } from "typed-redux-saga";
import { fetchTopNewsStoriesIds, fetchStory } from "../../API/newsStories";
import { fetchAuthor } from "../../API/authors";
import { IStory } from "../../types/Story";
import { loadTopTenSuccess, loadTopTenFailure } from "./actions";
import _ from "lodash";
import { simplifyUrl } from "../../utils/text";

export function* fetchTopTenStories() {
  try {
    const topNewsStoriesIds = yield* call(fetchTopNewsStoriesIds);
    const tenRandomIds = _.sampleSize(topNewsStoriesIds, 10);
    const topTenNewsStoriesDTOs = yield* all(
      tenRandomIds.map(id => call(fetchStory, { id }))
    );
    const topTenNewsStories = yield* all(
      topTenNewsStoriesDTOs.map(dto =>
        fetchAuthor({ id: dto.by }).then(
          (author): IStory => ({
            ...dto,
            simplifiedUrl: simplifyUrl(dto.url),
            author
          })
        )
      )
    );

    yield put(loadTopTenSuccess(topTenNewsStories));
  } catch (err) {
    console.log("error");
    console.log(err);
    yield put(loadTopTenFailure());
  }
}
