import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import commentsReducer from './commentsSlice';


export const store = configureStore({
  reducer: {
    comments: commentsReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>
