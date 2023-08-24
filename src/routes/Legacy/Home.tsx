import { Link as RouterLink } from "react-router-dom";
import { Center, Stack, Button, Heading } from "@chakra-ui/react";

export const Home: React.FC = (): JSX.Element => {
  document.title = "Quizality | Legacy";

  return (
    <Center w="full" h="full">
      <Stack spacing={5}>
        <Heading>Legacy Mode</Heading>
        <Button as={RouterLink} to="/legacy/quiz">
          Start Quiz
        </Button>
        <Button as={RouterLink} to="/legacy/scores">
          View High Scores
        </Button>
        <Stack pt={10}>
          <Button as={RouterLink} to="/">
            Back
          </Button>
        </Stack>
      </Stack>
    </Center>
  );
};
