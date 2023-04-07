import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { PAGE } from "../../@types";

interface PageState {
  index: PAGE;
}

const initialState: PageState = {
  index: PAGE.HOME,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<PAGE>) => {
      state.index = action.payload;
    },
  },
});

export const { setPage } = pageSlice.actions;
