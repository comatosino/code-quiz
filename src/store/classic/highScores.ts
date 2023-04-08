import { IHighScore } from "../../@types";

const loadScores = () => {
  const json = localStorage.getItem("high-scores-classic");
  let scores: IHighScore[] = [];
  if (json) {
    scores = JSON.parse(json) as IHighScore[];
  }
  return scores;
};

export default loadScores();
