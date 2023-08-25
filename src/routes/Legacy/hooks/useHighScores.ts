import { useAppDispatch, useAppSelector } from "../../../store";
import { legacySlice } from "../../../store/legacy";

const { actions } = legacySlice;

export const useHighScores = () => {
  const dispatch = useAppDispatch();
  const high_scores = useAppSelector((state) => state.legacy.high_scores);

  const saveHighScore = (newEntry: IScore) => {
    const newScores = [...high_scores];
    let curr: IScore;
    let i = 0;
    do {
      curr = newScores[i];
      if (!curr) {
        newScores.push(newEntry);
        break;
      }
      if (newEntry.score > curr.score) {
        newScores.splice(i, 0, newEntry);
        break;
      }
      i++;
    } while (curr);
    const topTen = newScores.splice(0, 10);
    localStorage.setItem("quiz-classic-high-scores", JSON.stringify(topTen));
    dispatch(actions.setHighScores(topTen));
  };

  const clearHighScores = () => {
    localStorage.removeItem("quiz-classic-high-scores");
    dispatch(actions.setHighScores([]));
  };

  return { high_scores, saveHighScore, clearHighScores };
};
