import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "./layouts";
import { Home, Classic, Modern, Multiplayer, Settings, _404 } from "./routes";

export const AppRouter: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="classic" element={<Classic />}>
          <Route index element={<Classic.Home />} />
          <Route path="quiz" element={<Classic.Quiz />} />
          <Route path="gameover" element={<Classic.GameOver />} />
          <Route path="scores" element={<Classic.Scores />} />
        </Route>
        <Route path="modern" element={<Modern />} />
        <Route path="multiplayer" element={<Multiplayer />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<_404 />} />
      </Route>
    </Routes>
  );
};
