import { Outlet } from "react-router-dom";

import { New } from "./New";
import { Play } from "./Play";
import { Scores } from "./Scores";
import { GameOver } from "./GameOver";

type LegacyMode = React.FC & {
  New: typeof New;
  Play: typeof Play;
  Scores: typeof Scores;
  GameOver: typeof GameOver;
};

export const Legacy: LegacyMode = () => <Outlet />;

Legacy.New = New;
Legacy.Play = Play;
Legacy.GameOver = GameOver;
Legacy.Scores = Scores;
