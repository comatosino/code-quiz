import { Link } from "react-router-dom";
import { Button, Center, Heading, Stack } from "@chakra-ui/react";

export const New: React.FC = () => {
  return (
    <Center w="full" h="full">
      <Stack spacing={5}>
        <Heading>New Quiz</Heading>

        {/* fetch questions with the default */}
        <Button as={Link} to="/quiz/play">
          Quick Start
        </Button>

        {/* open a modal to set quiz options */}
        <Button>Create Quiz</Button>

        <Stack pt={10}>
          <Button as={Link} to="/">
            Back
          </Button>
        </Stack>
      </Stack>
    </Center>
  );
};
