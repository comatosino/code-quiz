import { Outlet } from "react-router-dom";

type QuizMode = React.FC & {
  //   Home: typeof Home;
  //   Play: typeof Play;
};

export const Quiz = () => <Outlet />;
