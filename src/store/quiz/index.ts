import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface QuizState {
  endpoint: string;
}

const initialState: QuizState = {
  endpoint: "https://opentdb.com/api.php?amount=10",
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setEndpoint: (state, action: PayloadAction<string>) => {
      state.endpoint = action.payload;
    },
  },
});
