const loadScores = () => {
  const json = localStorage.getItem("quiz-classic-high-scores");
  let scores = [];
  if (json) {
    scores = JSON.parse(json);
  }
  return scores as IScore[];
};

export const high_scores = loadScores();
