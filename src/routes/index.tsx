import { PageHeading } from "../components/PageHeading";

export { _404 } from "./_404";
export { Classic } from "./Classic";
export { Modern } from "./Modern";
export { Multiplayer } from "./Multiplayer";
export { Settings } from "./Settings";

export const Home: React.FC = (): JSX.Element => {
  document.title = "Quiz Game";
  return (
    <>
      <PageHeading>Home</PageHeading>
    </>
  );
};
