import { Stack, Center, Heading, Button } from "@chakra-ui/react";
import { PageHeading } from "../../components/PageHeading";

export const Classic: React.FC = (): JSX.Element => {
  document.title = "Quiz Game - Classic";
  return (
    <>
      <PageHeading>Classic</PageHeading>

      <Center flexGrow={1}>
        <Stack spacing={5}>
          <Button>Start</Button>
          <Button>View High Scores</Button>
        </Stack>
      </Center>
    </>
  );
};
