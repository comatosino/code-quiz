import { Outlet } from 'react-router-dom';
import { New } from './New';
import { Play } from './Play';
import { GameOver } from './GameOver';
import { Scores } from './Scores';

type LegacyMode = React.FC & {
  New: typeof New;
  Play: typeof Play;
  GameOver: typeof GameOver;
  Scores: typeof Scores;
};

export const Legacy: LegacyMode = () => {
  return <Outlet />;
};

Legacy.New = New;
Legacy.Play = Play;
Legacy.GameOver = GameOver;
Legacy.Scores = Scores;
