import { Routes, Route } from "react-router-dom";

import { Home, Legacy, _404 } from "./routes";
import { DefaultLayout } from "./layouts";

export const AppRouter: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {/* landing page */}
        <Route index element={<Home />} />

        {/* quiz */}
        <Route path="quiz">
          <Route index></Route>
        </Route>

        {/* legacy quiz */}
        <Route path="legacy" element={<Legacy />}>
          <Route index element={<Legacy.Home />} />
          <Route path="quiz" element={<Legacy.Quiz />} />
          <Route path="gameover" element={<Legacy.GameOver />} />
          <Route path="scores" element={<Legacy.Scores />} />
        </Route>

        <Route path="*" element={<_404 />} />
      </Route>
    </Routes>
  );
};
