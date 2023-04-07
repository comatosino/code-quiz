import { Provider } from "react-redux";

import { store } from "./store";
import { DefaultLayout } from "./layouts";
import { Home, Quiz, Scores } from "./pages";
import { useNavigate } from "./hooks/useNavigate";
import { PAGE } from "./@types";

const PAGE_MAP = {
  [PAGE.HOME]: <Home />,
  [PAGE.QUIZ]: <Quiz />,
  [PAGE.SCORES]: <Scores />,
};

export const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <DefaultLayout>
        <Main />
      </DefaultLayout>
    </Provider>
  );
};

const Main: React.FC = (): JSX.Element => {
  const { page } = useNavigate();
  return PAGE_MAP[page];
};
