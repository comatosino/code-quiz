import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { legacySlice } from "../features/Legacy/slice";
import { quizApi, quizSlice } from "../features/Quiz/slice";

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
    [quizApi.reducerPath]: quizApi.reducer,
    [quizSlice.name]: quizSlice.reducer,
    [legacySlice.name]: legacySlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(quizApi.middleware),
});
