import { Link } from "react-router-dom";
import { Button, Center, Stack, Text } from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";

export { _404 } from "./_404";
export { Legacy } from "./Legacy";
export { Quiz } from "./Quiz";

export const Home: React.FC = (): JSX.Element => {
  document.title = "Quizality";
  return (
    <Center flexGrow={1} flexDir="column">
      <QuestionOutlineIcon fontSize={128} />

      <Text textAlign="center" fontSize={48}>
        Quizality 🤔
      </Text>

      <Stack spacing={5} py={10}>
        <Button as={Link} to="/quiz">
          New Quiz
        </Button>

        <Button as={Link} to="/quiz-legacy">
          Legacy Quiz
        </Button>
      </Stack>
    </Center>
  );
};
