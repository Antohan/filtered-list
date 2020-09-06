import { createSlice, Dispatch } from "@reduxjs/toolkit";

import { Comment } from '../models';
import commentsApi from '../services/api/commentsApi';
import { RootState } from ".";

export interface CommentState {
  loading: boolean;
  hasError: boolean;
  comments: Comment[],
};

export const initialState: CommentState = {
  loading: false,
  hasError: false,
  comments: [],
};


export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getComments: state => {
      state.loading = true;
    },
    getCommentsSuccess: (state, { payload }) => {
      state.comments = payload;
      state.loading = false;
      state.hasError = false;
    },
    getCommentsFailure: state => {
      state.loading = false;
      state.hasError = true;
    },
  },
});

export const { getComments, getCommentsSuccess, getCommentsFailure } = commentsSlice.actions;

export const commentSelector = (state: RootState) => state.comments;

export const fetchComments = () => async (dispatch: Dispatch) => {
  dispatch(getComments());

  try {
    const comments = await commentsApi.getCommetns();

    dispatch(getCommentsSuccess(comments));
  } catch (error) {
    dispatch(getCommentsFailure());
  }
}

export default commentsSlice.reducer;