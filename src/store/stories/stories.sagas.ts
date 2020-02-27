// import { call, all, put, takeEvery, takeLatest } from "redux-saga/effects";
import { call, all, put } from "typed-redux-saga";
import {
  fetchTopNewsStoriesIds,
  fetchStory,
  fetchJobStoriesIds,
  fetchQuestionStoriesIds
} from "../../API/stories.api";
import { fetchAuthor } from "../../API/authors.api";
import { IStory } from "../../types/Story";
import {
  loadTopNewsStoriesSuccess,
  loadTopNewsStoriesFailure,
  loadJobsSuccess,
  loadJobsFailure,
  loadQuestionsSuccess,
  loadQuestionsFailure
} from "./stories.actions";
import _ from "lodash";
import { simplifyUrl } from "../../utils/text";

export function* fetchTopNewsStories() {
  try {
    const topNewsStoriesIds = yield* call(fetchTopNewsStoriesIds);
    const ids = topNewsStoriesIds.slice(0, 15);
    const topNewsStories = yield _fetchStoriesFromIds(ids);
    yield put(loadTopNewsStoriesSuccess(topNewsStories));
  } catch (err) {
    console.log("error");
    console.log(err);
    yield put(loadTopNewsStoriesFailure());
  }
}

export function* fetchJobStories() {
  try {
    const jobStoriesIds = yield* call(fetchJobStoriesIds);
    const ids = jobStoriesIds.slice(0, 15);
    const jobStories = yield _fetchStoriesFromIds(ids);
    yield put(loadJobsSuccess(jobStories));
  } catch (err) {
    console.log("error");
    console.log(err);
    yield put(loadJobsFailure());
  }
}

export function* fetchQuestionStories() {
  try {
    const questionStoriesIds = yield* call(fetchQuestionStoriesIds);
    const ids = questionStoriesIds.slice(0, 15);
    const questionStories = yield _fetchStoriesFromIds(ids);
    yield put(loadQuestionsSuccess(questionStories));
  } catch (err) {
    console.log("error");
    console.log(err);
    yield put(loadQuestionsFailure());
  }
}

function* _fetchStoriesFromIds(ids: number[]) {
  const storiesDTOs = yield* all(ids.map(id => call(fetchStory, { id })));
  const stories = yield* all(
    storiesDTOs.map(dto =>
      fetchAuthor({ id: dto.by }).then(
        (author): IStory => ({
          ...dto,
          simplifiedUrl: simplifyUrl(dto.url),
          author
        })
      )
    )
  );
  return stories;
}
