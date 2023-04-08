import { Outlet } from "react-router-dom";
import { GameOver, Home, Quiz, Scores } from "./views";

type ClassicMode = React.FC & {
  Home: typeof Home;
  Quiz: typeof Quiz;
  GameOver: typeof GameOver;
  Scores: typeof Scores;
};

export const Classic: ClassicMode = (): JSX.Element => {
  document.title = "Quiz Game - Classic";
  return <Outlet />;
};

Classic.Home = Home;
Classic.Quiz = Quiz;
Classic.GameOver = GameOver;
Classic.Scores = Scores;
