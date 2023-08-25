import { Outlet } from "react-router-dom";
import { New } from "./New";
import { Play } from "./Play";
import { GameOver } from "./GameOver";

type QuizMode = React.FC & {
  New: typeof New;
  Play: typeof Play;
  GameOver: typeof GameOver;
};

export const Quiz: QuizMode = () => {
  return <Outlet />;
};

Quiz.New = New;
Quiz.Play = Play;
Quiz.GameOver = GameOver;
