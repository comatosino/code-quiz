import { Outlet } from "react-router-dom";

import { Home } from "./Home";
import { GameOver } from "./GameOver";
import { Quiz } from "./Quiz";
import { Scores } from "./Scores";

type LegacyMode = React.FC & {
  Home: typeof Home;
  Quiz: typeof Quiz;
  GameOver: typeof GameOver;
  Scores: typeof Scores;
};

export const Legacy: LegacyMode = (): JSX.Element => {
  document.title = "Quiz Game - Legacy";
  return <Outlet />;
};

Legacy.Home = Home;
Legacy.Quiz = Quiz;
Legacy.GameOver = GameOver;
Legacy.Scores = Scores;
