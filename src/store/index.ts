import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { quizSlice } from "./quiz";
import { legacySlice } from "./legacy";

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store = configureStore({
  reducer: {
    quiz: quizSlice.reducer,
    legacy: legacySlice.reducer,
  },
});
