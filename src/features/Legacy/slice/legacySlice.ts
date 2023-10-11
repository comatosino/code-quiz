import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { high_scores } from '../helpers/high_scores';

interface LegacyState {
  high_scores: IScore[];
  last_score: number | null;
}

const initialState: LegacyState = {
  high_scores,
  last_score: null,
};

export const legacySlice = createSlice({
  name: 'legacy',
  initialState,
  reducers: {
    setHighScores: (state, action: PayloadAction<IScore[]>) => {
      state.high_scores = action.payload;
    },
    setLastGameScore: (state, action: PayloadAction<number | null>) => {
      state.last_score = action.payload;
    },
  },
});
