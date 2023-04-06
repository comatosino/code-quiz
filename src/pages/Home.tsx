import { Heading, Stack, Button } from "@chakra-ui/react";

import { Page } from "../@types";

interface IHomeProps {
  setPage: React.Dispatch<React.SetStateAction<Page>>;
}

export const Home: React.FC<IHomeProps> = ({ setPage }): JSX.Element => {
  return (
    <>
      <Heading as="h1" size="4xl" mb={10}>
        Quiz Game
      </Heading>

      <Stack spacing={5}>
        <Button onClick={() => setPage(Page.GAME)}>Start</Button>
        <Button onClick={() => setPage(Page.SCORES)}>View High Scores</Button>
      </Stack>
    </>
  );
};
