import { Link as RouterLink } from "react-router-dom";
import { Center, Stack, Button } from "@chakra-ui/react";
import { PageHeading } from "../../components/PageHeading";

export const Home: React.FC = (): JSX.Element => {
  document.title = "Quiz Game - Legacy";

  return (
    <>
      <PageHeading>Legacy Mode</PageHeading>

      <Center flexGrow={1} flexDir="column">
        <Stack spacing={5}>
          <Button as={RouterLink} to="/legacy/quiz">
            Start Quiz
          </Button>

          <Button as={RouterLink} to="/legacy/scores">
            View High Scores
          </Button>
        </Stack>
      </Center>
    </>
  );
};
