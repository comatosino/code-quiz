import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IQuizState = {
  params: { amount: 10 },
  lastQuizScore: null,
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    defaultQuiz: () => initialState,
    setParams: (state, action: PayloadAction<IQuizParams>) => {
      state.params = action.payload;
    },
    setLastScore: (state, action: PayloadAction<IQuizLastScore | null>) => {
      state.lastQuizScore = action.payload;
    },
  },
});

export const { defaultQuiz, setParams, setLastScore } = quizSlice.actions;
