import { Outlet } from "react-router-dom";

import { Home } from "./Home";
import { Quiz } from "./Quiz";
import { Scores } from "./Scores";
import { GameOver } from "./GameOver";

type LegacyMode = React.FC & {
  Home: typeof Home;
  Quiz: typeof Quiz;
  Scores: typeof Scores;
  GameOver: typeof GameOver;
};

export const Legacy: LegacyMode = () => <Outlet />;

Legacy.Home = Home;
Legacy.Quiz = Quiz;
Legacy.GameOver = GameOver;
Legacy.Scores = Scores;
