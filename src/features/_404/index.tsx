import { Button, Center, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const _404: React.FC = (): JSX.Element => {
  document.title = "404 - page not found";
  return (
    <Center w="full">
      <Stack spacing={5}>
        <Text fontSize={32}>404 | Page not found</Text>
        <Button as={Link} to="/">
          Back to Home
        </Button>
      </Stack>
    </Center>
  );
};
