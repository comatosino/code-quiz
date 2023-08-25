import { Routes, Route } from "react-router-dom";

import { Home, Quiz, Legacy, _404 } from "./routes";
import { DefaultLayout } from "./layouts";

export const AppRouter: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {/* landing page */}
        <Route index element={<Home />} />

        {/* quiz */}
        <Route path="quiz" element={<Quiz />}>
          <Route index element={<Quiz.New />} />
          <Route path="play" element={<Quiz.Play />} />
          <Route path="gameover" element={<Quiz.GameOver />} />
        </Route>

        {/* legacy quiz */}
        <Route path="quiz-legacy" element={<Legacy />}>
          <Route index element={<Legacy.New />} />
          <Route path="play" element={<Legacy.Play />} />
          <Route path="gameover" element={<Legacy.GameOver />} />
          <Route path="scores" element={<Legacy.Scores />} />
        </Route>

        <Route path="*" element={<_404 />} />
      </Route>
    </Routes>
  );
};
