import { Button } from "@chakra-ui/react";

import { Page } from "../@types";

interface IScoreProps {
  setPage: React.Dispatch<React.SetStateAction<Page>>;
}

export const Scores: React.FC<IScoreProps> = ({ setPage }): JSX.Element => {
  return (
    <>
      <h1>Scores</h1>
      <Button onClick={() => setPage(Page.HOME)}>Back</Button>
    </>
  );
};
