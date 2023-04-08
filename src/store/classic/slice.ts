import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import high_scores from "./highScores";
import { IHighScore } from "../../@types";

interface ClassicState {
  last_game_score: number | null;
  high_scores: IHighScore[];
}

const initialState: ClassicState = {
  last_game_score: null,
  high_scores,
};

export const classicSlice = createSlice({
  name: "classic",
  initialState,
  reducers: {
    saveScore: (state, action: PayloadAction<IHighScore>) => {
      let curr: IHighScore;
      let i = 0;
      do {
        curr = state.high_scores[i];
        if (!curr) {
          state.high_scores.push(action.payload);
          break;
        }
        if (action.payload.score > curr?.score) {
          state.high_scores.splice(i, 0, action.payload);
          break;
        }
        i++;
      } while (curr);
    },

    setLastGameScore: (state, action: PayloadAction<number>) => {
      state.last_game_score = action.payload;
    },
  },
});

export const { saveScore, setLastGameScore } = classicSlice.actions;
