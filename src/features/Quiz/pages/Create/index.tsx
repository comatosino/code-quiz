import { Link } from "react-router-dom";
import { Button, Center, Heading, Stack } from "@chakra-ui/react";

import { AmountInput } from "./AmountInput";
import { CategorySelect } from "./CategorySelect";
import { DifficultySelect } from "./DifficultySelect";
import { TypeSelect } from "./TypeSelect";

export const Create: React.FC = () => {
  document.title = "Quizality | Create";

  return (
    <Center w="full">
      <Stack spacing={5}>
        <Heading>Custom Quiz</Heading>
        <AmountInput />
        <CategorySelect />
        <DifficultySelect />
        <TypeSelect />
        <Button as={Link} to="/quiz/play">
          Play quiz!
        </Button>
        <Button as={Link} to="/quiz">
          Go back
        </Button>
      </Stack>
    </Center>
  );
};
