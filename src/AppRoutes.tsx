import { Routes, Route } from "react-router-dom";

import { Home, Legacy, Settings, _404 } from "./routes";
import { DefaultLayout } from "./layouts";

export const AppRouter: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />

        {/* legacy quiz game */}
        <Route path={"legacy"} element={<Legacy />}>
          <Route index element={<Legacy.Home />} />
          <Route path={"quiz"} element={<Legacy.Quiz />} />
          <Route path={"gameover"} element={<Legacy.GameOver />} />
          <Route path={"scores"} element={<Legacy.Scores />} />
        </Route>

        <Route path={"settings"} element={<Settings />} />

        <Route path="*" element={<_404 />} />
      </Route>
    </Routes>
  );
};
