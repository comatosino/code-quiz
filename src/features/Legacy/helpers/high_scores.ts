import { CONFIG } from '../../../config';

const loadScores = (): IScore[] => {
  const json = localStorage.getItem(CONFIG.LOCAL_STORAGE_KEY_LEGACY);
  return json ? JSON.parse(json) : [];
};

export const high_scores = loadScores();
