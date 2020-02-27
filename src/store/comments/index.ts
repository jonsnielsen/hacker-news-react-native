import { Reducer } from "redux";
import { CommentsActionTypes, CommentsState } from "./comments.types";

export const initialState: CommentsState = {
  comments: [],
  error: false,
  loading: false
};

const reducer: Reducer<CommentsState> = (state = initialState, action) => {
  switch (action.type) {
    case CommentsActionTypes.LOAD_COMMENTS_REQUEST:
      return { ...state, loading: true };
    case CommentsActionTypes.LOAD_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        loading: false,
        error: false
      };
    case CommentsActionTypes.LOAD_COMMENTS_FAILURE:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};

export default reducer;
