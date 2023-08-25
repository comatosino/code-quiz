const loadScores = (): IScore[] => {
  const json = localStorage.getItem("quiz-classic-high-scores");
  return json ? JSON.parse(json) : [];
};

export const high_scores = loadScores();
