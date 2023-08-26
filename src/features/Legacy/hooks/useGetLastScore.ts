import { useAppDispatch, useAppSelector } from "../../../store";
import { setLastGameScore } from "../slice";

export const useGetLastScore = () => {
  const dispatch = useAppDispatch();
  const last_score = useAppSelector((state) => state.legacy.last_score);

  const resetLastScore = () => {
    dispatch(setLastGameScore(null));
  };

  return { last_score, resetLastScore };
};
