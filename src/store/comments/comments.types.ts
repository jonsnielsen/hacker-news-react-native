import { IComment } from "../../types/Comment";
/**
 * Action types
 */
export enum CommentsActionTypes {
  LOAD_COMMENTS_REQUEST = "@comments/LOAD_REQUEST",
  LOAD_COMMENTS_SUCCESS = "@comments/LOAD_SUCCESS",
  LOAD_COMMENTS_FAILURE = "@comments/LOAD_FALUIRE"
}

/**
 * State types
 */
export interface CommentsState {
  comments: IComment[];
  error: boolean;
  loading: boolean;
}
