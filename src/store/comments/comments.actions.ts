import { CommentsActionTypes } from "./comments.types";
import { action } from "typesafe-actions";
import { IComment } from "../../types/Comment";

export const loadCommentsRequest = (rootCommentsIds: number[]) =>
  action(CommentsActionTypes.LOAD_COMMENTS_REQUEST, rootCommentsIds);

export const loadCommentsSuccess = (comments: IComment[]) => {
  return action(CommentsActionTypes.LOAD_COMMENTS_SUCCESS, comments);
};
export const loadCommentsFailure = () =>
  action(CommentsActionTypes.LOAD_COMMENTS_FAILURE);
