import { Link as RouterLink } from "react-router-dom";
import { Center, Stack, Button } from "@chakra-ui/react";
import { PageHeading } from "../../../components/PageHeading";
import { QuestionOutlineIcon } from "@chakra-ui/icons";

export const Home: React.FC = (): JSX.Element => {
  document.title = "Quiz Game - Classic";

  return (
    <>
      <PageHeading>Classic Mode</PageHeading>

      <Center flexGrow={1} flexDir="column">
        <QuestionOutlineIcon fontSize={64} mb={10} />
        <Stack spacing={5}>
          <Button as={RouterLink} to="/classic/quiz">
            Start Quiz
          </Button>

          <Button as={RouterLink} to="/classic/scores">
            View High Scores
          </Button>
        </Stack>
      </Center>
    </>
  );
};
