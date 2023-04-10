import { useAppSelector, useAppDispatch } from "../../../store";

import { legacySlice } from "../../../store";

const { actions } = legacySlice;

export const useGetLastScore = () => {
  const dispatch = useAppDispatch();
  const last_score = useAppSelector((state) => state.legacy.last_score);

  const resetLastScore = () => {
    dispatch(actions.setLastGameScore(null));
  };

  return { last_score, resetLastScore };
};
