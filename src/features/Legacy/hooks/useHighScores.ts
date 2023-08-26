import { useAppDispatch, useAppSelector } from "../../../store";
import { setHighScores } from "../slice";
import { CONFIG } from "../../../config";

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
    localStorage.setItem(CONFIG.LOCAL_STORAGE_KEY_LEGACY, JSON.stringify(topTen));
    dispatch(setHighScores(topTen));
  };

  const clearHighScores = () => {
    localStorage.removeItem(CONFIG.LOCAL_STORAGE_KEY_LEGACY);
    dispatch(setHighScores([]));
  };

  return { high_scores, saveHighScore, clearHighScores };
};
