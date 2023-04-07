import { Stack, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "../../hooks/useNavigate";
import { PAGE } from "../../@types";

export const DebugMenu: React.FC = (): JSX.Element => {
  const { setPage } = useNavigate();

  return (
    <Stack bgColor="whiteAlpha.200" p={3} borderRadius={10}>
      <Text as="h4">DEBUG</Text>
      <Button
        display="block"
        textAlign="left"
        onClick={() => {
          setPage(PAGE.HOME);
        }}
      >
        Home
      </Button>
      <Button
        display="block"
        textAlign="left"
        onClick={() => {
          setPage(PAGE.QUIZ);
        }}
      >
        Quiz
      </Button>
      <Button
        display="block"
        textAlign="left"
        onClick={() => {
          setPage(PAGE.SCORES);
        }}
      >
        High Scores
      </Button>
    </Stack>
  );
};
