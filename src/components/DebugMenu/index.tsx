import { Stack, Text, Button } from "@chakra-ui/react";

export const DebugMenu: React.FC = (): JSX.Element => {
  return (
    <Stack bgColor="whiteAlpha.200" p={3} borderRadius={10}>
      <Text as="h4">DEBUG</Text>
      <Button display="block" textAlign="left">
        Home
      </Button>
      <Button display="block" textAlign="left">
        Quiz
      </Button>
      <Button display="block" textAlign="left">
        High Scores
      </Button>
    </Stack>
  );
};
