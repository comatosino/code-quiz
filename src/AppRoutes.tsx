import { Routes, Route } from "react-router-dom";

import { Home, Legacy, Settings, _404 } from "./routes";
import { DefaultLayout } from "./layouts";

const BASE = "quizality";

const path = (pathname: string) => `${BASE}/${pathname}`;

export const AppRouter: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path={BASE} element={<DefaultLayout />}>
        <Route index element={<Home />} />

        {/* legacy quiz game */}
        <Route path={path("legacy")} element={<Legacy />}>
          <Route index element={<Legacy.Home />} />
          <Route path={path("quiz")} element={<Legacy.Quiz />} />
          <Route path={path("gameover")} element={<Legacy.GameOver />} />
          <Route path={path("scores")} element={<Legacy.Scores />} />
        </Route>

        <Route path={path("settings")} element={<Settings />} />

        <Route path="*" element={<_404 />} />
      </Route>
    </Routes>
  );
};
