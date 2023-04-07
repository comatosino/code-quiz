import { Stack, Flex, Heading, Button } from "@chakra-ui/react";
import { PAGE } from "../@types";
import { useNavigate } from "../hooks/useNavigate";

export const Home: React.FC = (): JSX.Element => {
  const { setPage } = useNavigate();

  return (
    <Stack id="home" w="full" h="full">
      <Flex h={100} mx={5} alignItems="center">
        <Heading as="h1" size="4xl">
          Quiz Game
        </Heading>
      </Flex>

      <Stack spacing={5} w="50%" flexGrow={1} alignSelf="center" justifyContent="center">
        <Button
          onClick={() => {
            setPage(PAGE.QUIZ);
          }}
        >
          Start
        </Button>
        <Button
          onClick={() => {
            setPage(PAGE.SCORES);
          }}
        >
          View High Scores
        </Button>
      </Stack>
    </Stack>
  );
};
