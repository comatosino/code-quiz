import { useState } from "react";

import { Page } from "./@types";
import { Home, Game, Scores } from "./pages";
import { DefaultLayout } from "./layouts";

export const App: React.FC = (): JSX.Element => {
  const [page, setPage] = useState(Page.HOME);

  switch (page) {
    default:
      return (
        <DefaultLayout>
          <Home setPage={setPage} />
        </DefaultLayout>
      );
    case Page.GAME:
      return (
        <DefaultLayout>
          <Game />
        </DefaultLayout>
      );
    case Page.SCORES:
      return (
        <DefaultLayout>
          <Scores setPage={setPage} />
        </DefaultLayout>
      );
  }
};
