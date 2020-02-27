// import { call, all, put, takeEvery, takeLatest } from "redux-saga/effects";
import { call, all, put } from "typed-redux-saga";
import { fetchComment } from "../../API/comments.api";
import { loadCommentsFailure, loadCommentsSuccess } from "./comments.actions";
import { IComment } from "../../types/Comment";
import _ from "lodash";

export function* fetchComments({
  value: rootCommentsIds
}: {
  value: number[];
}) {
  if (!rootCommentsIds || !rootCommentsIds.length) {
    yield put(loadCommentsSuccess([]));
    return;
  }
  try {
    const commentsDTOs = yield* all(
      rootCommentsIds.map(id => call(fetchComment, { id }))
    );
    const comments = commentsDTOs.map(
      (commentsDTO): IComment => ({ ...commentsDTO, kids: [] })
    ); // Only use first level comments for now

    yield put(loadCommentsSuccess(comments));
  } catch (err) {
    console.log("error");
    console.log(err);
    yield put(loadCommentsFailure());
  }
}
