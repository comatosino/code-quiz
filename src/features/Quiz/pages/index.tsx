import { Outlet, useLocation } from 'react-router-dom';

import { New } from './New';
import { Create } from './Create';
import { Play } from './Play';
import { GameOver } from './GameOver';
import { motion } from 'framer-motion';

type QuizMode = React.FC & {
  New: typeof New;
  Create: typeof Create;
  Play: typeof Play;
  GameOver: typeof GameOver;
};

export const Quiz: QuizMode = () => {
  const location = useLocation();
  return (
    <motion.div key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Outlet />
    </motion.div>
  );
};

Quiz.New = New;
Quiz.Create = Create;
Quiz.Play = Play;
Quiz.GameOver = GameOver;
