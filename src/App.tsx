import { Provider } from "react-redux";
import { AppRouter } from "./routes";
import { store } from "./store";

export const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
