import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface QuizParams {
  amount?: number;
  category?: number;
  difficulty?: "easy" | "meduium" | "hard";
  type?: "multiple" | "boolean";
}
interface QuizState {
  params: QuizParams;
}

const initialState: QuizState = {
  params: { amount: 10 },
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setParams: (state, action: PayloadAction<QuizParams>) => {
      state.params = action.payload;
    },
  },
});
